import { useState } from 'react';
import { PaymentCont, UPI } from './Payment';
import { Heading, Paragraph } from '../shared';
import { Contactorg, Emaildata } from '../../data/paymentData';

function Final() {
	const [isUPI, setisUPI] = useState(true);

	return (
		<>
			<div className='container mx-auto px-4 py-8 lg:px-0 mb-8'>
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
				<div className='border border-solid border-black p-4 lg:w-1/2 lg:mx-auto flex flex-col items-center'>
					<Heading variant='h3' className='text-center lg:my-3'>
						Payment method we have
					</Heading>
					<div className='bg-white text-black rounded-2xl border-[1.5px] border-solid border-black text-center flex flex-col lg:flex-row justify-center  w-auto'>
						<div className='flex justify-center space-x-4 relative'>
							<button
								className={`px-6 py-1 rounded-2xl  ${isUPI ? 'border-2 border-black bg-orange-500 text-white' : 'bg-white text-black'}`}
								onClick={() => {
									setisUPI(true);
								}}
								style={{ zIndex: 9 }}>
								Bank Transaction
							</button>
							<button
								className={`px-4 py-1 rounded-2xl ${!isUPI ? 'border-2 border-black bg-orange-500 text-white' : 'bg-white text-black'}`}
								onClick={() => {
									setisUPI(false);
								}}
								style={{ zIndex: 9 }}>
								Via UPI using QR
							</button>
						</div>
					</div>

					{isUPI ? <PaymentCont /> : <UPI />}
				</div>
			</div>

			<Heading variant='body3' className='text-primary-foreground flex justify-center'>
				{Contactorg}
			</Heading>
		</>
	);
}

export default Final;
