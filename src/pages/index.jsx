import { lazy } from 'react';

export default {
	Home: lazy(() => import('./home')),
	Playground: lazy(() => import('./playground')),
	Payment: lazy(() => import('./payment')),
};
