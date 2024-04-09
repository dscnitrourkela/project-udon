import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel/Carousel';
import FAQ from '../components/FaqSection/faq';
import Hero from '../components/Hero';
import Navbar from '../components/shared/NavBar';
import Footer from '../components/shared/marginals/footer';

export default function Home() {
	return (
		<div className=''>
			<Navbar />
			<Hero />
			<Carousel />
			<AboutUs />
			<FAQ />
			<Footer />
		</div>
	);
}
