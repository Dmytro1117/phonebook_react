import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from '../../services/TmbdApi';
import Loader from '../../components/Loader/Loader';
import { List, Text, ListItem } from './Cast.styled';
import { animateScroll } from 'react-scroll';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, [movieId]);

  if (actors) {
    animateScroll.scrollMore(500);
  }

  return (
    <div>
      {loading && <Loader />}

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
    </div>
  );
};
export default Cast;
