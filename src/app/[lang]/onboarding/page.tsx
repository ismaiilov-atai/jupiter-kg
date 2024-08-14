'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import setBoardinCompletedCookie from '@/lib/actions/boarding';
import { BoardingButtonType } from '@/lib/constants';

import logo from '$/public/boarding/jupiter-logo.svg';

const Onboarding = () => {
	const t = useTranslations('Landing');

	const completeBoarding = (e: React.MouseEvent<HTMLElement>) => {
		const buttonType = e.currentTarget.getAttribute(
			'data-type'
		) as BoardingButtonType;

		setBoardinCompletedCookie({ completed: true, buttonType });
	};

	return (
		<section className='flex h-full flex-col items-center justify-around pt-14'>
			<Image src={logo} alt='JupiterKG logo' />
			<section>
				<h1 className='text-4xl font-extrabold leading-10'>{t('welcome')}</h1>
				<p className='text-l mt-2 text-balance font-semibold italic leading-6'>
					{t('welcome_desc')}
				</p>
			</section>
			<section className='flex w-full flex-col items-center gap-3'>
				<Separator className='mb-4 h-[1px] w-1/2 max-md:w-full' />
				<Button
					onClick={completeBoarding}
					className='w-1/2 rounded-sm max-md:w-full'
					data-type={BoardingButtonType.SIGNUP}
				>
					{t('signup')}
				</Button>
				<Button
					onClick={completeBoarding}
					variant='outline'
					className='w-1/2 rounded-sm max-md:w-full'
					data-type={BoardingButtonType.EXPLORE}
				>
					{t('explore')}
				</Button>
			</section>
		</section>
	);
};

export default Onboarding;
