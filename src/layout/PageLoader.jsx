import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import pageLogoAnimation from '../assets/animations/page-loader.json';

const PageLoader = () => {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			lottie.loadAnimation({
				container: ref.current,
				renderer: 'svg',
				loop: true,
				autoplay: true,
				animationData: pageLogoAnimation,
			});

			return () => {
				lottie.destroy();
			};
		}
	}, [ref]);

	return (
		<div className='top-0 left-0 fixed w-screen h-screen flex items-center justify-center z-50'>
			<div ref={ref} className='w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96'></div>
		</div>
	);
};

export default PageLoader;
