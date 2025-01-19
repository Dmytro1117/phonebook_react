import { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MoviesList from '../../components/MoviesList/MoviesList';
import Form from '../../components/Form/Form';
import { fetchSearchByKeyword } from '../../services/TmbdApi';
import { Main } from './SearchMovie.styled';

const SearchMovie = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMovies, setNoMovies] = useState(false);

  const searchMovies = queryMovie => {
    setLoading(true);

    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMovies(searchResults.length === 0);
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
      {noMovies && <NotFoundPage />}
      {searchFilms && <MoviesList films={searchFilms} />}
    </Main>
  );
};

export default SearchMovie;
