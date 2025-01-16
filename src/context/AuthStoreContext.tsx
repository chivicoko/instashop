'use client';

import { FormData } from '@/utils/types';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthStoreContextType {
  currentUserInfo: FormData | null;
  saveUserInfo: (user: FormData) => void;
  dropUserInfo: () => void;
}

const AuthStoreContext = createContext<AuthStoreContextType | undefined>(undefined);

export const useAuthStore = () => {
  const context = useContext(AuthStoreContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUserInfo, setcurrentUserInfo] = useState<FormData | null>(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('currentUserInfo');
    if (storedUserInfo) {
      setcurrentUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const saveUserInfo = (userInfo: FormData) => {
    setcurrentUserInfo(userInfo);
    localStorage.setItem('currentUserInfo', JSON.stringify(userInfo));
  };

  const dropUserInfo = () => {
    setcurrentUserInfo(null);
    localStorage.removeItem('currentUserInfo');
  };

  return (
    <AuthStoreContext.Provider value={{ currentUserInfo, saveUserInfo, dropUserInfo }}>
      {children}
    </AuthStoreContext.Provider>
  );
};
