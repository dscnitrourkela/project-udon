import FormContainer from '../components/form/FormContainer';
import NavBar from '../components/shared/marginals/NavBar';
import Footer from '../components/shared/marginals/footer';

export default function register() {
	return (
		<>
			<NavBar />
			<section id='register'>
				<FormContainer />
			</section>
			<Footer />
		</>
	);
}
