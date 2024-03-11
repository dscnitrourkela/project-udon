import { Heading, Text } from '../typography/index.jsx';

export default function Event() {
	return (
		<div className=' p-8'>
			{/* <div className='text-7xl font-bold text-[#d45500] flex items-center justify-center'>Events</div> */}

			<Heading style={{ color: '#F2DA05', textAlign: 'center', textShadow: '4.608px 4.608px 0px #000' }}>Events</Heading>
			<div className='flex justify-center mt-12 space-x-8'>
				<div
					className='bg-[#ffcccb] p-6 rounded-lg w-80 relative'
					style={{
						borderRadius: '8px',
						border: '1px solid #000',
						background: '#FF9E7C',
						boxShadow: '4px 4px 0px 0px #000',
						gap: '32px',
					}}>
					<div
						className='bg-[#ff8c69] text-white px-3 py-1 rounded-full text-sm absolute -mt-10 ml-60'
						style={{ borderRadius: '9px', border: '2px solid #000', background: 'var(--Accent-Yellow, #F2DA05)' }}>
						4PM onward
					</div>
					<h3 className='text-xl font-semibold mb-2'>
						<Text>Friday, 22 Dec</Text>
					</h3>
					<h4 className='text-lg font-semibold mb-4'>
						<Text>Hotel Deepti Courtyard</Text>
					</h4>
					<ul className='text-[#d45500]'>
						<li>
							<Text style={{ color: ' #000' }}>✦ Registration</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Ice-Breakers</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Dinner</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Catch-up Celebration</Text>
						</li>
					</ul>
				</div>
				<div
					className='bg-[#ffcccb] p-6 rounded-lg w-80 relative'
					style={{
						borderRadius: '8px',
						border: '1px solid #000',
						background: '#FF9E7C',
						boxShadow: '4px 4px 0px 0px #000',
						gap: '32px',
					}}>
					<div
						className='bg-[#ff8c69] text-white px-3 py-1 rounded-full text-sm absolute -mt-10 ml-60'
						style={{ borderRadius: '9px', border: '2px solid #000', background: 'var(--Accent-Yellow, #F2DA05)' }}>
						9AM to 10:30PM
					</div>
					<h3 className='text-xl font-semibold mb-2'>
						<Text>Friday, 22 Dec </Text>
					</h3>
					<h4 className='text-lg font-semibold mb-4'>
						<Text>Hotel Deepti Courtyard</Text>
					</h4>
					<ul className='text-[#d45500]'>
						<li>
							<Text style={{ color: ' #000' }}>✦ Registration</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Ice-Breakers</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Dinner</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Catch-up Celebration</Text>
						</li>
					</ul>
				</div>
				<div
					className='bg-[#ffcccb] p-6 rounded-lg w-80 relative'
					style={{
						borderRadius: '8px',
						border: '1px solid #000',
						background: '#FF9E7C',
						boxShadow: '4px 4px 0px 0px #000',
						gap: '32px',
					}}>
					<div
						className='bg-[#ff8c69] text-white px-3 py-1 rounded-full text-sm absolute -mt-10 ml-60'
						style={{ borderRadius: '9px', border: '2px solid #000', background: 'var(--Accent-Yellow, #F2DA05)' }}>
						9AM to 2PM
					</div>
					<h3 className='text-xl font-semibold mb-2'>
						<Text>Friday, 22 Dec</Text>
					</h3>
					<h4 className='text-lg font-semibold mb-4'>
						<Text>Hotel Deepti Courtyard</Text>
					</h4>
					<ul className='text-[#d45500]'>
						<li>
							<Text style={{ color: ' #000' }}>✦ Registration</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Ice-Breakers</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Dinner</Text>
						</li>
						<li>
							<Text style={{ color: ' #000' }}>✦ Catch-up Celebration</Text>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
