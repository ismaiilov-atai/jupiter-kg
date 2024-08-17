import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

import { signUser } from '@/lib/actions/signUser';

import { Button } from '../ui/button';

import appleIcon from '$/public/apple.svg';
import googleIcon from '$/public/google.svg';

const SignupDialogEntity = () => {
	const signupClickListener = async () => {
		const resp = await signUser();
		switch (resp) {
			case undefined:
				break;
			case 'JupiterFault':
				toast.info('Please contact Jupiter support team');
				break;
			default:
				toast.warning(
					'Please make sure you provide right Google or Apple account!'
				);
		}
	};

	return (
		<div className='items-center space-y-4'>
			<Button
				size='sm'
				className='w-full space-x-4 rounded-sm px-3'
				onClick={signupClickListener}
			>
				<Image src={googleIcon} alt='google icon' width={24} height={24} />
				<span>Google</span>
			</Button>
			<Button
				size='sm'
				variant='secondary'
				className='w-full space-x-4 rounded-sm px-3'
				onClick={signupClickListener}
			>
				<Image src={appleIcon} alt='google icon' width={24} height={24} />
				<span>Apple</span>
			</Button>
		</div>
	);
};

export default SignupDialogEntity;
