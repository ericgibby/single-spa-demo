import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

export function useQuery() {
	const { search } = useLocation();
	return useMemo(() => parse(search), [search]);
}
