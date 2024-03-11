import { PersonalizedText, Paragraph } from './shared/typography/index.jsx';
import aboutUsData from '../data/aboutUsData.js';

export default function AboutUs() {
	return (
		<section>
			<div className='container py-6 flex flex-col items-center md:pb-[4%] sm:pb-[8%]'>
				<Paragraph variant='body2' className='text-center text-xs sm:text-2xl font-semibold'>
					{aboutUsData.tag1}
					<br />
					{aboutUsData.tag2}
					<span className='font-syne text-left text-base sm:text-3.5xl font-extrabold'>
						{aboutUsData.tag3_char1}
						<span className='relative underline decoration-wavy decoration-1 sm:decoration-2 underline-offset-4 sm:underline-offset-8 decoration-primary-foreground'>
							{aboutUsData.tag3_wavy}
						</span>
						{aboutUsData.tag3}
					</span>
				</Paragraph>
			</div>

			<div className='flex justify-between px-[0%] sm:px-[12%] md:px-[15%] lg:px-[17%] grid grid-cols-1 sm:grid-cols-3 gap-3 pb-[10%] sm:pb-[14%] md:pb-[12%]'>
				{aboutUsData.lists.map((list, index) => (
					<div key={index} className='flex flex-col pb-[3%]'>
						<img src={list.img_url} alt={list.title} className='mx-auto md:w-[85px] sm:w-[70px] w-[55px] pb-[1%]' />
						<Paragraph variant='body2' className='text-center font-bold text-xs sm:text-2xl'>
							{list.title}
						</Paragraph>
					</div>
				))}
			</div>

			<PersonalizedText
				className='pl-[7%] md:pl-[12%] lg:pl-[15%] pb-[12%] sm:pb-[5%] md:pb-[3%] lg:pb-[1%] text-xs sm:text-base'
				style={{ transform: 'rotate(-10.62deg)', transformOrigin: '0 0', color: '#FF6108', fontWeight: '400' }}>
				You all are coming right ??...
			</PersonalizedText>

			<Paragraph variant='body2' className='text-center mx-auto w-[60%] mt-[-60px] pb-[5%] text-xs sm:text-2xl'>
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
