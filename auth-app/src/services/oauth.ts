import { getUrls } from './urls';
import { v4 } from 'uuid';
import ky from 'ky';
import { stringify } from 'query-string';

export function authorize(clientId: string) {
	const { oauthAuthorizeUri, oauthRedirectUri } = getUrls();
	const state = v4();
	const scope = ['read:user', 'user:email'].join(' ');
	const query = stringify({
		client_id: clientId,
		redirect_uri: oauthRedirectUri,
		scope,
		state
	});
	localStorage.setItem('oauth:state', JSON.stringify({ state, ts: Date.now() }));
	window.location.href = `${oauthAuthorizeUri}?${query}`;
}

type OAuthExchangeParams = {
	code: string;
	state: string;
};

export async function exchange({ code, state }: OAuthExchangeParams) {
	const { oauthExchangeUri } = getUrls();
	validateState(state);
	return ky.get(`${oauthExchangeUri}/${code}`).json<{ error?: string; token?: string }>();
}

export function getState() {
	return JSON.parse(localStorage.getItem('oauth:state') || '{}') as { state?: string; ts?: number };
}

export function clearReturnUrl() {
	localStorage.removeItem('auth:returnUrl');
}

export function getReturnUrl() {
	const { ts = 0, url } = JSON.parse(localStorage.getItem('oauth:returnUrl') || '{}') as { ts?: number; url?: string };
	return Date.now() - ts > 5 * 60 * 1000 ? url : undefined;
}

export function setReturnUrl(referrer: string) {
	const url = /^\/auth/.test(referrer) ? '/' : referrer;
	localStorage.setItem('oauth:returnUrl', JSON.stringify({ ts: Date.now(), url }));
}

export function validateState(state: string) {
	const { state: savedState = '', ts: savedTs = 0 } = getState();
	if (Date.now() - savedTs > 10 * 60 * 1000) {
		throw new Error(`Timestamp not within acceptable range: ${savedTs}`);
	}
	if (state !== savedState) {
		throw new Error(`States do not match. Expected ${savedState}. Received ${state}.`);
	}
}
