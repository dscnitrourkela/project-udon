import { useState, useEffect } from 'react';
import './NavBar.css';
import NavElement from './shared/typography/NavElement';
import NavButton from './shared/typography/NavButton';
import Navigation from '../config/Navigation';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function NavBar() {
	const { navItems } = Navigation;
	const [isMobile, setIsMobile] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1185);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
			<div
				className={`navbar flex justify-between items-center opacity-53 bg-hard-light bg-center bg-cover  h-[73.8px] overflow-hidden`}>
				<div className='ml-[56.6px]'>Logo</div>
				<div className={`navitem md:flex`}>
					{navItems.map((item, index) => (
						<Link to={item.link} key={index}>
							<NavElement className='mx-[55px]'>{item.name}</NavElement>
						</Link>
					))}
				</div>
				<div className='flex'>
					<NavButton className={`mr-[56.6px] login-button`} onClick={toggleNav}>
						Login
					</NavButton>
				</div>
			</div>
			<div className='w-full' style={{ height: '1px', backgroundColor: 'black' }}></div>
			{isMobile && isNavOpen && (
				<div className='navMobile flex flex-col justify-center bg-[#252525] items-center gap-[41px] h-[376px] text-white'>
					{navItems.map((item, index) => (
						<Link to={item.link} key={index}>
							<NavElement className='mx-[55px]'>{item.name}</NavElement>
						</Link>
					))}
				</div>
			)}
		</>
	);
}

export default NavBar;
