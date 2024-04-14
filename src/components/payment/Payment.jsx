import { Paragraph } from '../shared';
import { Paymentdata, UPIdata } from '../../data/paymentData';

export const PaymentCont = () => {
	return (
		<>
			<div className='container  px-4 lg:px-0 flex justify-center items-center	'>
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
};

export const UPI = () => {
	return (
		<>
			<div className='container mx-auto px-4 lg:px-0 flex justify-center'>
				<div className='border border-black p-4 w-1/2'>
					<div className='flex flex-col items-center'>
						{UPIdata.slice(0, 1).map((item, index) => (
							<Paragraph variant='body3' key={index} className='text-center lg:mb-4'>
								{item}
							</Paragraph>
						))}
						<img
							src='https://raw.githubusercontent.com/dscnitrourkela/project-udon/abc328c82b88666df7eaa5842d948cb474068bb5/src/assets/images/Scanner.png'
							alt='Scannerimage'
							className='w-64 h-64 object-cover'
						/>
						{UPIdata.slice(1).map((item, index) => (
							<Paragraph variant='body3' key={index} className='text-center lg:mb-4'>
								{item}
							</Paragraph>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
