import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './formInputs.css';
import { Heading, Paragraph } from '../shared';
import { DropDown, Inputs, TextAreaInput } from '../shared/partials/FormInputs';
import formimg from '../../assets/images/form-tickets.png';
import { donation, feeCoverage, initialContent, inputContent, lastPartContent } from '../../data/formInformation';
import { storeFormData } from '../../firebase/registration';
import { toCloudinary } from './uploadingFiles';
import { registrationOptions, branchOptions } from '../../data/formInformation';

import { toast } from 'react-toastify';
import Button from '../shared/Button';

const FormContainer = () => {
	const { userInfo } = useContext(AuthContext);
	const [currentUser, userData] = userInfo;

	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState({});
	const verifiedEmail = currentUser?.email ? true : false;
	const [isValid, setValid] = useState({
		recRollNumber: true,
		name: true,
		country: true,
		state: true,
		city: true,
		prefix: true,
		mobile: true,
		regType: true,
		profileImage: true,
	});

	const checkValidity = Object.values(isValid).every(value => value) && verifiedEmail;
	const checkIfEmpty = Object.entries(formData).some(
		([key, value]) =>
			value === '' &&
			inputContent.find(item => {
				if (Array.isArray(item.id)) {
					return item.id.includes(key);
				} else {
					return item.id === key;
				}
			})?.required
	);

	const notAllowed = !checkValidity || checkIfEmpty;

	const setInputValue = async (key, value, file) => {
		if (!key) return;

		if (key === 'profileImage') {
			const imgURL = await toast.promise(toCloudinary(file), {
				loading: 'Uploading image...',
				success: 'Image uploaded successfully',
				error: 'Error uploading image',
			});
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
				recRollNumber: userData?.recRollNumber || '',
				branch: userData?.branch || branchOptions[0],
				name: userData?.name || '',
				email: currentUser?.email || '',
				country: userData?.country || '',
				state: userData?.state || '',
				city: userData?.city || '',
				prefix: userData?.prefix || '',
				mobile: userData?.mobile || '',
				regType: userData?.regType || registrationOptions[0],
				profileImage: userData?.profileImage || '',
				testimonial: userData?.testimonial || '',
			});
		}
	}, [userData, currentUser]);

	const registerUser = async e => {
		if (notAllowed) {
			toast.error('Please fill all the required fields');
		}
		e.preventDefault();
		try {
			const documentId = await toast.promise(storeFormData(formData), {
				loading: 'Registering...',
				success: 'Registration successful',
				error: 'Error registering',
			});

			return documentId;
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div
			className='text-white bg-black flex flex-col md:flex-row justify-between py-6'
			style={{
				backgroundImage: 'url(https://res.cloudinary.com/djl2ulktr/image/upload/v1712581178/Ellipse_yvfzt2.png)',
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
				<Paragraph
					variant='body2'
					className=' shadow-white px-2'
					style={{
						textShadow: ' 1px 1px 0px #FF7342',
						WebkitTextStrokeWidth: 0.5,
						WebkitTextStrokeColor: '#252525',
					}}>
					Choose your Branch
				</Paragraph>{' '}
				<DropDown
					options={branchOptions}
					key='branch'
					onChange={e => setInputValue('branch', e.target.value)}
					value={formData.branch}
				/>
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
									errormsg={setErrorMessage}
									formData={{
										type: item.type[idx],
										minLength: item.minLength[idx],
										maxLength: item.maxLength[idx],
										regex: item.regex[idx],
										value: item.type[idx] === 'number' ? parseInt(formData[id]) : formData[id] || '',
										id: id,
										placeholder: item.placeholder[idx],
										disabled: item.id === 'email' && verifiedEmail ? true : false,
										verified: verifiedEmail,
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
								errormsg={setErrorMessage}
								formData={{
									type: item.type,
									minLength: item.minLength,
									maxLength: item.maxLength,
									regex: item.regex,
									id: item.id,
									placeholder: item.placeholder,
									value: formData[item.id],
									verified: verifiedEmail,
									disabled: item.id === 'email' && verifiedEmail ? true : false,
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
				<DropDown
					options={registrationOptions}
					key='regType'
					onChange={e => setInputValue('regType', e.target.value)}
					value={formData.regType}
				/>
				<Paragraph
					variant='body2'
					className=' shadow-white px-2'
					style={{
						textShadow: ' 1px 1px 0px #FF7342',
						WebkitTextStrokeWidth: 0.5,
						WebkitTextStrokeColor: '#252525',
					}}>
					Testimonial
				</Paragraph>
				<TextAreaInput onChange={e => setInputValue('testimonial', e.target.value)} />
				<Paragraph variant='body3' className='mb-6 mt-10 text-xl'>
					{lastPartContent[0]}
					<span className='underline'>{lastPartContent[1]}</span> {lastPartContent[2]}
				</Paragraph>
				<Button
					variant={'primary'}
					onClick={registerUser}
					disabled={notAllowed}
					className={
						'bg-[#FF7647] text-black rounded-md p-2 mt-6 w-[100%]' + (notAllowed ? ' cursor-not-allowed bg-[#715d56]' : '')
					}
					style={{ boxShadow: '2px 2px 0px 0px #FFF6F6' }}>
					<Paragraph variant='body3' className='inline mx-auto text-xl'>
						{notAllowed
							? 'Please fill all the required fields'
							: userInfo[1].recRollNumber
								? 'Update your details'
								: 'Next'}
					</Paragraph>
				</Button>
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
