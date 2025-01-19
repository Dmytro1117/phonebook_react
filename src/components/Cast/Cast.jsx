import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { animateScroll } from 'react-scroll';

import { fetchActors } from '../../services/TmbdApi';
import Loader from '../../components/Loader/Loader';
import { List, Text, ListItem, Title, NotCast } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  const castRef = useRef(null);

  useEffect(() => {
    const onActorsOfMovie = () => {
      setLoading(true);

      fetchActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    onActorsOfMovie();

    if (castRef.current) {
      animateScroll.scrollTo(castRef.current.offsetTop, {
        duration: 1500,
        smooth: 'easeInOutQuad',
      });
    }
  }, [movieId]);

  return (
    <div ref={castRef}>
      {loading && <Loader />}
      <Title>Cast</Title>
      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <ListItem key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />

            <Text>
              <span> Actor:</span> {name}
            </Text>
            <Text>
              <span>Character:</span> {character}
            </Text>
          </ListItem>
        ))}
      </List>
      {actors.length === 0 && <NotCast>We don't have cast for this movie</NotCast>}
    </div>
  );
};
export default Cast;
