import Paragraph from '../../typography/Paragraph';
import { UPIdata } from '../../../../data/Paymentdata';
import '../../../../assets/images/Scanner.png';
export default function UPI() {
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
						<img src='Scanner.png' alt='Scannerimage' className='w-64 h-64 object-cover' />
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
}
