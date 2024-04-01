import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, EffectCoverflow } from 'swiper/modules';

import images from '../../data/CarouselData';

function SwipeCarousel() {
	return (
		<div className='container'>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={3}
				spaceBetween={20}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 300,
					modifier: 2.5,
				}}
				modules={[Autoplay, EffectCoverflow]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				className='swiper_container ml-10'>
				{images.map((imageUrl, index) => (
					<SwiperSlide key={index} className='w-[500px]'>
						<img src={imageUrl} alt={`slide_image_${index}`} className='rounded-xl h-[300px]' />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default SwipeCarousel;
