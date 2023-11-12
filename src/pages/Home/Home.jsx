import React, { useEffect, useState } from 'react';
import MoviesList from '../../pages/MoviesList/MoviesList';
import { fetchTrending } from '../../services/TmbdApi';
import Loader from '../../components/Loader/Loader';
import { Title } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
