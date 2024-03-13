import { PersonalizedText } from './shared/typography';
import { Heading } from './shared/typography';
import Button from './shared/Button';
import { imgURLs } from '../data/eventsData';

const Hero = () => {
	return (
		<>
			<div className='flex flex-col justify-center md:flex-row'>
				<div className='w-[100%] h-[100vw] sm:h-[60vw] md:h-[600px] md:w-1/2 flex flex-col justify-center'>
					<div className='ml-2' style={{ color: '#FF4409' }}>
						<PersonalizedText>Welcome family...</PersonalizedText>
					</div>
					<div>
						<Heading variant='h1' style={{ fontSize: '75px', fontWeight: '500' }}>
							Lorem Ipsum Dolar sit Amet Luyto
						</Heading>
					</div>
					<div className='m-2'>
						<Button>Register Now</Button>
					</div>
				</div>

				<div className='w-[100%] md:w-1/2 h-[60vw] md:h-[600px] flex items-center justify-center relative '>
					<div
						className=' border border-solid border-black rounded-md absolute w-[201px] h-[270px] md:w-[303.075px] md:h-[404.558px]'
						style={{
							background: '#FFF',
							boxShadow: '2px 3px 0px 0px #000',
							right: '42%',
							transform: 'rotate(-7.121deg)',
							flexShrink: 0,
							marginRight: '20px',
							zIndex: 1,
						}}>
						<div
							className='rounded-md bg-center bg-cover md:w-[275px] md:h-[320px] w-[188px] h-[221px] md:mt-[12px] mt-[6px] md:ml-[12px] ml-[6px]'
							style={{
								backgroundImage: imgURLs[0].url,
							}}></div>
					</div>

					<div
						className='rounded-md border border-solid border-black bg-white shadow-md z-10 absolute md:h-[414px] md:w-[300px] w-[210px] h-[278px]'
						style={{ boxShadow: '2px 3px 0px 0px #000' }}>
						<div
							className='rounded bg-center bg-cover md:w-[275px] md:h-[350px] w-[197px] h-[231px]  md:mt-[12px] mt-[6px] md:ml-[12px] ml-[6px]'
							style={{
								backgroundImage: imgURLs[1].url,
							}}></div>

						<div
							className='absolute bottom-[8px] right-[5px] font-sizes-[9.75px] font-weight-400 line-height-1.5 letter-spacing-0.488px padding-10px md:font-sizes-18px md:font-weight-400 md:line-height-1.5 md:letter-spacing-0.9px md:pr-[10px] md:bottom-[16px]'
							style={{
								color: '#0E0E0E',
								fontFamily: 'Gotham',
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
								transform: 'rotate(-90.062deg)',
								flexShrink: 0,
								fill: '#FFE500',
								strokeWidth: '1.2px',
								stroke: '#000',
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
						className='border border-solid border-black rounded-6 absolute md:w-[303.075px] md:h-[325.558px] w-[187px] h-[250px]'
						style={{
							background: '#FFF',
							boxShadow: '2px 3px 0px 0px #000',
							transform: 'rotate(15.801deg)',
							flexShrink: 0,
							left: '45%',
							zIndex: 1,
						}}>
						<div
							className='md:w-[275px] md:h-[257.4px] w-[175px] h-[206px] md:mr-[10px] mr-[15px] md:ml-[12px] ml-[6px]'
							style={{
								backgroundImage: imgURLs[2].url,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: '4px',
							}}></div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Hero;
