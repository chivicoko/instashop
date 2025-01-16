'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the type for user data
interface User {
  fullName: string;
  username: string;
  emailOrPhone: string;
  phoneNumber?: string;
  email?: string;
}

// Define the type for the context
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Use this hook to access the context in your components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Create the AuthProvider component to wrap your app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check localStorage on initial load for persisted user data
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function to set user data
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  // Logout function to remove user data
  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  // Check if user is authenticated (i.e., logged in)
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
