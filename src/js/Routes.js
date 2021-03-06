import SignInModule from './pages/SignInModule';
import * as handlers from './pages/RouterHandlers';
import MoviesList from './pages/MoviesList';
import MovieDetails from './pages/MovieDetails';

import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Loading from './pages/Loading';

export const getAppRoutes = (store) => {
    return {
        path: `/`,
        indexRoute: {component: SignInModule},
        onEnter: handlers.onEnterSignIn,
        childRoutes: [
            {
                path: '/movies_list',
                component: MoviesList,
                onEnter: handlers.onEnterMoviesList
            },{
                path: '/movie_details',
                component: MovieDetails,
                onEnter: handlers.onEnterMovieDetails,
                childRoutes:[
                    {
                        path: ':id',
                        component: MovieDetails
                    }
                ]
            }
        ]
    };
};