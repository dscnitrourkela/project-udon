import { useState } from 'react';
import { Link } from 'react-router-dom';
import Text from './typography/Text';
import Navigation from '../../data/Navigation';
import image from '../../assets/images/image.png';
import Button from './Button';
import Logo from './Logo';
import Hamburger from './Hamburger';

function NavBar() {
	const { navItems, logo } = Navigation;
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<nav style={{ position: 'sticky', top: '0' }}>
			<div
				className='navbar flex justify-between items-center opacity-53 bg-hard-light bg-center bg-cover h-[73.8px] overflow-hidden pl-10 '
				style={{ backgroundImage: `url(${image})` }}>
				<Logo src={logo.src} alt={logo.alt} />
				<div className={`navitem md:flex ${isNavOpen ? 'hidden' : 'flex'} hidden`}>
					{navItems.map((item, index) => (
						<Link to={item.link} key={index}>
							<Text variant='nav' className='mx-[55px]  max-[1100px]:mx-[25px]'>
								{item.name}
							</Text>
						</Link>
					))}
				</div>
				<div>
					<Hamburger onClick={toggleNav} isOpen={isNavOpen}></Hamburger>
					<Button
						variant='primary'
						size='medium'
						className='mr-[56.6px] hidden md:flex'
						style={{
							boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
						}}>
						<Text variant='navButton'>Login</Text>
					</Button>
				</div>
			</div>
			<div className='w-full' style={{ height: '1px', backgroundColor: 'black' }}></div>
			{isNavOpen && (
				<div
					className='navMobile flex flex-col justify-center bg-[#252525] items-center gap-[41px] h-[376px] text-white md:hidden'
					style={{ position: 'absolute', top: '75px', left: '0', right: '0', bottom: '0' }}>
					{navItems.map((item, index) => (
						<Link to={item.link} key={index}>
							<Text variant='nav' className='mx-[55px]'>
								{item.name}
							</Text>
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}

export default NavBar;
