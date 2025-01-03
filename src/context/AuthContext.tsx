import { jwtDecode } from 'jwt-decode';
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { formatRoleString } from '../utils/formatRoleString';

export interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    role: string;
    setRole: Dispatch<SetStateAction<string>>;
    intendedRoute: string | null;
    setIntendedRoute: Dispatch<SetStateAction<string | null>>;
}

interface DecodeJWTRole {
    authorities: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const accessToken = localStorage.getItem('access_token');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!accessToken);
    const [intendedRoute, setIntendedRoute] = useState<string | null>(null);

    let initialRole = '';
    if (accessToken) {
        const decoded = jwtDecode<DecodeJWTRole>(accessToken);
        initialRole = formatRoleString(decoded.authorities);
    }

    const [role, setRole] = useState<string>(initialRole);

    useEffect(() => {
        if (accessToken) {
            const decoded = jwtDecode<DecodeJWTRole>(accessToken);
            setRole(formatRoleString(decoded.authorities));
        } else {
            setRole('');
        }
    }, [accessToken])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, role, setRole, intendedRoute, setIntendedRoute }}>
            {children}
        </AuthContext.Provider>
    );
};
