import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import Text from '../typography/Text';
import Navigation from '../../../data/Navigation';
import image from '../../../assets/images/image.png';
import Button from '../Button';
import Logo from '../Logo';
import Hamburger from '../Hamburger';
import { signInWithGoogle, signOutUser } from '../../../firebase/login';
import SmoothScroll from 'smooth-scroll';

// Function Returning new scroll object
const newScrollObject = () => {
	return new SmoothScroll('', {
		offset: () => 100,
	});
};

const handleScroll = id => {
	if (typeof window !== 'undefined' && id) {
		const isHome = window.location.pathname === '/';
		if (isHome) {
			const scroll = newScrollObject();
			const anchor = document.getElementById(id);
			scroll.animateScroll(anchor);
		}
	}
};

function NavBar() {
	const { userInfo, setUserData } = useContext(AuthContext);

	const { navItems, logo } = Navigation;
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<nav className='sticky top-0 z-20'>
			<div
				className='navbar flex justify-between items-center opacity-53 bg-hard-light bg-center bg-cover bg-[#F9F5F2] h-[73.8px] overflow-hidden pl-5 md:pl-10'
				style={{ backgroundImage: `url(${image})` }}>
				<Logo src={logo.src} alt={logo.alt} />
				<ul className={`navitem md:flex ${isNavOpen ? 'hidden' : 'flex'} hidden list-none`}>
					<NavList navItems={navItems} toggleNav={() => {}} />
				</ul>
				<div>
					<Hamburger onClick={toggleNav} isOpen={isNavOpen}></Hamburger>
					<Button
						variant='primary'
						size='medium'
						className='mr-[56.6px] hidden md:flex'
						style={{
							boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
						}}
						onClick={async () => {
							if (userInfo[0].uid) {
								setUserData(await signOutUser());
							} else {
								setUserData(await signInWithGoogle());
							}
						}}>
						<Text variant='navButton'>{userInfo[0].uid ? 'logout' : 'login'}</Text>
					</Button>
				</div>
			</div>
			<div className='w-full' style={{ height: '1px', backgroundColor: 'black' }}></div>
			{isNavOpen && (
				<ul
					className='navMobile flex flex-col justify-center bg-[#252525] items-center gap-[41px] fixed min-h-full min-w-full top-[74px] bottom-0 text-white md:hidden list-none'
					// style={{ position: 'absolute', top: '74px', left: '0', right: '0', bottom: '0' }}>
				>
					<NavList navItems={navItems} toggleNav={toggleNav} />
				</ul>
			)}
		</nav>
	);
}

const onClick = (id, toggleNav) => {
	handleScroll(id);
	toggleNav();
};

const NavList = ({ navItems, toggleNav }) => {
	return (
		<>
			{navItems.map(({ id, name, link }) => (
				<li
					key={id}
					className='nav-item'
					onClick={link ? null : () => onClick(id, toggleNav)}
					onKeyPress={link ? null : () => onClick(id, toggleNav)}
					role='menuitem'
					tabIndex={0}>
					<Link to={link} key={id}>
						<Text variant='nav' className='mx-[55px]  max-[1100px]:mx-[25px]'>
							{name}
						</Text>
					</Link>
				</li>
			))}
		</>
	);
};

export default NavBar;
