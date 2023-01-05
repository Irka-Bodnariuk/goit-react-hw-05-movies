import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchMovie } from 'components/apiMovie.js';
import toast, { Toaster } from 'react-hot-toast';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        if (!movieName) {
          return;
        }

        const { results } = await fetchSearchMovie(movieName);
        if (results.length === 0) {
          toast.error('Oh, unfortunately, there is no such thing. 😿');
        }
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearch();
  }, [movieName]);

  const onSearchMovie = value => {
    if (value === '') {
      toast.error('You have not entered anything 🙀!');
      return;
    }
    setSearchParams(value !== '' ? { query: value.trim() } : {});
  };

  return (
    <main>
      <SearchMovie onSubmit={onSearchMovie} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      <Toaster />
    </main>
  );
};
