import { PersonalizedText, Paragraph } from '../typography/index.jsx';
import aboutUsData from '../../../data/aboutUsData.js';

export default function AboutUs() {
	return (
		<div>
			<div className='container py-6 flex flex-col items-center md:pb-[4%] sm:pb-[8%]'>
				<Paragraph variant='body2' className='text-center text-4.5x1 font-semibold'>
					{aboutUsData.tag1}
					<br />
					{aboutUsData.tag2}
					<span className='font-syne text-left text-3.5xl leading-9 font-bold'>
						{aboutUsData.tag3_char1}
						<span className='relative underline decoration-wavy decoration-2 underline-offset-8 decoration-primary-foreground'>
							{aboutUsData.tag3_wavy}
						</span>
						{aboutUsData.tag3}
					</span>
				</Paragraph>
			</div>

			<div className='w-full flex justify-center items-center pb-[12%] sm:pb-[10%] md:pb-[8%]'>
				<div className='flex justify-between w-[95%] sm:w-[75%] md:w-[55%] lg:w-[50%]'>
					{aboutUsData.lists.map((list, index) => (
						<div key={index} className='flex flex-col'>
							<img src={list.img_url} alt={list.title} className='mx-auto md:w-[85px] sm:w-[70px] w-[55px] pb-[2%]' />
							<Paragraph variant='body2' className='text-center font-semibold'>
								{list.title}
							</Paragraph>
						</div>
					))}
				</div>
			</div>

			<PersonalizedText
				className='pl-[7%] md:pl-[12%] lg:pl-[15%] pb-[10%] sm:pb-[5%] md:pb-[2%] lg:pb-[1%]'
				style={{ transform: 'rotate(-10.62deg)', transformOrigin: '0 0', color: '#FF6108', fontSize: 16, fontWeight: '400' }}>
				You all are coming right ??...
			</PersonalizedText>

			<Paragraph variant='body2' className='text-center mx-auto w-[60%] mt-[-60px] pb-[7%]'>
				{aboutUsData.content1}{' '}
				<span className='font-syne text-left text-3.5xl leading-9 font-bold mr-[15px]'> {aboutUsData.content2}</span>
				<img
					src={aboutUsData.star_img_url}
					alt='star'
					className='h-[76px] w-[76px]'
					style={{ transform: 'rotate(342.60deg)', display: 'inline-block', verticalAlign: 'top' }}
				/>
			</Paragraph>
		</div>
	);
}
