"use client";

import { useTheme } from '../../providers/theme-provider';
import { ThemeId } from '../../types/theme';

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="mb-4 p-4 bg-white border rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Theme:</h3>
      <div className="flex flex-wrap gap-2">
        {availableThemes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id as ThemeId)}
            className={`px-3 py-1 text-xs rounded-md border transition-colors ${
              currentTheme.id === theme.id
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            style={{
              backgroundColor: currentTheme.id === theme.id ? theme.colors.primary : undefined,
              borderColor: currentTheme.id === theme.id ? theme.colors.primary : undefined,
            }}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}