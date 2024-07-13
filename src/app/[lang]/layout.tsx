import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';

import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jupiter KG',
	description: 'Stickers from Jupiter',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const messages = await getMessages();
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<LocaleSwitcherSelect />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
