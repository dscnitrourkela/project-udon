//import { AuthContext } from '../../../context/AuthContext';
//import { STAGES, currentUser } from '../../../data/formInformation';
//import { count } from 'firebase/firestore';

export function Inputs({ className, formData, onChange, validated, checkEmpty, errormsg, required }) {
	const { type, minLength, maxLength, regex, id, placeholder, value } = formData;

	const validateInput = event => {
		const value = event.target.value;
		if (regex && value) {
			const isValid = value.match(regex);
			const isEmpty = !required || value === '';

			if (!isValid) {
				console.log(`Invalid input for ${id}`);
				event.target.style.border = '1px solid #b91c1c';

				validated(prev => ({
					...prev,
					[id]: false,
				}));
				errormsg(prevMsg => prevMsg + `\nInvalid input for ${id}`);
			} else {
				event.target.style.border = '1px solid #FF7647';

				validated(prev => ({
					...prev,
					[id]: true,
				}));
				errormsg(prevMsg => prevMsg.replace(new RegExp(`\\nInvalid input for ${id}`, 'g'), ''));
			}

			if (isEmpty) {
				checkEmpty(prev => ({
					...prev,
					[id]: true,
				}));
				errormsg(prevMsg => prevMsg + `\nEmpty input for ${id}`);
			} else {
				checkEmpty(prev => ({
					...prev,
					[id]: false,
				}));
				errormsg(prevMsg => prevMsg.replace(new RegExp(`\\nEmpty input for ${id}`, 'g'), ''));
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
			required={required ? true : false}
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
