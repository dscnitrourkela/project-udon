import { useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { STAGES, currentUser } from '../../../data/formInformation';
import { count } from 'firebase/firestore';

export default function Inputs({ className, formData }) {
	const { type, minLength, maxLength, regex, id, placeholder } = formData;
	const [errorMessage, setErrorMessage] = useState('');

	const [stage, setStage] = useState(STAGES.TYPE_OF_USER);
	const [inputData, setInputData] = useState(currentUser);
	//const [verified, setVerified] = useState(false);
	//const { userData } = useContext(AuthContext);

	/*
	useEffect(() => {
		if (userData) {
			setInputData({
				rollNumber: userData?.rollNumber || '',
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
	*/

	const validateInput = event => {
		const value = event.target.value;
		if (regex && value) {
			const isValid = value.match(regex);
			if (!isValid) {
				console.log(`Invalid input for ${id}`);
				event.target.style.border = '1px solid red';
				setErrorMessage(`Invalid input for ${id}`);
			} else {
				setErrorMessage('');
				event.target.style.border = '1px solid #FF7647';
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
				onBlur={validateInput}
			/>
			{errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
		</>
	);
}
