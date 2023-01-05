import { Suspense, useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieId } from 'components/apiMovie.js';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Icon,
  MovieName,
  StyleLink,
  Wrap,
  GoBackLink,
  Title,
} from './MovieDetails.staled';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useRef(useLocation());

  useEffect(() => {
    const fatchMovie = async () => {
      try {
        const result = await fetchMovieId(movieId);
        setMovie(result);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fatchMovie();
  }, [movieId]);
  if (!movie) {
    return <Title>Something went wrong, please try again!</Title>;
  }
  const {
    original_title,
    poster_path,
    overview,
    release_date,
    vote_average,
    genres,
  } = movie;

  const date = new Date(release_date);

  const genresList = genres?.map(({ name }) => name).join(', ');

  return (
    <main>
      <GoBackLink to={location.current.state?.from ?? '/'}>
        <Icon />
        Go back
      </GoBackLink>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          width="300px"
        />
        <Wrap>
          <MovieName>
            {original_title} ({date.getFullYear()})
          </MovieName>
          <p>
            <b>User score:</b> {Math.round(vote_average * 10)}%
          </p>
          <p>
            <b> Overview</b>
          </p>
          <p>{overview}</p>
          <p>
            <b> Genres</b>
          </p>
          <p>{genresList}</p>
        </Wrap>
      </Container>
      <h2>Additional information</h2>
      <StyleLink to="cast">Cast</StyleLink>
      <StyleLink to="reviews">Reviews</StyleLink>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
