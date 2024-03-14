import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '../shared';
import Inputs from '../shared/partials/FormInputs';
import formimg from '../../assets/images/form-tickets.png';
import { feeCoverage, initialContent, inputContent, lastPartContent } from '../../data/formInformation';

const FormContainer = () => {
	const [inputData, setInputData] = useState({});
	//const [verified, setVerified] = useState(false);
	// const { userData } = useContext(AuthContext);
	const userData = undefined;

	const setInputValue = (key, value) => {
		if (!key) return;
		setInputData(prev => ({
			...prev,
			[key]: {
				...prev[key],
				value,
			},
		}));
	};

	useEffect(() => {
		if (userData) {
			setInputData({
				recRollNumber: userData?.rollNumber || '',
				name: userData?.name || '',
				email: userData?.email || '',
				county: userData?.county || '',
				state: userData?.state || '',
				city: userData?.city || '',
				prefix: userData?.prefix || '',
				mobile: userData?.mobile || '',
				regType: userData?.regType || '',
			});
		}
	}, [userData]);

	const registerUser = () => {
		console.log('User Registered', inputData);
		// firebase code here
		// push userData to firestore
	};

	return (
		<div
			className='text-white bg-black flex flex-col md:flex-row justify-between py-6'
			style={{
				backgroundImage:
					'url(https://github.com/Srish-ty/project-udon/blob/feat/form/src/assets/images/Ellipse.png?raw=true)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}>
			<div id='info' className='w-[90%] md:w-[45%] m-8 p-2'>
				{initialContent.map((item, index) =>
					index == 0 ? (
						<Paragraph variant='body3' key={index} className={item.classes}>
							{item.text}
						</Paragraph>
					) : (
						<Paragraph variant='body3' className={'text-primary ' + item.classes} key={index}>
							{item.text}
						</Paragraph>
					)
				)}
				<div id='imgContainer' className='mx-auto my-8 w-[50vw] md:w-[408px]'>
					<img src={formimg} height={'100%'} width={'100%'} alt='ticket-price' />
				</div>
				<Paragraph variant='body3'>
					Alumni donating/contributing more than ₹50,000 can pay &quot;Individual Only (without family)&quot; registration
					fee for their family registration and they do not need to pay &quot;With Family (spouse + kids)&quot; registration
					fee.
				</Paragraph>

				<Heading
					variant='h3'
					className='text-primary-yellow  mt-10 underline'
					style={{
						textShadow: ' 1px 1px 0px #F9F9F9',
						WebkitTextStrokeWidth: 0.8,
						WebkitTextStrokeColor: '#252525',
					}}>
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

			<div id='form' className='w-[90%] md:w-[55%] m-8 p-2'>
				{inputContent.map(item => (
					<React.Fragment key={item.key}>
						<Paragraph
							variant='body2'
							htmlFor={item.id}
							className=' shadow-white px-2'
							style={{
								textShadow: ' 1px 1px 0px #FF7342',
								WebkitTextStrokeWidth: 0.5,
								WebkitTextStrokeColor: '#252525',
							}}>
							{item.label}
						</Paragraph>{' '}
						{Array.isArray(item.id) ? (
							item.id.map((id, idx) => (
								<Inputs
									key={idx}
									className='inline mr-3 w-[31.3%]'
									onChange={e => setInputValue(id, e.target.value)}
									formData={{
										type: item.type[idx],
										minLength: item.minLength[idx],
										maxLength: item.maxLength[idx],
										regex: item.regex[idx],
										id: id,
										value: inputData[id]?.value || '',
										placeholder: item.placeholder[idx],
									}}
								/>
							))
						) : (
							<Inputs
								className='block w-[98%]'
								formData={{
									type: item.type,
									minLength: item.minLength,
									maxLength: item.maxLength,
									regex: item.regex,
									id: item.id,
									value: inputData[item.id],
									placeholder: item.placeholder,
								}}
							/>
						)}
					</React.Fragment>
				))}

				<textarea
					className='outline-none	bg-inherit rounded-md my-3 mb-6 w-[98%] h-[8vw] text-[#B0B0B0] p-2 block'
					style={{ border: '1px solid #FF7647', boxShadow: '2px 2px 0px 0px #F9F9F9' }}
					placeholder='Registration Type'
				/>

				<Paragraph variant='body3' className='mb-6 mt-10 text-xl'>
					{lastPartContent}
				</Paragraph>

				<button
					className='bg-[#FF7647] text-black rounded-md p-2 mt-6 w-[100%] '
					style={{ boxShadow: '2px 2px 0px 0px #FFF6F6' }}>
					{' '}
					<Paragraph variant='body3' className='inline mx-auto text-xl' onClick={registerUser}>
						Register Now
					</Paragraph>
				</button>
			</div>
		</div>
	);
};

export default FormContainer;
