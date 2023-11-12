import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, MovieLink, MovieTitle, Img, Text } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>
            <Img
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={film.original_title}
            />
            <MovieTitle>
              <Text>{film.original_title}</Text>
            </MovieTitle>
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default MoviesList;
