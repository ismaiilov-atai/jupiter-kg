import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { DialogTrigger } from '../ui/dialog';

const SignupDialogTriggerer = () => {
	const t = useTranslations('Landing');
	const pathName = usePathname();
	return (
		<DialogTrigger asChild>
			<Button
				className={cn(
					'rounded-[10px] bg-secondary px-2 text-black dark:text-white',
					{
						'w-full bg-primary text-white dark:text-black':
							pathName.includes('onboarding'),
					}
				)}
			>
				{t('signup')}
			</Button>
		</DialogTrigger>
	);
};

export default SignupDialogTriggerer;
