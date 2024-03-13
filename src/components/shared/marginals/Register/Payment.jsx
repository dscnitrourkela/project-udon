import Paragraph from '../../typography/Paragraph';
import { Paymentdata } from '../../../../data/Paymentdata';
export default function Payment() {
	return (
		<>
			<div className='container mx-auto px-4 lg:px-0 flex justify-center'>
				<div className='p-4 w-full lg:w-3/4'>
					<Paragraph variant='body3' className='text-center mb-8 lg:mb-4 mt-11'>
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
		</>
	);
}
