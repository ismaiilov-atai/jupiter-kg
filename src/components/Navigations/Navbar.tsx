'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import LocaleSwitcherSelect from '../LocaleSwitcherSelect';
import SignupDialog from '../SignupDialog/SignupDialog';
import ThemeToggler from '../ThemeToggler';

const Navbar = () => {
	const pathname = usePathname();
	const isBoarding = pathname.includes('onboarding');
	const { data: session } = useSession();
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
			{!session?.user && <SignupDialog />}
		</div>
	);
};

export default Navbar;
