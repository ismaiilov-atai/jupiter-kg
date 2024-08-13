'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import LocaleSwitcherSelect from '../LocaleSwitcherSelect';
import ThemeToggler from '../ThemeToggler';

const Navbar = () => {
	const pathname = usePathname();
	const isBoarding = pathname.includes('onboarding');
	return (
		<div
			className={cn(
				`sticky top-0 flex w-full justify-around bg-slate-300 py-2`,
				{
					hidden: isBoarding,
				}
			)}
		>
			<LocaleSwitcherSelect />
			<ThemeToggler />
		</div>
	);
};

export default Navbar;
