import { toast } from 'react-toastify';
import { signInWithEmailLink, signOutUser } from '../../../firebase/login';
import Button from '../Button';

export function Inputs({ className, formData, onChange, validated, errormsg, required }) {
	const { type, minLength, maxLength, regex, id, placeholder, value, verified, disabled } = formData;
	const validateInput = event => {
		const value = event.target.value;
		if (regex && value) {
			const isValid = value.match(regex);
			const isEmpty = required && value === '';

			if (!isValid) {
				event.target.style.border = '1px solid #b91c1c';
				updateState(id, validated, false);
				errormsg(prevMsg => prevMsg + `\nInvalid input for ${id}`);
			} else {
				event.target.style.border = '1px solid #FF7647';
				updateState(id, validated, true);
				errormsg(prevMsg => prevMsg.replace(new RegExp(`\\nInvalid input for ${id}`, 'g'), ''));
			}

			if (isEmpty) {
				errormsg(prevMsg => prevMsg + `\nEmpty input for ${id}`);
			} else {
				errormsg(prevMsg => prevMsg.replace(new RegExp(`\\nEmpty input for ${id}`, 'g'), ''));
			}
		}
	};

	const updateState = (id, func, isValid) => {
		func(prev => ({
			...prev,
			[id]: isValid,
		}));
	};

	const handleEmailVerification = async () => {
		if (verified) {
			toast.promise(signOutUser(), {
				loading: 'Logging out...',
				success: 'Logged out successfully',
				error: 'Error logging out',
			});
		} else {
			toast.promise(signInWithEmailLink(value), {
				loading: 'Sending verification email...',
				success: 'Verification email sent',
				error: 'Error sending verification email',
			});
		}
	};

	return (
		<span className={`${type === 'email' ? 'flex items-start gap-10 justify-between' : ''}`}>
			<input
				type={type}
				minLength={minLength}
				maxLength={maxLength}
				id={id}
				className={
					'border divide-solid border-[#FF7647] outline-none bg-inherit rounded-md my-1 mb-6 text-[#B0B0B0] p-2 ' + className
				}
				style={{ boxShadow: '2px 2px 0px 0px #F9F9F9' }}
				placeholder={placeholder}
				value={value}
				onBlur={validateInput}
				disabled={type !== 'email' && !verified ? true : disabled}
				onChange={onChange}
				required={required ? true : false}
			/>
			{type === 'email' && (
				<Button
					variant='primary'
					size='small'
					className={`mt-1 w-fit whitespace-nowrap ${verified ? 'bg-green-400' : ''}`}
					onClick={handleEmailVerification}>
					{verified ? 'Use another email' : 'Verify Email'}
				</Button>
			)}
		</span>
	);
}

export const TextAreaInput = () => {
	return (
		<textarea
			className='border divide-solid border-[#FF7647] outline-none bg-inherit rounded-md my-3 mb-5 w-[98%] h-[8vw] text-[#B0B0B0] p-2 block'
			style={{ boxShadow: '2px 2px 0px 0px #F9F9F9' }}
			placeholder='Share your Experience of coming :-)'
		/>
	);
};

export const DropDown = ({ options, onChange }) => {
	return (
		<select
			className='outline-none bg-inherit rounded-md my-1 mb-6 text-[#B0B0B0] p-2 w-[98%]'
			style={{ border: '1px solid #FF7647', boxShadow: '2px 2px 0px 0px #F9F9F9' }}
			onChange={onChange}>
			{options.map(option => (
				<option
					className='bg-black rounded-md my-4 mb-6 text-[#fa8c67] p-4 w-[98%] hover:bg-[#fa8c67]'
					key={option}
					value={option}>
					{option}
				</option>
			))}
		</select>
	);
};
