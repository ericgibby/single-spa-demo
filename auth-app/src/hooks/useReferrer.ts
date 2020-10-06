import { useMemo } from 'react';
import { useBase } from 'shared-components';

export function useReferrer(defaultUrl = '/') {
	const base = useBase();
	return useMemo(() => {
		const { host: currentHost } = window.location;
		const { host } = new URL(document.referrer);
		return host === currentHost ? defaultUrl : document.referrer.replace(host + base, '');
	}, [base]);
}
