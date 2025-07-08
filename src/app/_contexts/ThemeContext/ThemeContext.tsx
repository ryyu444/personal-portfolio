'use client';
import { createContext, useContext, useState } from 'react';

/* 
    ThemeContext is a context that provides the theme to the app.
    - Stores theme in context
    - Provides updating capabilities for theme (light/dark)
*/
interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Initial Theme Context; Note: setTheme should not be called unless in ThemeProvider
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

// Custom hook to access theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('No theme context found');
  }
  return context;
}

// Light/Dark theme provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
