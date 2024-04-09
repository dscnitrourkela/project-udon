import { Suspense } from 'react';
import { PageLoader } from '../layout';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Pages from '../pages';
import { AuthProvider } from '../context/AuthContext';

export default function App() {
	return (
		<>
			<AuthProvider>
				<Suspense fallback={<PageLoader />}>
					<Routes>
						<Route exact path='/' element={<Pages.Home />} />
						<Route path='/play' element={<Pages.Playground />} />
					</Routes>
				</Suspense>
			</AuthProvider>
		</>
	);
}
