import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const StartingPage = lazy(() => import('../../pages/StarttngPage/StartingPage'));
const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const SearchMovie = lazy(() => import('../../pages/SearchMovie/SearchMovie'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartingPage />} />

        <Route path="home" element={<Home />} />

        <Route path="search-movie" element={<SearchMovie />} />

        <Route path="info-movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
