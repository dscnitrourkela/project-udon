import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Text from './typography/Text';
import Navigation from '../../config/Navigation';
import menuIcon from '../../assets/images/menu.png';
import unionIcon from '../../assets/images/Union.png';
import image from '../../assets/images/image.png';

function NavBar() {
	const { navItems } = Navigation;
	const [isMobile, setIsMobile] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [menuIconSrc, setMenuIconSrc] = useState(menuIcon);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 900);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const toggleNav = () => {
		if (isMobile) {
			setIsNavOpen(!isNavOpen);
			setMenuIconSrc(isNavOpen ? menuIcon : unionIcon);
		}
	};
	return (
		<div>
			<div
				className='navbar flex justify-between items-center opacity-53 bg-hard-light bg-center bg-cover h-[73.8px] overflow-hidden'
				style={{ backgroundImage: `url(${image})` }}>
				<div className='ml-[56.6px] max-[1185px]:ml-[45px]'>Logo</div>
				<div className={`navitem md:flex`}>
					<div
						style={{
							display: isMobile ? 'none' : 'flex',
						}}>
						{navItems.map((item, index) => (
							<Link to={item.link} key={index}>
								<Text variant='nav' className='mx-[55px]  max-[1185px]:mx-[38px]'>
									{item.name}
								</Text>
							</Link>
						))}
					</div>
				</div>
				<div className='flex'>
					{isMobile ? (
						<button className={`mr-[56.6px] hamburger-icon`} onClick={toggleNav}>
							<img src={menuIconSrc} alt='Menu' />
						</button>
					) : (
						<Text
							variant='navButton'
							className='login-button mr-[56.6px] rounded-[8px] border border-black border-solid bg-[#ff7647] flex px-[12px] py-[16px] justify-center items-center gap-[10px] '
							style={{
								boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
							}}>
							Login
						</Text>
					)}
				</div>
			</div>
			<div className='w-full' style={{ height: '1px', backgroundColor: 'black' }}></div>
			{isMobile && isNavOpen && (
				<div className='navMobile flex flex-col justify-center bg-[#252525] items-center gap-[41px] h-[376px] text-white'>
					{navItems.map((item, index) => (
						<Link to={item.link} key={index}>
							<Text variant='nav' className='mx-[55px]'>
								{item.name}
							</Text>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
export default NavBar;
