import { Heading } from '../shared/index.js';

function GalleryMain() {
	return (
		<div className='w-[90%] mx-auto flex flex-col items-center mb-[40px] gap-y-[105px]'>
			<Heading
				variant='h1'
				style={{
					fontSize: '80px',
					color: '#F2DA05',
					textShadow: '4.608px 4.608px 0px #000',
					webkitTextStrokeWidth: '2.71052622795105',
					webkitTextStrokeColor: '#252525',
				}}>
				25 YEARS SINCE....
			</Heading>
			<div></div>
		</div>
	);
}

export default GalleryMain();
