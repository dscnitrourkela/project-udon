import { PersonalizedText, Text } from './shared/typography';
import { HeroText1 } from './shared/typography';
import { HeroText2 } from './shared/typography';
import { imgURLs } from '../data/eventsData';
import Button from './shared/Button';

const Hero = () => {
	return (
		<div className=' lg:mx-14 xl:max-w-[1483px] -z-1 relative mx-auto mt-[80px]'>
			<div className='flex flex-col md:flex-row justify-center items-center min-h-screen gap-20 lg:gap-10'>
				<div className='w-[100%] md:w-1/2 h-fit'>
					<div className='flex justify-center mx-auto text-primary-foreground'>
						<PersonalizedText>Welcome family...</PersonalizedText>
					</div>

					<div className='flex flex-col text-justify mx-auto '>
						<HeroText1 className=' flex flex-col mx-auto w-[50vw]'>
							<span className='mx-auto'>Lorem Ipsum</span>{' '}
							<span>
								<HeroText2 className='mx-auto'> Dolar sit Amet</HeroText2>
								<span className='flex justify-center'>luyto</span>
							</span>
						</HeroText1>
					</div>

					<Button
						className='mx-auto mt-[14.6px]'
						variant='primary'
						size='medium'
						style={{
							boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
						}}>
						<Text variant='button'>Register Now</Text>
					</Button>
					<div
						className={`w-[100%] xl:w-1/2 md:w-2/3  flex items-center justify-center relative h-[100%] mx-auto my-14
            max-[380px]:scale-[0.8] max-[420px]:scale-90 sm:scale-125 md:scale-75 lg:scale-[0.8] xl:scale-100 translate-x-10 md:translate-x-0`}>
						<div
							className={`absolute w-[189px] h-[270px] md:w-[303.075px] md:h-[404.558px] 
              rounded-lg border-solid border-2 border-black shadow-3xl right-[42%] 
              transform rotate-[-7.121deg] flex-shrink-0 mr-20 z-1 bg-white`}>
							<div
								className={`md:w-[275px] md:h-[320px] w-[188px] h-[221px] md:mt-[12px] 
                mt-[6px] md:ml-[12px] ml-[6px] lg:w-[200px]`}
								style={{
									backgroundImage: imgURLs[0].url,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									borderRadius: '4px',
								}}
							/>
						</div>
						<div
							className={`relative bg-white md:h-[414px] md:w-[300px] w-[210px] h-[278px]
              rounded-lg border-solid border-2 border-black shadow-3xl flex-shrink-0 z-10`}>
							<div
								className='md:w-[275px] md:h-[350px] w-[197px] h-[231px]  md:mt-[12px] mt-[6px] md:ml-[12px] ml-[6px]'
								style={{
									backgroundImage: imgURLs[1].url,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									borderRadius: '4px',
								}}></div>
							<img
								className='absolute w-[65px] right-[-28px] bottom-[245px] md:w-[100px] md:right-[-45px] md:bottom-[360px]'
								src={imgURLs[3].url}
							/>
							<div
								className='absolute bottom-[8px] right-[5px] font-sizes-[9.75px] font-weight-400 line-height-1.5 letter-spacing-0.488px padding-10px md:font-sizes-18px md:font-weight-400 md:line-height-1.5 md:letter-spacing-0.9px md:pr-[10px] md:bottom-[16px]'
								style={{
									color: '#0E0E0E',
									fontFamily: 'Gotham',
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
							className={`absolute md:w-[303.075px] md:h-[325.558px] w-[187px] h-[250px] rounded-lg
              border-solid border-2 border-black shadow-3xl left-[45%] z-1 flex-shrink-0 bg-white`}>
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
			</div>
		</div>
	);
};
export default Hero;
