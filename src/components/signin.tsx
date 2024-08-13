import { AuthError } from 'next-auth';

import { signIn } from '$/auth';
import { Button } from './ui/button';

export function SignIn() {
	const sign = async () => {
		'use server';
		try {
			await signIn('google');
		} catch (error) {
			if (error instanceof AuthError) {
				switch (error.type) {
					case 'CredentialsSignin':
						return 'Invalid credentials.';
					default:
						return 'Something went wrong.';
				}
			}
			throw error;
		}
	};

	return (
		<form action={sign}>
			<Button type='submit'>Signin with Google</Button>
		</form>
	);
}
