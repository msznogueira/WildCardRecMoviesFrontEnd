import logo from '../../images/logo_wildcard_movies_250x100.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 20px;
`
const LogoImage = styled.img`
  margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
          <LogoImage
            src={logo}
            alt="logo" 
          ></LogoImage>
          <p><strong>Wild Card Movies Recommendations</strong></p>
        </LogoContainer>
    )
}

export default Logo;