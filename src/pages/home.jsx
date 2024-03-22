import AboutUs from '../components/AboutUs';
import FAQ from '../components/FaqSection/faq';
import Hero from '../components/Hero';
import Navbar from '../components/shared/NavBar';
import Footer from '../components/shared/marginals/footer';

export default function Home() {
	return (

		<div className='container py-6'>
			<h1 className='text-3xl font-bold'>1999 Reunion Tour</h1>
			<div className='mt-4'>
				<h2 className='text-xl font-bold'>How to contribute</h2>
				<p>
					1. Store content and other data in <code className='bg-gray-200 p-1 rounded-sm'>data</code> folder.
				</p>
				<p>
					2. Store reusable components in <code className='bg-gray-200 p-1'>components</code> folder.
				</p>
				<p>
					3. Store pages in <code className='bg-gray-200 p-1'>pages</code> folder.
				</p>
				<p>
					4. Add custom styles in <code className='bg-gray-200 p-1'>tailwind.config.css</code> file.
				</p>
				<p>
					5. Add shared ui in <code className='bg-gray-200 p-1'>ui</code> folder.
				</p>
				<p>
					6. Add images and other assets in <code className='bg-gray-200 p-1'>assets</code> folder.
				</p>
			</div>
			<Link to='/play'>
				<Button className='text-white'>Go to playground</Button>
			</Link>
		</div>
	);
}
