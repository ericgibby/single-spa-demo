type UrlConfig = {
	oauthAuthorizeUri: string;
	oauthExchangeUri: string;
	oauthRedirectUri: string;
};

const URLS: Record<string, UrlConfig> = {
	development: {
		oauthAuthorizeUri: 'https://github.com/login/oauth/authorize',
		oauthExchangeUri: 'http://localhost:8600/authenticate',
		oauthRedirectUri: 'http://localhost:9000/single-spa-demo/auth/callback'
	}
};

export function getUrls(environment: string = 'development') {
	return URLS[environment] ?? URLS.development;
}
