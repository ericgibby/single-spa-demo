import React, { useEffect } from 'react';
import { useBase } from 'shared-components';
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from '../../hooks/useQuery';
import { authorize, setReturnUrl } from '../../services/oauth';

export default function Signin() {
	const { clientId } = useAuth();
	const { returnUrl } = useQuery();
	const base = useBase();

	useEffect(() => {
		const { host, pathname } = new URL((returnUrl as string) ?? '/');
		const referrer = host === window.location.host ? pathname.replace(new RegExp(`^${base}`), '') : '/';
		setReturnUrl(referrer);
		authorize(clientId);
	}, [base, clientId, returnUrl]);

	return <div>Signing in...</div>;
}
