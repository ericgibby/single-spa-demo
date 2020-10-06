import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthContext';

export function useAuth() {
	return useContext(AuthContext);
}
