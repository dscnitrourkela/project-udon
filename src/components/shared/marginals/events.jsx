import { Heading, Text } from '../typography/index.jsx';
import eventData from '../../../data/eventData.js';

export default function Event() {
	return (
		<div className='p-8 border-1 border-red-500 '>
			<Heading
				variant='h1'
				className='text-primary-yellow text-center text-5xl md:text-6xl lg:text-7xl'
				style={{
					textShadow: '4.608px 4.608px 0px #000',
					WebkitTextStrokeWidth: 2.71052622795105,
					WebkitTextStrokeColor: '#252525',
				}}>
				Events
			</Heading>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
				{eventData.map((event, index) => (
					<div
						key={index}
						className='bg-[#ffcccb] p-6 rounded-lg flex-shrink-0 relative'
						style={{
							borderRadius: '8px',
							border: '1px solid #000',
							background: '#FF9E7C',
							boxShadow: '4px 4px 0px 0px #000',
							width: 'auto',
						}}>
						<div
							className='bg-[#ff8c69] text-white px-3 py-1 rounded-full text-sm absolute  '
							style={{
								top: '-0.5rem',
								right: '-1.5rem',
								borderRadius: '9px',
								border: '2px solid #000',
								background: 'var(--Accent-Yellow, #F2DA05)',
								whiteSpace: 'nowrap',
								width: 'auto',
								fontSize: '14px',

								zIndex: '10',
							}}>
							{event.time}
						</div>
						<h3 className='text-xl font-semibold mb-2'>
							<Heading variant='h3'>{event.date}</Heading>
						</h3>
						<h4 className='text-lg font-semibold mb-4'>
							<Heading variant='h3'>{event.venue}</Heading>
						</h4>
						<ul className='text-[#d45500]'>
							{event.agenda.map((item, index) => (
								<li key={index}>
									<Text style={{ color: '#000', fontSize: '16px' }}>{item}</Text>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
