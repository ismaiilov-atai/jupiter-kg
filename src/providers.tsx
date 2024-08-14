import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import { auth } from '$/auth';

interface ProviderProps {
	children: React.ReactNode;
}

const Providers = async ({ children }: ProviderProps) => {
	const session = await auth();
	return (
		<SessionProvider session={session}>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				disableTransitionOnChange
				enableSystem
			>
				{children}
			</ThemeProvider>
		</SessionProvider>
	);
};

export default Providers;
