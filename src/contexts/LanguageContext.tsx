
import React, { createContext, useContext, useState, ReactNode } from 'react';
import en from '../locales/en';
import it from '../locales/it';

// Use the English locale as the base type since it's more complete
export type Locale = typeof en;

interface LanguageContextType {
  locale: string;
  t: Locale;
  setLocale: (locale: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');
  
  // We need to ensure the Italian locale has all the necessary properties
  // Use the selected locale to determine which translation object to use
  const t = locale === 'it' ? it as Locale : en;
  
  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
