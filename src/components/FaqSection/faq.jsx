import { useState } from 'react';
import faqData from '../../config/content/faqData.js';
import { PersonalizedText, Heading, Paragraph } from '../shared/index.js';

function FAQ() {
	const Header1 = faqData.Header1;
	const Header2 = faqData.Header2;
	const [openQuestion, setOpenQuestion] = useState(null);

	const toggleQuestion = id => {
		if (openQuestion === id) {
			setOpenQuestion(null);
		} else {
			setOpenQuestion(id);
		}
	};

	return (
		<div className='md:w-[76%] w-[92%] justify-items-center mt-[10px] mb-[44px] mx-auto'>
			<div className='flex flex-col items-center justify-center mb-[40px]'>
				<Heading
					variant='h1'
					style={{
						color: '#F2DA05',
						textShadow: '4.608px 4.608px 0px #000',
						WebkitTextStrokeWidth: '0px',
						WebkitTextStrokeColor: '#252525',
					}}>
					{Header1}
				</Heading>
				<PersonalizedText style={{ color: 'var(--orange-dash, #FF4409)' }}>{Header2}</PersonalizedText>
			</div>
			<div className='flex flex-col items-start gap-[38px]'>
				{faqData.questions.map(({ id, question, answer }) => (
					<div
						key={id}
						className='flex flex-col justify-center gap-[10px] pb-[20px] w-full border-b-2 border-solid border-[#252525]'>
						<div className='flex gap-[10px] md:gap-[12px] flex-row cursor-pointer' onClick={() => toggleQuestion(id)}>
							<img className='h-[18px] md:h-[32px] aspect-square' src={faqData.img.src} alt={faqData.img.alt} />
							<Heading variant='h3'>{question}</Heading>
						</div>
						{openQuestion === id &&
							(answer instanceof Array ? (
								<ul className='list-[square] px-7'>
									{answer.map(({ key, content, bulleted }) => (
										<li key={key} className={bulleted ? '' : 'list-none'}>
											<Paragraph variant='body3'>{content}</Paragraph>
										</li>
									))}
								</ul>
							) : (
								<Paragraph variant='body3' className='ml-[18]'>
									{answer}
								</Paragraph>
							))}
					</div>
				))}
			</div>
		</div>
	);
}

export default FAQ;
