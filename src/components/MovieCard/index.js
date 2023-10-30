import styled from 'styled-components';


const Card = styled.div`
  width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

function MovieCard(params) {
    return (
        <Card>
            {/* <img src={params.img} alt={params.title} /> */}
            <h3>{params.title}</h3>
            <p>{params.description}</p>
        </Card>
    )
    
}

export default MovieCard;