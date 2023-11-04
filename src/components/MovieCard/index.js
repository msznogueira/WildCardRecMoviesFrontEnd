import styled from 'styled-components';


const Card = styled.div`
  width: 300px;
  background-color: red;  // Just to make it stand out
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: black;  // Setting text color to black
`


function MovieCard({title, description}) {
    return (
        <Card>
            {/* <img src={params.img} alt={params.title} /> */}
            <h3>{title}</h3>
            <p>{description}</p>
        </Card>
    )
    
}

export default MovieCard;