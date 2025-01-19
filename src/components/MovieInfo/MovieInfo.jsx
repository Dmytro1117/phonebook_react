import { useParams, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchTrailer } from '../../services/TmbdApi';
import Loader from '../../components/Loader/Loader';
import {
  Container,
  List,
  ListInfo,
  LinkInfo,
  Description,
  Title,
  FilmTitle,
  СompaniesListImg,
  СoverImg,
} from '../../components/MovieInfo/MovieInfo.styled';

const MovieInfo = ({ movieInfo, handleToggleImage, setTrailerKey, setShowTrailer }) => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const companiesList = movieInfo.production_companies
    ?.slice(0, 3)
    .map(
      ({ id, logo_path, name }) =>
        logo_path && (
          <li key={id}>
            {logo_path && (
              <СompaniesListImg src={`https://image.tmdb.org/t/p/w500${logo_path}`} alt={name} />
            )}
          </li>
        ),
    );

  const handleTrailerPlay = async () => {
    setLoading(true);
    try {
      const trailerData = await fetchTrailer(movieId);
      const trailer = trailerData.results.find(
        video => video.type === 'Trailer' && video.site === 'YouTube',
      );
      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailer(true);
      } else {
        toast.error('Trailer not found!');
        return;
      }
    } catch (error) {
      console.error('Failed to load trailer:', error);
    } finally {
      setLoading(false);
    }
  };

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
    vote_average,
    homepage,
    runtime,
  } = movieInfo;

  return (
    <Container>
      <ToastContainer autoClose={2000} theme="dark" />
      {loading && <Loader />}
      <СoverImg
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
        }
        alt={original_title}
      />
      <div>
        <FilmTitle>
          {title} ({release_date.slice(0, 4)})
        </FilmTitle>

        <Title>Overview:</Title>
        <Description>
          {overview} <span>Popularity: {popularity}</span>
        </Description>

        <Title>User score:</Title>
        <Description>{(vote_average * 10).toFixed(0)}%</Description>

        <Title>Homepage:</Title>
        {homepage ? (
          <Link to={homepage} target="_blank">
            <Description>{homepage}</Description>
          </Link>
        ) : (
          <Description>Sorry not found homepage site.</Description>
        )}

        <Title>Duration:</Title>
        <Description>{runtime} minutes</Description>

        <Title>Genres:</Title>
        <List>
          <Description>
            {genres.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                {index < genres.length - 1 && ', '}
              </span>
            ))}
          </Description>
        </List>

        <Title>Release Date:</Title>
        <Description>{release_date}</Description>

        {companiesList[0] !== null && companiesList.length > 0 && (
          <>
            <Title>Production companies:</Title>
            <List>{companiesList}</List>
          </>
        )}

        <Title>Additional information:</Title>
        <ListInfo>
          <li>
            <LinkInfo to="cast" state={{ from: location?.state?.from }}>
              Cast
            </LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews" state={{ from: location?.state?.from }}>
              Reviews
            </LinkInfo>
          </li>
          <li>
            <LinkInfo onClick={handleToggleImage} state={{ from: location?.state?.from }}>
              Poster
            </LinkInfo>
          </li>
          <li>
            <LinkInfo onClick={handleTrailerPlay} state={{ from: location?.state?.from }}>
              Trailer
            </LinkInfo>
          </li>
        </ListInfo>
      </div>
    </Container>
  );
};

export default MovieInfo;
