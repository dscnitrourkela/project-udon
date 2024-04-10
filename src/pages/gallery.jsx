import GalleryPage from '../components/GallerySection/GalleryPage.jsx';
import Navbar from '../components/shared/NavBar';
import Footer from '../components/shared/marginals/footer';

export default function Gallery() {
	return (
		<div>
			<Navbar />;
			<GalleryPage />;
			<Footer />
		</div>
	);
}
