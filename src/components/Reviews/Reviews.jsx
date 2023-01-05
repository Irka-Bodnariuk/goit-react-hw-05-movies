import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewsMovie } from 'components/apiMovie.js';
import { Container, CardWrapper, ReviewsInformation } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    const fatchCast = async () => {
      try {
        const { results } = await fetchReviewsMovie(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    fatchCast();
  }, [movieId]);
  if (reviews.length === 0) {
    return (
      <ReviewsInformation>
        We don't have any rewievs for this movie
      </ReviewsInformation>
    );
  }

  return (
    <Container>
      {reviews.map(({ id, author, content }) => {
        return (
          <CardWrapper key={id}>
            <p>
              <b>Author: {author}</b>
            </p>
            <p>{content}</p>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
