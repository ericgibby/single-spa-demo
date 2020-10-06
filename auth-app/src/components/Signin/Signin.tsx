import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { authorize, setReturnUrl } from '../../services/oauth';
import { useReferrer } from '../../hooks/useReferrer';

export default function Signin() {
	const { clientId } = useAuth();
	const referrer = useReferrer('/');

	useEffect(() => {
		setReturnUrl(referrer);
		authorize(clientId);
	}, [clientId, referrer]);

	return <div>Signing in...</div>;
}
