import { Heading } from '../components/shared';
import Paragraph from '../components/shared/typography/Paragraph';
import { Paymentdata } from '../data/Paymentdata';
export default function Payment() {
	return (
		<>
			<div className='container mx-auto px-4 lg:px-0'>
				<Heading
					variant='h2'
					className='text-primary-yellow'
					style={{
						textShadow: '1.7px 1.7px 0px #000000',
						WebkitTextStrokeWidth: 1,
						WebkitTextStrokeColor: 'black',
					}}>
					Payment
				</Heading>
				<Paragraph variant='body3'>Send an email to recrourkela1998@gmail.com with a screenshot of your payment.</Paragraph>
			</div>

			{/* <div className='container mx-auto px-4 lg:px-0 border border-solid border-black'>
    <Heading variant='h3' className='text-center my-8 lg:my-16'>Payment method we have</Heading>
    <Paragraph variant='body3' className='text-center mb-8 lg:mb-16'>Preferred method: Transfer funds from your bank to our CURRENT account</Paragraph>
    <div className='flex flex-col items-center'>
        {Paymentdata.map((item, index) => (
            <Paragraph variant='body3' key={index} className='text-center lg:mb-4'>
                {item}
            </Paragraph>
        ))}
    </div>
</div> */}

			<div className='container mx-auto px-4 lg:px-0  flex justify-center'>
				<div className='border border-solid border-black p-4 w-1/2'>
					<Heading variant='h3' className='text-center my-8 lg:my-16'>
						Payment method we have
					</Heading>
					<Paragraph variant='body3' className='text-center mb-8 lg:mb-16'>
						Preferred method: Transfer funds from your bank to our CURRENT account
					</Paragraph>
					<div className='flex flex-col items-center'>
						{Paymentdata.map((item, index) => (
							<Paragraph variant='body3' key={index} className='text-center lg:mb-4'>
								{item}
							</Paragraph>
						))}
					</div>
				</div>
			</div>

			<Heading variant='body3' className='text-primary-foreground flex justify-center '>
				Please contact the organizers if you want to pay in installments or one of the above methods do not work for you.
			</Heading>
		</>
	);
}
