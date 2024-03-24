import { Heading, Paragraph, HeroText1 } from '../typography/index.jsx';
import eventData from '../../../data/eventData.js';

export default function Event() {
	return (
		<div className='p-8 border-1 border-red-500 '>
			<HeroText1
				className='text-primary-yellow text-center '
				style={{
					textShadow: '4.608px 4.608px 0px #000',
					WebkitTextStrokeWidth: 2.71052622795105,
					WebkitTextStrokeColor: '#252525',
				}}>
				Events
			</HeroText1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
				{eventData.map((event, index) => (
					<div
						key={index}
						className='p-6 rounded-lg flex-shrink-0 relative w-auto bg-[#FF9E7C]'
						style={{
							borderRadius: '8px',
							border: '1px solid #000',

							boxShadow: '4px 4px 0px 0px #000',
						}}>
						<div
							className=' text-white px-3 py-1 rounded-full text-sm absolute  -top-3.5 -right-4 z-10  whitespace-nowrap w-auto bg-yellow-300'
							style={{
								borderRadius: '9px',
								border: '2px solid #000',
							}}>
							<Paragraph variant='body3' className='text-black'>
								{event.time}
							</Paragraph>
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
									<Paragraph variant='body3' className='text-black'>
										{item}
									</Paragraph>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
