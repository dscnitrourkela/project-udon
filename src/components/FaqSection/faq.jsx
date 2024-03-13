import faqData from '../../config/content/faqData.js';
import { PersonalizedText, Heading, Paragraph } from '../shared/index.js';

function FAQ() {
	return (
		<div className=''>
			<div className='flex flex-col items-center justify-center'>
				<Heading variant='h1'>FAQs</Heading>
				<PersonalizedText>You got questions & we got you</PersonalizedText>
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
							padding: '0 47px',
							justifyContent: 'center',
							gap: '10px',
						}}
						key={id}>
						<Heading variant='h3'>{question}</Heading>
						<Paragraph variant='body3'>{answer}</Paragraph>
					</div>
				))}
			</div>
		</div>
	);
}

export default FAQ;
