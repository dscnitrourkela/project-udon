import { PersonalizedText } from './shared/typography';
import { Paragraph } from './shared/typography';

const Hero = () => {
	return (
		<>
			<div className='flex flex-col md:flex-row '>
				<div className='w-[100%] md:w-1/2 1'>
					<div className='h-1/3 flex flex-col justify-end ml-2' style={{ color: '#FF4409' }}>
						<PersonalizedText>Welcome family...</PersonalizedText>
					</div>
					<div className='h-1/3'>
						<Paragraph style={{ fontSize: '75px', fontWeight: '500', letterSpacing: '0.75px', lineHeight: 'normal' }}>
							Lorem Ipsum Dolar sit Amet luyto
						</Paragraph>
					</div>
					<div className='h-1/4'>
						<button
							className='px-4 py-2 rounded-md border border-solid border-black bg-orange-500 shadow-button'
							style={{
								boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
								fontFamily: 'Syne, sans-serif',
								fontWeight: '700',
								marginTop: '120px',
								marginLeft: '20px',
							}}>
							Register Now
						</button>
					</div>
				</div>
				<div className='w-[100%] md:w-1/2 flex items-center relative' style={{ height: '600px' }}>
					<div
						className='absolute top-50 right-200'
						style={{
							borderRadius: '6px',
							border: '1px solid #000',
							background: '#FFF',
							boxShadow: '2px 3px 0px 0px #000',
							width: '303.075px',
							height: '404.558px',
							top: '100px',
							right: '68%',
							transform: 'rotate(-7.121deg)',
							flexShrink: 0,
							marginRight: '20px',
							zIndex: 1,
						}}>
						<img
							src='https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662790/left_vv4m1m.jpg'
							className='w-full'
							style={{ borderRadius: '16px', height: 'calc(100% - 40px)', padding: '13.598px 10.985px 37.528px 12.393px' }}
						/>
					</div>
					<div
						className='absolute top-50 left-10'
						style={{
							borderRadius: '6px',
							border: '1px solid #000',
							background: '#FFF',
							boxShadow: '2px 3px 0px 0px #000',
							width: '300px',
							height: '414px',
							zIndex: 2,
							position: 'relative',
						}}>
						<img
							src='https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662676/1_l7wivq.jpg'
							className='w-full'
							style={{
								borderRadius: '16px',
								height: 'calc(100% - 40px)',
								padding: '12px',
							}}
						/>
						<div
							className='absolute bottom-0 right-0'
							style={{
								color: '#0E0E0E',
								fontFamily: 'Gotham',
								fontSize: '18px',
								fontStyle: 'normal',
								fontWeight: '400',
								lineHeight: 'normal',
								letterSpacing: '0.9px',
								padding: '10px',
								bottom: '14px',
							}}>
							Batch: 1999
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='111'
							height='111'
							viewBox='0 0 111 111'
							fill='none'
							className='absolute'
							style={{
								width: '110.226px',
								height: '110.226px',
								transform: 'rotate(-90.062deg)',
								flexShrink: 0,
								fill: '#FFE500',
								strokeWidth: '1.2px',
								stroke: '#000',
								bottom: '360',
								left: '230',
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
						className='absolute top-55 right-40'
						style={{
							borderRadius: '6px',
							border: '1px solid #000',
							background: '#FFF',
							boxShadow: '2px 3px 0px 0px #000',
							width: '303.075px',
							height: '404.558px',
							transform: 'rotate(15.801deg)',
							flexShrink: 0,
							marginRight: '20px',
							zIndex: 1,
						}}>
						<img
							src='https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662873/right_guw2gk.jpg'
							className='w-full'
							style={{
								borderRadius: '16px',
								height: 'calc(100% - 40px)',
								padding: '13.598px 10.985px 37.528px 12.393px',
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default Hero;
