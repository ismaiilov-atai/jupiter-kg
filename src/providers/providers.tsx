import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import { auth } from '$/auth';
import { BagStoreProvider } from './bagStoreProvider';

interface ProviderProps {
	children: React.ReactNode;
}

const Providers = async ({ children }: ProviderProps) => {
	const session = await auth();
	return (
		<SessionProvider session={session}>
			<BagStoreProvider>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					disableTransitionOnChange
					enableSystem
				>
					{children}
				</ThemeProvider>
			</BagStoreProvider>
		</SessionProvider>
	);
};

export default Providers;
