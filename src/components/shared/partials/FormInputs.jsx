//import { AuthContext } from '../../../context/AuthContext';
//import { STAGES, currentUser } from '../../../data/formInformation';
//import { count } from 'firebase/firestore';

export function Inputs({ className, formData, onChange, validated, errormsg }) {
	const { type, minLength, maxLength, regex, id, placeholder, value } = formData;

	const validateInput = event => {
		const value = event.target.value;
		if (regex && value) {
			const isValid = value.match(regex);
			if (!isValid) {
				console.log(`Invalid input for ${id}`);
				event.target.style.border = '1px solid #b91c1c';

				validated(false);
				errormsg(prevMsg => prevMsg + `\nInvalid input for ${id}`);
			} else {
				//setErrorMessage('');
				errormsg(prevMsg => prevMsg.replace(new RegExp(`\\nInvalid input for ${id}`, 'g'), ''));
				event.target.style.border = '1px solid #FF7647';
				validated(true);
			}
		}
	};

	return (
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
	);
}

export const TextAreaInput = () => {
	return (
		<textarea
			className='outline-none	bg-inherit rounded-md my-3 mb-6 w-[98%] h-[8vw] text-[#B0B0B0] p-2 block'
			style={{ border: '1px solid #FF7647', boxShadow: '2px 2px 0px 0px #F9F9F9' }}
			placeholder='Registration Type'
		/>
	);
};
