import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from '../../hooks/useQuery';
import { exchange, getReturnUrl, getState } from '../../services/oauth';
import { getUrls } from '../../services/urls';

type CallbackProps = {
	onTokenReceived?: (token: string) => void;
};

export default function Callback({ onTokenReceived }: CallbackProps) {
	const { clientId } = useAuth();
	const query = useQuery();
	const history = useHistory();
	const [error, setError] = useState<string>();
	const { oauthRedirectUri } = getUrls();

	useEffect(() => {
		const { state } = getState();
		(async () => {
			try {
				const result = await exchange({
					code: query.code as string,
					state
				});
				if (result.error) {
					throw new Error(result.error);
				}
				window.dispatchEvent(new CustomEvent('auth:token', { detail: result.token }));
				onTokenReceived?.(result.token);
				const returnUrl = getReturnUrl() ?? '/';
				history.push(returnUrl);
			} catch (err) {
				console.error(err);
				setError(String(err));
				if (/Timestamp not within acceptable range/.test(err?.message)) {
					history.replace('/auth/signin');
				}
			}
		})();
	}, [clientId, history, query, oauthRedirectUri, onTokenReceived]);

	return (
		<>
			<div>Completing signin...</div>
			{error && <div className="alert alert-danger">{error}</div>}
		</>
	);
}
