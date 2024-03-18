import { useState } from 'react';
//import { AuthContext } from '../../../context/AuthContext';
//import { STAGES, currentUser } from '../../../data/formInformation';
//import { count } from 'firebase/firestore';

export default function Inputs({ className, formData, onChange, validated }) {
	const { type, minLength, maxLength, regex, id, placeholder, value } = formData;
	const [errorMessage, setErrorMessage] = useState('');

	const validateInput = event => {
		const value = event.target.value;
		if (regex && value) {
			const isValid = value.match(regex);
			if (!isValid) {
				console.log(`Invalid input for ${id}`);
				event.target.style.border = '1px solid red';
				setErrorMessage(`Invalid input for ${id}`);
				validated(false);
			} else {
				setErrorMessage('');
				event.target.style.border = '1px solid #FF7647';
				validated(true);
			}
		}
	};

	return (
		<>
			<input
				type={type}
				minLength={minLength}
				maxLength={maxLength}
				id={id}
				className={'outline-none bg-inherit rounded-md my-1 mb-6 text-[#B0B0B0] p-2 ' + className}
				style={{ border: '1px solid #FF7647', boxShadow: '2px 2px 0px 0px #F9F9F9' }}
				placeholder={placeholder}
				value={value}
				onBlur={validateInput}
				onChange={onChange}
			/>
			{errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
		</>
	);
}
