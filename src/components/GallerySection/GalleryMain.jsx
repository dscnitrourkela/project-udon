import { Heading, Text } from '../shared/index.js';
import galleryData from '../../config/content/galleryData.js';
import { useNavigate } from 'react-router-dom';

function GalleryMain() {
	const navigate = useNavigate();

	const goToGalleryPage = () => {
		navigate('./gallery');
	};

	return (
		<div className='w-90 mx-auto flex flex-col items-center mb-[40px] gap-y-[80px]'>
			<Heading
				variant='h1'
				style={{
					fontSize: '80px',
					color: '#F2DA05',
					textShadow: '4.608px 4.608px 0px #000',
					webkitTextStrokeWidth: '0px',
					webkitTextStrokeColor: '#252525',
				}}>
				25 YEARS SINCE....
			</Heading>
			<div className='flex flex-col gap-y-[90px]'>
				<div className='w-full flex flex-row gap-x-[150px]'>
					{galleryData.firstRowImages.map(({ src, alt, id }) => (
						<div
							key={id}
							style={{
								borderRadius: '4.5px',
								border: '0.75px solid #000',
								padding: '10.2px 9px 55.3px 9px',
								background: '#FFF',
								boxShadow: '1.5px 2.25px 0px 0px #000',
							}}>
							<img src={src} alt={alt} className='w-full h-auto object-cover rounded-md' />
						</div>
					))}
				</div>
				<div className='w-full flex flex-row justify-around mx-auto'>
					{galleryData.secondRowImages.map(({ src, alt, id }) => (
						<div
							key={id}
							style={{
								borderRadius: '4.5px',
								border: '0.75px solid #000',
								padding: '10.2px 9px 55.3px 9px',
								background: '#FFF',
								boxShadow: '1.5px 2.25px 0px 0px #000',
							}}>
							<img src={src} alt={alt} className='w-full h-auto object-cover rounded-md' />
						</div>
					))}
				</div>
			</div>
			<div className='w-full flex justify-center'>
				<button
					onClick={goToGalleryPage}
					className='px-[18px] py-[12px] rounded-[14px] border-[3px] border-solid border-[#000]'
					style={{
						background: 'var(--Accent-Yellow, #F2DA05)',
					}}>
					<Text variant='navButton'>{galleryData.mainButtonText}</Text>
				</button>
			</div>
		</div>
	);
}

export default GalleryMain;
