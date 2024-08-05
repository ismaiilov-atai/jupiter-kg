'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { Access_Redirects } from '@/lib/constants';

interface ToasterProps {
	access: string | string[];
}

const ToasterClient = ({ access }: ToasterProps) => {
	const path = usePathname();
	const router = useRouter();
	const [show, setShow] = useState(true);

	useEffect(() => {
		if (access) {
			if (access === Access_Redirects.ADMIN_ACCESS_REQUIRED) {
				toast.info('Access required', {
					description: 'Admin access required to navigate to this page',
					duration: 2000,
				});
			}
			router.replace(path, { scroll: false });
		}
		setShow(false);
	}, [show]);

	return <></>;
};

export default ToasterClient;
