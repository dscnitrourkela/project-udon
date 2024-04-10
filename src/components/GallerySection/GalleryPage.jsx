import galleryData from '../../config/content/galleryData.js';
import { Heading, Text } from '../shared/index.js';
import { useNavigate } from 'react-router-dom';

function GalleryPage() {
	const navigate = useNavigate();

	const goToGalleryMain = () => {
		navigate('/play');
	};

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
				{galleryData.headerText}
			</Heading>
			<div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[45px] gap-y-[70px]'>
				{galleryData.images.map(({ id, src, alt }) => (
					<div
						key={id}
						style={{
							borderRadius: '4.5px',
							border: '0.75px solid #000',
							padding: '10.2px 9px 55.3px 9px',
							background: '#FFF',
							boxShadow: '1.5px 2.25px 0px 0px #000',
						}}>
						<img src={src} alt={alt} className='w-full h-auto object-cover' />
					</div>
				))}
			</div>
			<div className='w-full flex justify-end'>
				<button
					onClick={goToGalleryMain}
					className='px-[18px] py-[12px] rounded-[14px] border-[3px] border-solid border-[#000]'
					style={{
						background: 'var(--Accent-Yellow, #F2DA05)',
					}}>
					<Text variant='navButton'>{galleryData.buttonText}</Text>
				</button>
			</div>
		</div>
	);
}

export default GalleryPage;
