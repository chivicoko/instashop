"use client";
// context/UserContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the type for the user data and context state
interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create the provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  // Load user from localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }
  }, []);

  // Set user in both state and localStorage
  const setUser = (newUser: User) => {
    localStorage.setItem('user', JSON.stringify(newUser));
    setUserState(newUser);
  };

  // Clear user from both state and localStorage
  const clearUser = () => {
    localStorage.removeItem('user');
    setUserState(null);
  };

  // Provide the context value to children components
  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
