import { useTranslations } from 'next-intl';
import Image from 'next/image';

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

import logo from '$/public/boarding/jupiter-logo.svg';
import SignupDialogEntity from './SignupDialogEntity';
import SignupDialogTriggerer from './SignupDialogTriggerer';

const SignupDialog = () => {
	const t = useTranslations('Landing');

	return (
		<Dialog>
			<SignupDialogTriggerer />
			<DialogContent className='h-2/4 rounded-sm max-md:w-9/12'>
				<Image src={logo} alt='JupiterKG Logo' className='place-self-center' />
				<DialogHeader>
					<DialogTitle className='text-left'>Let&apos;s signup</DialogTitle>
					<DialogDescription className='text-left text-xs'>
						Use google or apple account, no need to type password
					</DialogDescription>
				</DialogHeader>
				<SignupDialogEntity />
				<DialogFooter className='sm:justify-start'>
					<DialogClose asChild></DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default SignupDialog;
