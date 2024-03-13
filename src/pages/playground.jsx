import FAQ from '../components/FaqSection/faq.jsx';
import Footer from '../components/shared/marginals/footer.jsx';
import AboutUs from '../components/AboutUs.jsx';
import NavBar from '../components/shared/NavBar';

export default function Playground() {
	return (
		<>
			<NavBar />
			<AboutUs />
			<FAQ />
			<Footer />
		</>
	);
}
