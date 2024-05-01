import { Suspense } from 'react';
import { PageLoader } from '../layout';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Pages from '../pages';
import { AuthProvider } from '../context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
	return (
		<>
			<AuthProvider>
				<ToastContainer
					position='top-right'
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<Suspense fallback={<PageLoader />}>
					<Routes>
						<Route exact path='/' element={<Pages.Home />} />
						<Route path='/register' element={<Pages.Register />} />
						<Route path='/play' element={<Pages.Playground />} />
					</Routes>
				</Suspense>
			</AuthProvider>
		</>
	);
}
