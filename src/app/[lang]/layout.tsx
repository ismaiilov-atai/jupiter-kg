import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';

import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect';
import { ThemeToggler } from '@/components/themeToogler';

import './globals.css';
import Providers from '@/providers';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<div className='flex w-full justify-around'>
							<LocaleSwitcherSelect />
							<ThemeToggler />
						</div>
						{children}
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
