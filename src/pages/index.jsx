import { lazy } from 'react';

export default {
	Home: lazy(() => import('./home')),
	Playground: lazy(() => import('./playground')),
	Register: lazy(() => import('./register')),
	Payment: lazy(() => import('./payment')),
};
