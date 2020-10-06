import React, { ReactNode } from 'react';
import { AuthContext, AuthContextType } from './AuthContext';

type AuthProviderProps = AuthContextType & { children?: ReactNode };

export default function AuthProvider({ children, ...value }: AuthProviderProps) {
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
