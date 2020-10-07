import { RootStateOrAny } from 'react-redux';

export function selectToken(state: RootStateOrAny) {
	return state.auth.token as string;
}
