import LocaleSwitcherSelect from '../LocaleSwitcherSelect';
import ThemeToggler from '../ThemeToggler';

const Navbar = () => {
	return (
		<div className='sticky top-0 flex w-full justify-around bg-slate-300 py-2'>
			<LocaleSwitcherSelect />
			<ThemeToggler />
		</div>
	);
};

export default Navbar;
