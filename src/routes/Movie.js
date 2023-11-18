import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits } from '../services/movies';
import MovieCredit from '../components/MovieCredit';

const MovieCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

function Movie() {
  const { movieid } = useParams();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  async function fetchMovieDetails(movieId) {
    const movie = await getMovieDetails(movieId);
    setMovie(movie);
  }

  async function fetchMovieCredits(movieId) {
    const movieCredits = await getMovieCredits(movieId);
    setCast(movieCredits.cast);
    setCrew(movieCredits.crew);
  }

  useEffect(() => {
    fetchMovieDetails(movieid)
    fetchMovieCredits(movieid)
  }, []);

  return (
    <div>
      <MovieCard
        key={movie.id}
        title={movie.title}
        description={movie.overview}
      />
      <MovieCast>
      {cast.slice(0, 3).map((credit) => (
        <MovieCredit
          key={credit.id}
          name={credit.name}
          character={credit.character}
        />
      ))}
      {crew.filter(member => member.job == "Director").map((credit) => (
        <MovieCredit
          key={credit.id}
          name={credit.name}
          character={credit.job}
        />
      ))}
      </MovieCast>
    </div>
  )
}

export default Movie;
