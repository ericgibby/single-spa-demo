import { useMemo } from 'react';

export function useBase() {
	const base = useMemo(() => {
		const { pathname } = new URL(document.baseURI);
		return pathname;
	}, []);
	return base;
}
