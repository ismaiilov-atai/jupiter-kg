'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Toggle } from './ui/toggle';

export default function ThemeToggler() {
	const { theme, setTheme } = useTheme();
	const setThemeMode = () => setTheme(theme === 'light' ? 'dark' : 'light');

	return (
		<Toggle size='sm' aria-label='Toggle theme' onClick={setThemeMode}>
			<SunIcon className='h-[1rem] w-[1rem] rotate-0 scale-100 text-yellow-500 transition-all dark:-rotate-90 dark:scale-0' />
			<MoonIcon className='absolute h-[1rem] w-[1rem] rotate-90 scale-0 text-neutral-950 transition-all dark:rotate-0 dark:scale-100' />
		</Toggle>
	);
}
