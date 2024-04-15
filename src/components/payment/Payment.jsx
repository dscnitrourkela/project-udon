import { Paragraph } from '../shared';
import './input.styles.css';
import { Paymentdata, UPIdata } from '../../data/paymentData';

export const PaymentCont = () => {
	return (
		<>
			<div className='container px-4 lg:px-0 flex justify-center items-center'>
				<div className='p-4 w-full lg:w-3/4'>
					<Paragraph variant='body3' className='text-center mb-8 lg:mb-4 mt-11'>
						<b>Preferred method:</b> Transfer funds from your bank to our CURRENT account
					</Paragraph>
					<div className='flex flex-col items-center'>
						{Paymentdata.map((item, index) => (
							<Paragraph variant='body3' key={index} className='text-center lg:mb-4'>
								{item[0]}
								<b>{item[1]}</b>
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
							<Paragraph variant='body3' key={index} className='text-center font-bold lg:mb-4'>
								{item}
							</Paragraph>
						))}
						<img
							src='https://raw.githubusercontent.com/dscnitrourkela/project-udon/abc328c82b88666df7eaa5842d948cb474068bb5/src/assets/images/Scanner.png'
							alt='Scannerimage'
							className='w-64 h-64 object-cover'
						/>
						{UPIdata.slice(1).map((item, index) => (
							<Paragraph variant='body3' key={index} className='text-center font-bold	lg:mb-4'>
								{item}
							</Paragraph>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export const SubmissionForm = ({ onSubmit, onInput }) => {
	return (
		<div className=' py-8 flex flex-col items-center '>
			<input
				type='file'
				name='receipt'
				className={
					'border divide-solid border-[#FF7647] outline-none bg-white rounded-md my-1 my-6 text-[#B0B0B0] p-2 w-[470px]'
				}
				style={{ boxShadow: '3px 3px 0px 0px black' }}
				onChange={onInput}
			/>
			<button
				className='border border-black bg-[#FF7647] text-black px-4 py-2 rounded-lg m-6 w-[470px]'
				style={{ boxShadow: '3px 3px 0px 0px black' }}
				onClick={onSubmit}>
				<Paragraph variant='body3' className='inline mx-auto text-xl'>
					Submit
				</Paragraph>
			</button>
		</div>
	);
};
