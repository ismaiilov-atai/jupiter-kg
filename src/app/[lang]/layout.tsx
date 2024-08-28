import Favicon from '/public/favicon.ico';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Roboto } from 'next/font/google';
import { Toaster } from 'sonner';

import Navbar from '@/components/Navigations/Navbar';

import { findOrInitBag } from '@/lib/actions/getBag';

import { auth } from '$/auth';
import './globals.css';
import Providers from '@/providers/providers';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Jupiter KG',
	description: 'Stickers from Jupiter 🚀',
	icons: [{ rel: 'icon', url: Favicon.src }],
};

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const [messages, session, _] = await Promise.all([
		await getMessages(),
		await auth(),
		await findOrInitBag(),
	]);

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={roboto.className}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						{session?.user.role !== 'admin' && <Navbar />}
						{children}
						<Toaster />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
