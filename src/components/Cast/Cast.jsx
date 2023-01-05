import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastMovie } from 'components/apiMovie.js';
import {
  CardWrapper,
  Container,
  CastName,
  CastInformation,
} from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fatchCast = async () => {
      try {
        const { cast } = await fetchCastMovie(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fatchCast();
  }, [movieId]);

  if (cast.length === 0) {
    return (
      <CastInformation>We don't have any cast for this movie</CastInformation>
    );
  }
  return (
    <Container>
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <CardWrapper key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
            <CastName>
              <b> Name:</b>
              {name}
            </CastName>
            <CastName>
              <b>Character:</b>
              {character}
            </CastName>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
