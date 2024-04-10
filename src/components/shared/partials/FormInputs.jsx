export function Inputs({ className, formData, onChange, validated, checkEmpty, errormsg, required }) {
	const { type, minLength, maxLength, regex, id, placeholder, value } = formData;
	const validateInput = event => {
		const value = event.target.value;
		if (regex && value) {
			const isValid = value.match(regex);
			const isEmpty = !required || value === '';

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
				updateState(id, checkEmpty, true);
				errormsg(prevMsg => prevMsg + `\nEmpty input for ${id}`);
			} else {
				updateState(id, checkEmpty, false);
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

	return (
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
			onChange={onChange}
			required={required ? true : false}
		/>
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
