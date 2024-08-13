'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import BoardingInfo from '@/components/BoardingInfo';
import { Button } from '@/components/ui/button';

export default function OnboardingdLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [pageCount, setPageCount] = useState(0);
	const t = useTranslations('Landing');
	return (
		<section className='flex h-screen flex-col px-6 py-4'>
			{pageCount < 3 && (
				<Button
					id='skip-btn'
					className='top-[25px] h-8 w-auto place-self-end rounded-sm'
					onClick={() => setPageCount(prev => (prev += 1))}
				>
					<p className='font-extrabold tracking-widest'>{t('next')}</p>
					<ArrowRightIcon className='ml-2 h-4 w-4' />
				</Button>
			)}

			{pageCount < 3 ?
				<BoardingInfo pageIndex={pageCount} />
			:	children}
		</section>
	);
}
