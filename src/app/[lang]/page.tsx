import { useTranslations } from 'next-intl';
import { use } from 'react';

import { auth, signOut } from '$/auth';
import { getBoardingRequiredCookie } from '@/lib/actions';
import { redirect } from '@/navigation';

export default function Home() {
	const t = useTranslations('Landing');
	/*
		if user is admin redirect it to admin page
		redirect('/admin');
		
		checks user if here for the first time and redirects accordingly
		const userFirstTime = use(getBoardingRequiredCookie());
		if (userFirstTime) redirect('/onboarding'); 
	*/

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>{t('title')}</h1>
			<form
				action={async () => {
					'use server';
					await signOut();
					console.log('here ---------- out');
				}}
			>
				<button type='submit'>Sign Out</button>
			</form>
		</main>
	);
}
