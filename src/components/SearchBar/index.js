import styled from "styled-components"
import { useEffect, useState } from "react"
import Input from "../Input"
import MovieCard from "../MovieCard"
import { getSuggestions } from "../../services/movies"
import debounce from 'lodash.debounce';
import StyledLink from "../StyledLink"

const SearchBarContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const SearchBarTitle = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SearchBarSubtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const SearchBarResults = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
`

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };
    
    async function fetchSuggestions(searchTerm) {
        const suggestionsAPI = await getSuggestions(searchTerm)
        setSuggestions(suggestionsAPI)
    }

    useEffect(() => {
        if (searchTerm.length < 3) return
        fetchSuggestions(searchTerm)        
    }, [searchTerm])

    return (
        <SearchBarContainer>
            <SearchBarTitle>Know where to start?</SearchBarTitle>
            <SearchBarSubtitle>Find your movie and its recommendations</SearchBarSubtitle>
            <Input
                placeholder="Search for a movie"
                onChange={handleInputChange}
            />
            <SearchBarResults>
                {suggestions.map( movie => (
                    <StyledLink to={`/movie/${movie.id}`}>
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        description={movie.description}
                    />            
                    </StyledLink>
                ))}
            </SearchBarResults>
        </SearchBarContainer>
    )    
}

export default SearchBar