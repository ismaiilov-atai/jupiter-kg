import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Roboto } from 'next/font/google';

import Navbar from '@/components/Navigations/Navbar';

import './globals.css';
import Providers from '@/providers';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Jupiter KG',
	description: 'Stickers from Jupiter 🚀',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const messages = await getMessages();
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={roboto.className}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<Navbar />
						{children}
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
