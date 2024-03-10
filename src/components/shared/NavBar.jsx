import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Text from './typography/Text';
import Navigation from '../../config/Navigation';
import image from '../../assets/images/image.png';
import DesktopButton from './DesktopButton';
import Logo from './Logo';

function NavBar() {
	const { navItems, logo } = Navigation;
	const [isMobile, setIsMobile] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 800);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const toggleNav = () => {
		if (isMobile) {
			setIsNavOpen(!isNavOpen);
			if (!isNavOpen) {
				document.getElementById('line1').style.transform = 'rotate(-46deg) translateY(20px) translateX(2px)';
				document.getElementById('line2').style.transform = 'scaleY(0)';
				document.getElementById('line3').style.transform = 'rotate(45deg) translateY(-29px)';
			} else {
				document.getElementById('line1').style.transform = 'rotate(0deg)';
				document.getElementById('line2').style.transform = 'scaleY(1)';
				document.getElementById('line3').style.transform = 'rotate(0deg)';
			}
		}
	};
	return (
		<div>
			<div
				className='navbar flex justify-between items-center opacity-53 bg-hard-light bg-center bg-cover h-[73.8px] overflow-hidden pl-10'
				style={{ backgroundImage: `url(${image})` }}>
				<Logo src={logo.src} alt={logo.alt} />
				<div className={`navitem md:flex`}>
					<div
						style={{
							display: isMobile ? 'none' : 'flex',
						}}>
						{navItems.map((item, index) => (
							<Link to={item.link} key={index}>
								<Text variant='nav' className='mx-[55px]  max-[1185px]:mx-[28px]'>
									{item.name}
								</Text>
							</Link>
						))}
					</div>
				</div>
				<div className='flex'>
					{isMobile ? (
						<button className={`mr-[56.6px] hamburger-icon`} onClick={toggleNav}>
							<div
								id='line1'
								className='w-[52px] h-2 bg-black mb-2 rounded-lg border-black border-solid bg-orange-600'
								style={{
									boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
									transition: 'transform 0.3s ease',
								}}></div>
							<div
								id='line2'
								className='w-[52px] h-2 bg-black mb-2 rounded-lg border-black border-solid  bg-orange-600'
								style={{
									boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
								}}></div>
							<div
								id='line3'
								className='w-[52px] h-2 bg-black rounded-lg border-black border-solid   bg-orange-600'
								style={{
									boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
									transition: 'transform 0.3s ease',
								}}></div>
						</button>
					) : (
						<DesktopButton
							variant='primary'
							size='medium'
							className='mr-[56.6px]'
							style={{
								boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
							}}>
							<Text variant='navButton'>Login</Text>
						</DesktopButton>
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
