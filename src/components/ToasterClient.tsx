'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

import { Access_Redirects } from '@/lib/constants';

interface ToasterProps {
	redirectCookieVal: string;
}

const ToasterClient = ({ redirectCookieVal }: ToasterProps) => {
	useEffect(() => {
		if (redirectCookieVal) {
			switch (redirectCookieVal) {
				case Access_Redirects.ADMIN_ACCESS_REQUIRED:
					toast.info('Admins only page');
					break;
				case Access_Redirects.SIGNIN_REDIRECT:
					toast.info('Please signin to have access');
					break;
				default:
					break;
			}
		}
	}, [redirectCookieVal]);

	return <></>;
};

export default ToasterClient;
