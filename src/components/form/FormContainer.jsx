import React, { useEffect, useState, useContext } from 'react';
//import AuthContext from '../../context/AuthContext';
import { Heading, Paragraph } from '../shared';
import { DropDown, Inputs } from '../shared/partials/FormInputs';
import formimg from '../../assets/images/form-tickets.png';
import { donation, feeCoverage, initialContent, inputContent, lastPartContent } from '../../data/formInformation';
import { storeFormData } from '../../firebase/registration';
import { loggedUser, logUserRegData } from '../../firebase/login';
import { toCloudinary } from './uploadingFiles';

const FormContainer = () => {
	//const { currentUser, userData } = useContext(AuthContext);

	const currentUser = loggedUser,
		userData = logUserRegData;
	console.log('userData:', userData);

	const [isValid, setValid] = useState({
		recRollNumber: false,
		name: false,
		email: false,
		country: true,
		state: true,
		city: true,
		prefix: true,
		mobile: true,
		regType: true,
		profileImage: true,
	});
	const [isEmpty, setEmpty] = useState({
		recRollNumber: true,
		name: true,
		email: true,
		country: false,
		state: false,
		city: false,
		prefix: false,
		mobile: false,
		regType: false,
		profileImage: false,
	});
	var checkValidity = Object.values(isValid).every(value => value);
	var checkIfEmpty = Object.values(isEmpty).some(value => value);

	var notAllowed = !checkValidity || checkIfEmpty;
	const [errorMessage, setErrorMessage] = useState('');
	//console.log('checkValidity:', checkValidity, 'checkIfEmpty:', isEmpty);

	const [formData, setFormData] = useState({});
	console.log('formData:', formData);

	const setInputValue = async (key, value, file) => {
		if (!key) return;

		if (key === 'profileImage') {
			var imgURL = await toCloudinary(file);
			setFormData(prev => ({
				...prev,
				profileImage: imgURL,
			}));
		} else {
			setFormData(prev => ({
				...prev,
				[key]: value,
			}));
		}
	};

	useEffect(() => {
		if (userData) {
			setFormData({
				uid: currentUser?.uid?.toString() || '',
				recRollNumber: userData?.rollNumber || '',
				name: userData?.name || '',
				email: userData?.email || '',
				county: userData?.county || '',
				state: userData?.state || '',
				city: userData?.city || '',
				prefix: userData?.prefix || '',
				mobile: userData?.mobile || '',
				regType: userData?.regType || '',
				profileImage: userData?.profileImage || '',
				googlName: currentUser?.name || '',
				googleMail: currentUser?.email || '',
			});
		}
	}, [userData]);

	const registerUser = async e => {
		if (notAllowed) {
			console.log('Invalid or empty inputs in form');
			return;
		}
		e.preventDefault();
		try {
			const documentId = await storeFormData(formData);
			console.log('Document ID:', documentId);
		} catch (error) {
			console.error('Error:', error);
		}
		console.log('Form Data:', formData);
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
				<Paragraph variant='body3'>{donation}</Paragraph>

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
									onChange={e => setInputValue(id, e.target.value, e.target.validated)}
									validated={setValid}
									checkEmpty={setEmpty}
									errormsg={setErrorMessage}
									formData={{
										type: item.type[idx],
										minLength: item.minLength[idx],
										maxLength: item.maxLength[idx],
										regex: item.regex[idx],
										id: id,
										placeholder: formData?.id || item.placeholder[idx],
									}}
								/>
							))
						) : (
							<Inputs
								className={'block w-[98%]' + (item.classes ? item.classes : '')}
								onChange={e =>
									setInputValue(item.id, e.target.value, e.target.files ? e.target.files[0] : null, e.target.validated)
								}
								validated={setValid}
								checkEmpty={setEmpty}
								errormsg={setErrorMessage}
								formData={{
									type: item.type,
									minLength: item.minLength,
									maxLength: item.maxLength,
									regex: item.regex,
									id: item.id,
									placeholder: item.placeholder,
								}}
								required={item.required}
							/>
						)}
					</React.Fragment>
				))}
				<Paragraph
					variant='body2'
					className=' shadow-white px-2'
					style={{
						textShadow: ' 1px 1px 0px #FF7342',
						WebkitTextStrokeWidth: 0.5,
						WebkitTextStrokeColor: '#252525',
					}}>
					Registration Type
				</Paragraph>{' '}
				<DropDown />
				<Paragraph variant='body3' className='mb-6 mt-10 text-xl'>
					{lastPartContent}
				</Paragraph>
				<button
					{...(notAllowed ? 'disabled' : '')}
					className={
						'bg-[#FF7647] text-black rounded-md p-2 mt-6 w-[100%]' + (notAllowed ? ' cursor-not-allowed, bg-[#80584a]' : '')
					}
					style={{ boxShadow: '2px 2px 0px 0px #FFF6F6' }}>
					{' '}
					<Paragraph variant='body3' className='inline mx-auto text-xl' onClick={registerUser}>
						Register Now
					</Paragraph>
				</button>
				{notAllowed ? (
					<Paragraph variant='body3' className='my-2 text-red-600'>
						{errorMessage}
					</Paragraph>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default FormContainer;
