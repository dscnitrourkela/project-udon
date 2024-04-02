import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imgURLs } from '../../data/CarouselData';

export default function Carousel() {
	const sliderSettings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='content'>
			<Slider {...sliderSettings}>
				{imgURLs.map((imgurl, index) => (
					<div key={index} className='flex justify-center pl-2  '>
						<img alt={`imgurl.url+${index}`} src={imgurl.url} className='h-[350px] w-[350px]  mx-auto rounded-3xl' />
					</div>
				))}
			</Slider>
		</div>
	);
}
