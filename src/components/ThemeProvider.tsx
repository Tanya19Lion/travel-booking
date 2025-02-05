import { createContext, useEffect, useState } from 'react';

import { getItem, setItem } from '../lib/utils/localStorage';

import { Theme, TThemeContext } from '../lib/types';

export const ThemeContext = createContext<TThemeContext | null>(null);

type ThemeContextProviderProps = {
    children: React.ReactNode;
	defaultTheme: 'dark';
	storageKey: 'project-react-theme',
};

const ThemeContextProvider = ({
	children,
	defaultTheme = 'dark',
	storageKey = 'project-react-theme',
	...props
}: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState(() => getItem(storageKey) || defaultTheme);
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove('light', 'dark');

		const newTheme = theme === 'system' ? systemTheme : theme;

		root.classList.add(theme);

		if (!getItem(storageKey)) {
			setItem(storageKey, newTheme);
		}
	}, [storageKey, systemTheme, theme]);

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			const newTheme = theme === 'system' ? systemTheme : theme;
			setItem(storageKey, newTheme);
			setTheme(newTheme);
		},
	};

	return (
		<ThemeContext.Provider {...props} value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
