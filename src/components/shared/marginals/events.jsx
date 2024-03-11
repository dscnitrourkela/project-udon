const Event = () => {
	return (
		<div className='inline-flex gap-32'>
			{/* Project Card 1 */}
			<div
				className='w-390 h-292 flex-shrink-0 flex flex-col justify-between items-start  border border-black shadow-md'
				style={{
					background: 'rgba(255, 158, 124, 1)',
					borderRadius: '8px',
					boxShadow: '4px 4px 0px 0px #000',
					border: '1px solid #000',
				}}>
				<div className='inline-flex p-8 justify-center items-center gap-10'>
					{/* Small Attached Card */}
					<div className='inline-flex p-8 justify-center items-center gap-10 rounded-lg border-2 border-black bg-yellow-500'>
						Small Card 1
					</div>
				</div>
				{/* Content */}
				<p>Project Card 1</p>
			</div>

			{/* Project Card 2 */}
			<div
				className='w-390 h-292 flex-shrink-0 flex flex-col justify-between items-start  border border-black shadow-md'
				style={{
					background: 'rgba(255, 158, 124, 1)',
					borderRadius: '8px',
					boxShadow: '4px 4px 0px 0px #000',
					border: '1px solid #000',
				}}>
				<div className='inline-flex p-8 justify-center items-center gap-10'>
					{/* Small Attached Card */}
					<div className='inline-flex p-8 justify-center items-center gap-10 rounded-lg border-2 border-black bg-yellow-500'>
						Small Card 2
					</div>
				</div>
				{/* Content */}
				<p>Project Card 2</p>
			</div>

			{/* Project Card 3 */}
			<div
				className='w-390 h-292 flex-shrink-0 flex flex-col justify-between items-start  border border-black shadow-md'
				style={{
					background: 'rgba(255, 158, 124, 1)',
					borderRadius: '8px',
					boxShadow: '4px 4px 0px 0px #000',
					border: '1px solid #000',
				}}>
				<div className='inline-flex p-8 justify-center items-center gap-10'>
					{/* Small Attached Card */}
					<div className='inline-flex p-8 justify-center items-center gap-10 rounded-lg border-2 border-black bg-yellow-500'>
						Small Card 3
					</div>
				</div>
				{/* Content */}
				<p>Project Card 3</p>
			</div>
		</div>
	);
};

export default Event;
