import { useTranslations } from 'next-intl';
import { cookies } from 'next/headers';
import { use } from 'react';

import ToasterClient from '@/components/ToasterClient';
import { Button } from '@/components/ui/button';

import { auth, signOut } from '$/auth';

export default function Home({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const t = useTranslations('Landing');
	const session = use(auth());

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>{t('title1')}</h1>
			<form
				action={async () => {
					'use server';
					await signOut();
				}}
			>
				<Button type='submit'>Sign Out</Button>
			</form>
			<ToasterClient searchParam={searchParams['access'] || ''} />
		</main>
	);
}
