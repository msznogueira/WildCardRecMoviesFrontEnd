import styled from "styled-components";

const MovieCreditContainer = styled.li`
    display: flex;
    margin-right: 20px;
    color: #333;
`

const Name = styled.h3`
  margin-right: 10px; // Adds space between the name and the character
  /* Add additional styling here */
`;

const Character = styled.p`
  /* Add additional styling here */
  opacity: 0.7; // Example to slightly fade the character text, making the name stand out
`;

function MovieCredit({ name, character }) {
    return (
        <MovieCreditContainer>
            <Name>{name}</Name>
            <Character>{character}</Character>
        </MovieCreditContainer>
    )
}

export default MovieCredit;