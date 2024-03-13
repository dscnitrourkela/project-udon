import { PersonalizedText } from './shared/typography';
import { Heading } from './shared/typography';

const Hero = () => {
	return (
		<>
			<div className='flex flex-col md:flex-row'>
				<div className='w-[100%] md:w-1/2 '>
					<div className='h-1/3 flex flex-col justify-end ml-2' style={{ color: '#FF4409' }}>
						<PersonalizedText>Welcome family...</PersonalizedText>
					</div>
					<div className='h-1/3'>
						<Heading variant='h1' style={{ fontSize: '75px', fontWeight: '500' }}>
							Lorem Ipsum Dolar sit Amet Luyto
						</Heading>
					</div>
					<div className='h-1/4'>
						<button
							className='px-4 py-2 rounded-md border border-solid border-black bg-orange-500 shadow-button mt-20 md:mt-35'
							style={{
								boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
								fontFamily: 'Syne, sans-serif',
								fontWeight: '700',
								marginLeft: '20px',
							}}>
							Register Now
						</button>
					</div>
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
							className='md:w-[275px] md:h-[320px] w-[188px] h-[221px] md:mt-[12px] mt-[6px] md:ml-[12px] ml-[6px]'
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
						className='absolute md:h-[414px] md:w-[300px] w-[210px] h-[278px]'
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
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='111'
							height='111'
							viewBox='0 0 111 111'
							fill='none'
							className='absolute md:w-[110.226px] md:h-[110.226px] w-[49px] h-[49px] md:bottom-[360px] bottom-[253px] md:left-[230px] left-[180px]'
							style={{
								// width: '110.226px',
								// height: '110.226px',
								transform: 'rotate(-90.062deg)',
								flexShrink: 0,
								fill: '#FFE500',
								strokeWidth: '1.2px',
								stroke: '#000',
								// bottom: '360',
								// left: '230',
							}}>
							<path
								d='M1.4381 56.106C1.43808 56.106 1.43806 56.106 1.43804 56.106C0.401629 55.984 0.399996 54.4803 1.43614 54.3561C1.43616 54.3561 1.43618 54.3561 1.4362 54.3561L16.0482 52.6062C35.1916 50.3137 50.2703 35.2022 52.5212 16.054L54.2394 1.43818C54.3613 0.401548 55.8651 0.399915 55.9893 1.43633L57.7391 16.0483C60.0317 35.1916 75.1432 50.2703 94.2914 52.5212L108.907 54.2393C109.944 54.3613 109.945 55.865 108.909 55.9892L94.297 57.7391C75.1538 60.0316 60.0751 75.1431 57.8241 94.2915L56.106 108.907C56.106 108.907 56.106 108.907 56.106 108.907C55.984 109.944 54.4804 109.945 54.3561 108.909C54.3561 108.909 54.3561 108.909 54.3561 108.909L52.6062 94.2972C50.3137 75.1537 35.2022 60.075 16.0539 57.8241L1.4381 56.106Z'
								fill='#FFE500'
								stroke='black'
								strokeWidth='1.2'
							/>
						</svg>
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
		</>
	);
};
export default Hero;
