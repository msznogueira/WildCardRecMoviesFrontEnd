import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

function Movie() {
  const [movie, setMovie] = useState({});

  return (
    <MovieCard 
        title='Test'
        description='Description'
    />
  );
}

export default Movie;
