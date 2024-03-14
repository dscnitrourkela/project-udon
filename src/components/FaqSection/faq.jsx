import faqData from '../../config/content/faqData.js';
import { PersonalizedText, Heading, Paragraph } from '../shared/index.js';

function FAQ() {
	return (
		<div
			style={{
				justifyItems: 'center',
				margin: '10px auto 44px auto',
			}}
			className='md:w-[76%] w-[92%]'>
			<div className='flex flex-col items-center justify-center mb-[40px]'>
				<Heading
					variant='h1'
					style={{
						color: '#F2DA05',
						textShadow: '4.608px 4.608px 0px #000',
						webkitTextStrokeWidth: '2.71052622795105',
						webkitTextStrokeColor: '#252525',
					}}>
					FAQs
				</Heading>
				<PersonalizedText style={{ color: 'var(--orange-dash, #FF4409)' }}>You got questions & we got you</PersonalizedText>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: '38px',
				}}>
				{faqData.questions.map(({ id, question, answer }) => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							gap: '10px',
						}}
						key={id}>
						<div className='flex gap-[10px] md:gap-[12px] flex-row'>
							<img
								src='https://res.cloudinary.com/dv1src8un/image/upload/v1710406763/star_l1eniz.png'
								alt='Star'
								className='h-[32px]'
								style={{ aspectRatio: 1 }}
							/>
							<Heading variant='h3'>{question}</Heading>
						</div>
						{answer instanceof Array ? (
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
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default FAQ;
