import faqData from '../../config/content/faqData.js';
import { PersonalizedText, Heading, Paragraph } from '../shared/index.js';

function FAQ() {
	const Header1 = faqData.Header1;
	const Header2 = faqData.Header2;

	return (
		<div className='md:w-[76%] w-[92%] justify-items-center mt-[10px] mb-[44px] mx-auto'>
			<div className='flex flex-col items-center justify-center mb-[30px] md:mb-[40px]'>
				<Heading
					variant='h1'
					className='text-4.5xl md:text-13xl text-primary-yellow'
					style={{
						textShadow:
							'5px 5px black, -2px -2px black, 2px -2px black, -2px 2px black, 2px 2px black, 0px 2px black, 2px 0px black, -2px 0px black, 0px -2px black',
					}}>
					{Header1}
				</Heading>
				<PersonalizedText className='text-primary-foreground text-sm md:text-base font-normal'>{Header2}</PersonalizedText>
			</div>
			<div className='flex flex-col items-start gap-[15px] md:gap-[38px]'>
				{faqData.questions.map(({ id, question, answer }) => (
					<div className='flex flex-col justify-center gap-[5px] md:gap-[10px]' key={id}>
						<div className='flex gap-[5px] sm:gap-[10px] md:gap-[12px] flex-row'>
							<img className='h-[18px] md:h-[32px] aspect-square' src={faqData.img.src} alt={faqData.img.alt} />
							<Heading variant='h3' className='text-xs md:text-2xl'>
								{question}
							</Heading>
						</div>
						{answer instanceof Array ? (
							<ul className='list-[square] px-7'>
								{answer.map(({ key, content, bulleted }) => (
									<li key={key} className={bulleted ? '' : 'list-none'}>
										<Paragraph variant='body3' className='text-xs md:text-lg'>
											{' '}
											{content}
										</Paragraph>
									</li>
								))}
							</ul>
						) : (
							<Paragraph variant='body3' className='ml-[18]'>
								{answer}
							</Paragraph>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default FAQ;
