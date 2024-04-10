import { lazy } from 'react';

export default {
	Home: lazy(() => import('./home')),
	Playground: lazy(() => import('./playground')),
	Gallery: lazy(() => import('./gallery')),
};
