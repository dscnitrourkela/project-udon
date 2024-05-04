import FormContainer from '../components/form/FormContainer';
import { Steps } from '../components/form/Instructions';
import Final from '../components/payment/Final';
import NavBar from '../components/shared/marginals/NavBar';
import Footer from '../components/shared/marginals/footer';

export default function register() {
	return (
		<>
			<NavBar />
			<section id='register'>
				<Steps />
				<FormContainer />
				<Final />
			</section>
			<Footer />
		</>
	);
}
