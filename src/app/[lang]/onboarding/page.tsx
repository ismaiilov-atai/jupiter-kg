import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

import { skipOnboarding } from '@/lib/actions';

const Onboarding = () => {
	return (
		<form action={skipOnboarding}>
			<Button variant='secondary'>
				<p className='font-extrabold tracking-widest'>skip</p>
				<ArrowRightIcon className='ml-2 h-4 w-4' />
			</Button>
		</form>
	);
};

export default Onboarding;
