import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Layout } from 'components/Layout/Layout';
import { NotFound } from 'pages/NotFound/NotFound';

const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
