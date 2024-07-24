import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Link } from '@/navigation';

const AdminNavbar = () => {
	return (
		/* here has to be complete logic for admin panel navigation */
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href='/products' className={navigationMenuTriggerStyle()}>
						Products
					</Link>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href='/others' className={navigationMenuTriggerStyle()}>
						Products
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default AdminNavbar;
