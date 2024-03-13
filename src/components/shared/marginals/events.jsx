import { Heading, Text } from '../typography/index.jsx';
import eventData from '../../../data/eventData.js';

export default function Event() {
	return (
		<div className='p-8' style={{ border: '1px solid red' }}>
			<Heading
				variant='h1'
				className='text-primary-yellow text-center'
				style={{
					textShadow: '4.608px 4.608px 0px #000',
					WebkitTextStrokeWidth: 2.71052622795105,
					WebkitTextStrokeColor: '#252525',
				}}>
				Events
			</Heading>
			<div className='flex justify-between mt-12 space-x-8' style={{ border: '1px solid blue' }}>
				{eventData.map((event, index) => (
					<div
						key={index}
						className='bg-[#ffcccb] p-6 rounded-lg w-80 relative'
						style={{
							borderRadius: '8px',
							border: '1px solid #000',
							background: '#FF9E7C',
							boxShadow: '4px 4px 0px 0px #000',
							gap: '64px',
							width: 'auto',
						}}>
						<div
							className='bg-[#ff8c69] text-white px-3 py-1 rounded-full text-sm absolute -mt-10 ml-60'
							style={{
								borderRadius: '9px',
								border: '2px solid #000',
								background: 'var(--Accent-Yellow, #F2DA05)',
								whiteSpace: 'nowrap',
								width: 'auto',
							}}>
							{event.time}
						</div>
						<h3 className='text-xl font-semibold mb-2'>
							<Heading variant='h3'>{event.date}</Heading>
						</h3>
						<h4 className='text-lg font-semibold mb-4'>
							<Heading variant='h3' style={{ whiteSpace: 'nowrap' }}>
								{event.venue}
							</Heading>
						</h4>
						<ul className='text-[#d45500]'>
							{event.agenda.map((item, index) => (
								<li key={index}>
									<Text style={{ color: '#000' }}>{item}</Text>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
