import { PersonalizedText, Paragraph } from './shared/typography/index.jsx';
import aboutUsData from '../data/aboutUsData.js';

export default function AboutUs() {
	return (
		<section>
			<div className='container py-6 flex flex-col items-center md:pb-[30px] sm:pb-[51px]'>
				<Paragraph variant='body2' className='text-center text-xs sm:text-2xl font-semibold'>
					{aboutUsData.tag1}
					<br />
					{aboutUsData.tag2}
					<span className='font-syne text-left text-base sm:text-3.5xl font-extrabold'>
						{aboutUsData.tag3_char1}
						<span className='relative underline decoration-wavy decoration-1 sm:decoration-2 underline-offset-4 sm:underline-offset-8 decoration-primary-foreground -z-50'>
							{aboutUsData.tag3_wavy}
						</span>
						{aboutUsData.tag3}
					</span>
				</Paragraph>
			</div>

			<div className='justify-between px-[0px] sm:px-[77px] md:px-[115px] lg:px-[175px] grid grid-cols-1 sm:grid-cols-3 gap-3 pb-[70px] sm:pb-[130px] md:pb-[135px]'>
				{aboutUsData.lists.map((list, index) => (
					<div key={index} className='flex flex-col pb-[10px]'>
						<img src={list.img_url} alt={list.title} className='mx-auto md:w-[85px] sm:w-[70px] w-[55px] pb-[15px]' />
						<Paragraph variant='body2' className='text-center font-bold text-xs sm:text-2xl'>
							{list.title}
						</Paragraph>
					</div>
				))}
			</div>

			<PersonalizedText
				className='relative pl-[20px] sm:pl-[90px] md:pl-[80px] lg:pl-[90px] xl:pl-[100px] 2xl:pl-[300px] pb-[50px] sm:pb-[32px] md:pb-[23px] lg:pb-[33px] text-[8px] sm:text-base xl:text-base 2xl:text-lg -z-50'
				style={{ transform: 'rotate(-10.62deg)', transformOrigin: '0 0', color: '#FF6108', fontWeight: '400' }}>
				You all are coming right ??...
			</PersonalizedText>

			<Paragraph
				variant='body2'
				className='text-center mx-auto px-[30px] sm:px-[135px] mt-[-60px] pb-[25px] sm:pb-[40px] md:pb-[55px] lg:pb-[80px] text-xs sm:text-2xl'>
				{aboutUsData.content1}{' '}
				<span className='font-syne text-left text-base sm:text-3.5xl font-bold mr-[15px]'> {aboutUsData.content2}</span>
				<img
					src={aboutUsData.star_img_url}
					alt='star'
					className='sm:h-[76px] sm:w-[76px] h-[45px]'
					style={{ display: 'inline-block', verticalAlign: 'top' }}
				/>
			</Paragraph>
		</section>
	);
}
