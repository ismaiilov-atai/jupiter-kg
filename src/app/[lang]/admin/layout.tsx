import AdminNavbar from '@/components/Navigations/AdminNavbar';

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='flex h-screen'>
			<AdminNavbar />
			{children}
		</section>
	);
}
