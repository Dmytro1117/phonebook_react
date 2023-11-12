import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from '../../services/TmbdApi';
import Loader from '../../components/Loader/Loader';
import { List, ListItem, ReviewsDescr, NotReviews } from './Reviews.styled';
import { animateScroll } from 'react-scroll';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsFilms = () => {
      setLoading(true);

      fetchReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchReviewsFilms();
  }, [movieId]);

  if (reviews) {
    animateScroll.scrollMore(500);
  }

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <List>
            {reviews.map(review => (
              <ListItem key={review.id}>
                <p>
                  <span>Author:</span> {review.author}
                </p>
                <ReviewsDescr>{review.content}</ReviewsDescr>
              </ListItem>
            ))}
          </List>
        </div>
      )}
      {reviews.length === 0 && <NotReviews>We don't have any reviews for this movie</NotReviews>}
    </>
  );
};

export default Reviews;
