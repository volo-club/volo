import React, { createContext, useContext, ReactNode } from 'react';
import en from '../locales/en';

// Use the English locale type
export type Locale = typeof en;

interface LanguageContextType {
  locale: string;
  t: Locale;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Only English is supported now
  const locale = 'en';
  const t = en;
  
  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
