import { Heading } from '../components/shared';
import Paragraph from '../components/shared/typography/Paragraph';

export default function Payment() {
	return (
		<>
			<Heading variant='h2'>Payment</Heading>
			<Paragraph variant='body3'>Send an email to recrourkela1998@gmail.com with screenshot of your payment.</Paragraph>
			<Heading variant='h3'>Payment method we have</Heading>

			<Paragraph variant='body3'>Preferred method:Transfer funds from your bank to our CURRENT account</Paragraph>
			<Paragraph variant='body3'>Bank: State Bank of India</Paragraph>
			<Paragraph variant='body3'>Account name:NIT Rourkela 1998 Alumni</Paragraph>
			<Paragraph variant='body3'>Account number:41728775160(Current Account)</Paragraph>
			<Paragraph variant='body3'>IFSC Code:SBIN0002109</Paragraph>
			<Paragraph variant='body3'>MICR Code:769002007</Paragraph>
			<Paragraph variant='body3'>Branch Code: 002109</Paragraph>
			<Heading variant='h3'>
				Please contact the organizers if you want to pay in installments or one of the above methods do not work for you.
			</Heading>
		</>
	);
}
