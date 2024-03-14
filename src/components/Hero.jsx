import { PersonalizedText } from './shared/typography';
import { HeroText1 } from './shared/typography';
//import { HeroText2 } from './shared/typography';

const Hero = () => {
	return (
		<div style={{ margin: '0 60px' }}>
			<div className='flex flex-col md:flex-row'>
				<div className='w-[100%] md:w-1/2 '>
					<div className='h-1/3 flex flex-col justify-end ml-2' style={{ color: '#FF4409' }}>
						<PersonalizedText>Welcome family...</PersonalizedText>
					</div>

					<HeroText1>
						Lorem Ipsum Dolar <span style={{ fontFamily: 'agoka', fontStyle: 'normal' }}>sit Amet</span> luyto
					</HeroText1>

					<button
						className='px-4 py-2 rounded-md border border-solid border-black bg-orange-500 shadow-button  '
						style={{
							boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
							fontFamily: 'Syne, sans-serif',
							fontWeight: '700',
							marginTop: '20px',
							marginBottom: '20px',
						}}>
						Register Now
					</button>
				</div>
				<div
					className='w-[100%] md:w-1/2  flex items-center justify-center relative '
					style={{ height: '600px', marginLeft: '29px' }}>
					<div
						className='absolute w-[201px] h-[270px] md:w-[303.075px] md:h-[404.558px]'
						style={{
							borderRadius: '6px',
							border: '1px solid #000',
							background: '#FFF',
							boxShadow: '2px 3px 0px 0px #000',
							// top: '100px',
							right: '42%',
							transform: 'rotate(-7.121deg)',
							flexShrink: 0,
							marginRight: '20px',
							zIndex: 1,
						}}>
						<div
							className='md:w-[275px] md:h-[320px] w-[188px] h-[221px] md:mt-[12px] mt-[6px] md:ml-[12px] ml-[6px] lg:w-[200px]'
							style={{
								backgroundImage: "url('https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662790/left_vv4m1m.jpg')",
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: '4px',
								// height: 'calc(100% - 40px)',
								// width: '275px',
								// height: '320px',
								// marginLeft: '12px',
								// marginTop: '10px',
							}}></div>
					</div>
					<div
						className='absolute md:h-[414px] md:w-[300px] w-[210px] h-[278px] '
						style={{
							borderRadius: '6px',
							border: '1px solid #000',
							background: '#FFF',
							boxShadow: '2px 3px 0px 0px #000',
							// width: '300px',
							// height: '414px',
							zIndex: 2,
							position: 'relative',
						}}>
						<div
							className='md:w-[275px] md:h-[350px] w-[197px] h-[231px]  md:mt-[12px] mt-[6px] md:ml-[12px] ml-[6px]'
							style={{
								backgroundImage: "url('https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662676/1_l7wivq.jpg')",
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: '4px',
								// height: 'calc(100% - 40px)',
								// width: '275px',
								// height: '350px',
								//marginLeft: '12px',
								// marginTop: '12px',
							}}></div>

						<div
							className='absolute bottom-[8px] right-[5px] font-sizes-[9.75px] font-weight-400 line-height-1.5 letter-spacing-0.488px padding-10px md:font-sizes-18px md:font-weight-400 md:line-height-1.5 md:letter-spacing-0.9px md:pr-[10px] md:bottom-[16px]'
							style={{
								color: '#0E0E0E',
								fontFamily: 'Gotham',
								// fontSize: '18px',
								// fontStyle: 'normal',
								// fontWeight: '400',
								// lineHeight: 'normal',
								// letterSpacing: '0.9px',
								// padding: '10px',
								// bottom: '14px',
							}}>
							Batch: 1999
						</div>
						<div
							className=''
							style={{
								backgroundImage: `url('https://res.cloudinary.com/dkivz06xv/image/upload/v1710089645/rvqsfd4sqaclbthidnxl.png')`,
							}}></div>
					</div>
					<div
						className='absolute md:w-[303.075px] md:h-[325.558px] w-[187px] h-[250px]'
						style={{
							borderRadius: '6px',
							border: '1px solid #000',
							background: '#FFF',
							boxShadow: '2px 3px 0px 0px #000',
							// width: '303.075px',
							// height: '325.558px',
							transform: 'rotate(15.801deg)',
							flexShrink: 0,
							left: '45%',
							zIndex: 1,
						}}>
						<div
							className='md:w-[275px] md:h-[257.4px] w-[175px] h-[206px] md:mr-[10px] mr-[15px] md:ml-[12px] ml-[6px]'
							style={{
								backgroundImage: "url('https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662873/right_guw2gk.jpg')",
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: '4px',
								// height: 'calc(100% - 40px)',
								// width: '275px',
								// height: '257.4px',
								// marginLeft: '12px',
								// marginTop: '10px',
							}}></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
