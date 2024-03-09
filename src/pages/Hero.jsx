import { Heading } from '../components/shared';
import Paragraph from '../components/shared/typography/Paragraph';
export default function Hero() {
	return (
		<>
			<div className='container'>
				<Heading variant='h1' className='text-primary-yellow'>
					Registration
				</Heading>
				<Heading variant='h3'>
					<span>Already registered? </span>
					<span className='text-primary-foreground'>Sign in </span>{' '}
				</Heading>
			</div>

			<div className='container'>
				<Heading variant='h2'>Steps</Heading>
				<Paragraph variant='body2'>
					<ul>
						<li>Register using the form below.</li>
						<li>
							Make payment using our bank account information.While making the payment, please include the following
							information in the memo / remarks field. Your roll number (1 letter followed by 4 digits), then your first
							name, then your last name.eg: M4303 Bishwanath Sahoo. If first name and last name combo is too long, use
							shortened name.
						</li>
						<li>Send an email to recrourkela1999@gmail.com with screenshot of your payment.</li>
						<li>The Organizing team will send confirmation email within 48 hours. </li>
					</ul>
				</Paragraph>
			</div>
		</>
	);
}
