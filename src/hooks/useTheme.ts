import { setTheme, toggleTheme } from '@/store/reducers/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from './useStore';

export const useTheme = () => {
	const dispatch = useDispatch();
	const theme = useSelector(state => state.theme.theme);

	useEffect(() => {
		const theme = window.localStorage.getItem('theme') as 'light' | 'dark' | 'system';

		if (theme) {
			dispatch(setTheme(theme));
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
			if (theme === 'system') {
				dispatch(setTheme(e.matches ? 'dark' : 'light'));
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove('light', 'dark');
		window.localStorage.setItem('theme', theme);

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	return {
		theme,
		setTheme: (theme: 'light' | 'dark' | 'system') => dispatch(setTheme(theme)),
		toggleTheme: () => dispatch(toggleTheme()),
	};
};
