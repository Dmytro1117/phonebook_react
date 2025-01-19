import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import Loader from '../../components/Loader/Loader';
import ModalPoster from '../../components/ModalPoster/ModalPoster';
import ModalTrailer from '../../components/ModalTrailer/ModalTrailer';
import { fetchMovieDetails } from '../../services/TmbdApi';
import { Button } from '../../pages/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true);

      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const handleToggleImage = () => {
    setShowImage(!showImage);
  };

  if (!movieInfo) {
    return null;
  }

  const { title, backdrop_path } = movieInfo || {};

  return (
    <>
      <Link to={location.state?.from ?? '/info-movie'}>
        <Button type="button">Go back</Button>
      </Link>

      {loading && <Loader />}

      {movieInfo && (
        <MovieInfo
          movieInfo={movieInfo}
          handleToggleImage={handleToggleImage}
          setShowTrailer={setShowTrailer}
          setTrailerKey={setTrailerKey}
        />
      )}

      {showImage && (
        <ModalPoster
          largeImageURL={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
          }
          tags={title}
          onClose={handleToggleImage}
        />
      )}

      {showTrailer && (
        <ModalTrailer onClose={() => setShowTrailer(false)}>
          <iframe
            width="900"
            height="600"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ModalTrailer>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
