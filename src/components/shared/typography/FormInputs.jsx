export default function Inputs({ className, id, placeholder }) {
	return (
		<input
			type='text'
			id={id}
			className={'outline-none bg-inherit rounded-md my-1 mb-6 text-[#B0B0B0] p-2 ' + className}
			style={{ border: '1px solid #FF7647', boxShadow: '2px 2px 0px 0px #F9F9F9' }}
			placeholder={placeholder}
		/>
	);
}
