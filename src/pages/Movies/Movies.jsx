import { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage';
import MoviesList from '../../pages/MoviesList/MoviesList';
import Form from '../../components/Form/Form';
import { fetchSearchByKeyword } from '../../services/TmbdApi';
import { Main } from './Movie.styled';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const searchMovies = queryMovie => {
    setLoading(true);

    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && <NotFoundPage />}
      {searchFilms && <MoviesList films={searchFilms} />}
    </Main>
  );
};

export default Movies;
