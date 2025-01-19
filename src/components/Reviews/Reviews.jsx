import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { animateScroll } from 'react-scroll';
import { fetchReviews } from '../../services/TmbdApi';
import Loader from '../../components/Loader/Loader';
import { List, ListItem, ReviewsDescr, NotReviews, Title } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const reviewsRef = useRef(null);

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
    if (reviewsRef.current) {
      animateScroll.scrollTo(reviewsRef.current.offsetTop, {
        duration: 1500,
        smooth: 'easeInOutQuad',
      });
    }
  }, [movieId]);

  return (
    <div ref={reviewsRef}>
      <Title>Reviews</Title>
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
    </div>
  );
};

export default Reviews;
