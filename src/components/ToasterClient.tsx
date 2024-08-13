'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { Access_Redirects } from '@/lib/constants';

interface ToasterProps {
	searchParam: string | string[];
}

const ToasterClient = ({ searchParam }: ToasterProps) => {
	const path = usePathname();
	const router = useRouter();
	const [show, setShow] = useState(true);

	useEffect(() => {
		if (searchParam) {
			if (searchParam === Access_Redirects.ADMIN_ACCESS_REQUIRED) {
				toast.info('Access required', {
					description: 'Admin access required to navigate to this page',
					duration: 2000,
				});
			}
			// add more control flows to show other toasts
			router.replace(path, { scroll: false });
		}
		setShow(false);
	}, [show]);

	return <></>;
};

export default ToasterClient;
