import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movies';

function Movie() {
  const { movieid } = useParams();
  const [movie, setMovie] = useState([]);

  async function fetchMovieDetails(movieId) {
    const movie = await getMovieDetails(movieId);
    setMovie(movie);
  }

  useEffect(() => {
    fetchMovieDetails(movieid)
  }, []);

  return (
    <MovieCard 
        key={movie.id}
        title={movie.title}
        description={movie.overview}
    />
  );
}

export default Movie;
