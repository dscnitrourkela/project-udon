import './NavBar.css';
import NavElement from './shared/typography/NavElement';
import NavButton from './shared/typography/NavButton';
import Navigation from '../config/Navigation';

function NavBar() {
	const { navItems } = Navigation;

	return (
		<div
			className='navbar bg-center bg-cover bg-no-repeat'
			style={{ backgroundImage: "url('./image.png')", background: 'black 0% 0% / 100px 100px repeat, #F9F5F2' }}>
			<div className='navbar flex justify-between items-center px-[56.6px] py-[15.33px] opacity-53 bg-hard-light bg-center bg-cover bg-no-repeat'>
				<div className='text-lg font-bold'>Logo</div>
				<div className='flex gap-x-[55px]'>
					{navItems.map((item, index) => (
						<NavElement key={index} className=''>
							{item.name}
						</NavElement>
					))}
				</div>
				<div className='flex'>
					<NavButton className='login-button'>Log in</NavButton>
				</div>
			</div>
			<div className='line' style={{ width: '1440px', height: '1px', backgroundColor: 'black' }}></div>
		</div>
	);
}

export default NavBar;
