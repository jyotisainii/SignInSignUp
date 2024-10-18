// src/context/AuthContext.tsx
import React, { createContext, useState } from 'react';

interface AuthContextType {
    isSignedIn: boolean;
    toggleAuth: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const toggleAuth = () => {
        setIsSignedIn((prev) => !prev);
    };

    return (
        <AuthContext.Provider value={{ isSignedIn, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
