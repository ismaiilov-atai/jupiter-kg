'use client';

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';

import { ADMIN_NAV_PATHS } from '@/lib/constants';
import { Link, usePathname } from '@/navigation';

const AdminNavbar = () => {
	const path = usePathname();

	return (
		<section className='flex items-center'>
			<NavigationMenu orientation='vertical'>
				<NavigationMenuList>
					{ADMIN_NAV_PATHS.map((item, index) => {
						return (
							<NavigationMenuItem key={index}>
								<Link
									href={item.path}
									className={`${navigationMenuTriggerStyle()} ${item.path === path && 'bg-slate-50'}`}
								>
									{item.title}
								</Link>
							</NavigationMenuItem>
						);
					})}
				</NavigationMenuList>
			</NavigationMenu>
			<Separator orientation='vertical' className='h-3/4 w-[2px]' />
		</section>
	);
};

export default AdminNavbar;
