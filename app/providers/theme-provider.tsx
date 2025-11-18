"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Theme, themes, ThemeId } from '../types/theme';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: ThemeId) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeId, setCurrentThemeId] = useState<ThemeId>('classic');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('cv-theme') as ThemeId;
    if (savedTheme && themes[savedTheme]) {
      setCurrentThemeId(savedTheme);
    }
  }, []);

  // Apply CSS variables when theme changes
  useEffect(() => {
    const theme = themes[currentThemeId];
    const root = document.documentElement;
    
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-primary-text', theme.colors.primaryText);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-secondary-text', theme.colors.secondaryText);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-text', theme.colors.text);
    root.style.setProperty('--color-border', theme.colors.border);
    root.style.setProperty('--color-accent', theme.colors.accent);
  }, [currentThemeId]);

  const setTheme = (themeId: ThemeId) => {
    setCurrentThemeId(themeId);
    localStorage.setItem('cv-theme', themeId);
  };

  const value: ThemeContextType = {
    currentTheme: themes[currentThemeId],
    setTheme,
    availableThemes: Object.values(themes),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};