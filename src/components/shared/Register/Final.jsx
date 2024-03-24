import { useState } from 'react';
import Payment from './Payment';
import UPI from './UPI';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import { Contactorg } from '../../../data/Paymentdata';
import { Emaildata } from '../../../data/Paymentdata';

function Final() {
	const [isPayment, setIsPayment] = useState(true);

	const switchToPayment = () => {
		setIsPayment(true);
	};

	const switchToUPI = () => {
		setIsPayment(false);
	};

	return (
		<>
			<div className='container mx-auto px-4 lg:px-0 mb-8'>
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
				<Paragraph variant='body3'>{Emaildata}</Paragraph>
			</div>

			<div className='container mx-auto px-4 lg:px-0'>
				<div className='border border-solid border-black p-4 lg:w-1/2 lg:mx-auto'>
					<Heading variant='h3' className='text-center my-8 lg:my-5'>
						Payment method we have
					</Heading>
					<div className=' text-center flex flex-col lg:flex-row justify-center lg:space-x-4 mt-9'>
						<div className='flex justify-center space-x-4 mt-4 relative'>
							<button
								className={`px-4 py-2 rounded-lg border-2 border-black ${isPayment ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
								onClick={switchToPayment}
								style={{ zIndex: 9 }}>
								Bank Transaction
							</button>
							<button
								className={`px-4 py-2 rounded-lg border-2 border-black ${!isPayment ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
								onClick={switchToUPI}
								style={{ zIndex: 9 }}>
								Via UPI using QR
							</button>
						</div>
					</div>
					{isPayment ? <Payment /> : <UPI />}
				</div>
			</div>

			<Heading variant='body3' className='text-primary-foreground flex justify-center'>
				{Contactorg}
			</Heading>
		</>
	);
}

export default Final;
