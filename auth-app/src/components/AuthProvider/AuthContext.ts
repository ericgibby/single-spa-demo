import { createContext } from 'react';

export type AuthContextType = {
	clientId?: string;
};

export const AuthContext = createContext<AuthContextType>({});
