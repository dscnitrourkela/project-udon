import { Suspense } from 'react';
import { PageLoader } from '../layout';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Pages from '../pages';

export default function App() {
	return (
		<>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route exact path='/' element={<Pages.Home />} />
					<Route path='/play' element={<Pages.Playground />} />
					<Route path='/play/gallery' element={<Pages.Gallery />} />
				</Routes>
			</Suspense>
		</>
	);
}
