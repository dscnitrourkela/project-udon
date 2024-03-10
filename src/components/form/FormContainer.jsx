import { Heading, Paragraph } from '../shared';
import formimg from '../../assets/images/form-tickets.png';
import { feeCoverage, initialContent } from '../../data/formInformation';

const FormContainer = () => {
	return (
		<div className='text-white bg-black flex flex-row justify-between' style={{ border: '1px solid aqua' }}>
			<div id='info' className='w-[45%] m-8 p-2' style={{ border: '1px solid red' }}>
				{initialContent.map((item, index) =>
					index == 0 ? (
						<Paragraph variant='body3' key={index}>
							{item}
						</Paragraph>
					) : (
						<Paragraph variant='body3' className='text-primary' key={index}>
							{item}
						</Paragraph>
					)
				)}
				<div id='imgContainer' className='mx-auto my-8 w-[408px]'>
					<img src={formimg} height={'100%'} width={'100%'} alt='ticket-price' />
				</div>
				<Paragraph variant='body3'>
					Alumni donating/contributing more than ₹50,000 can pay &quot;Individual Only (without family)&quot; registration
					fee for their family registration and they do not need to pay &quot;With Family (spouse + kids)&quot; registration
					fee.
				</Paragraph>

				<Heading variant='h3' className='text-primary-yellow shadow-subheading mt-10'>
					The Registration fee covers the following
				</Heading>

				<ul className='list-disc mx-3 my-5'>
					{feeCoverage.map((item, index) => (
						<li key={index}>
							<Paragraph variant='body3' key={index}>
								{item}
							</Paragraph>
						</li>
					))}
				</ul>

				<Paragraph variant='body2' className='text-primary my-2'>
					The fee does not include accommodation.
				</Paragraph>
			</div>

			<div id='form' className=' w-[55%] m-8 p-2' style={{ border: '1px solid red' }}>
				<Heading className='text-primary' variant='h1'>
					Form Container
				</Heading>
				<Paragraph variant='body3'>This is the form container</Paragraph>
				<div>FormContainer</div>
			</div>
		</div>
	);
};

export default FormContainer;
