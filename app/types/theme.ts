export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    primaryText: string;
    secondary: string;
    secondaryText: string;
    background: string;
    text: string;
    border: string;
    accent: string;
  };
}

export const themes: Record<string, Theme> = {
  classic: {
    id: 'classic',
    name: 'Classic',
    colors: {
      primary: '#2563eb', // blue-600
      primaryText: '#ffffff',
      secondary: '#e5e7eb', // gray-200
      secondaryText: '#374151', // gray-700
      background: '#ffffff',
      text: '#1f2937', // gray-800
      border: '#d1d5db', // gray-300
      accent: '#3b82f6', // blue-500
    },
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    colors: {
      primary: '#1e3a8a', // blue-900
      primaryText: '#ffffff',
      secondary: '#f8fafc', // slate-50
      secondaryText: '#475569', // slate-600
      background: '#ffffff',
      text: '#0f172a', // slate-900
      border: '#cbd5e1', // slate-300
      accent: '#3730a3', // indigo-700
    },
  },
  modern: {
    id: 'modern',
    name: 'Modern',
    colors: {
      primary: '#0f172a', // slate-900
      primaryText: '#ffffff',
      secondary: '#f1f5f9', // slate-100
      secondaryText: '#64748b', // slate-500
      background: '#ffffff',
      text: '#334155', // slate-700
      border: '#e2e8f0', // slate-200
      accent: '#06b6d4', // cyan-500
    },
  },
  creative: {
    id: 'creative',
    name: 'Creative',
    colors: {
      primary: '#7c3aed', // violet-600
      primaryText: '#ffffff',
      secondary: '#faf5ff', // violet-50
      secondaryText: '#7c2d12', // orange-800
      background: '#ffffff',
      text: '#374151', // gray-700
      border: '#c4b5fd', // violet-300
      accent: '#f97316', // orange-500
    },
  },
};

export type ThemeId = keyof typeof themes;