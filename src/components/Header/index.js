import styled from "styled-components"
import Logo from "../Logo"
import { Link } from "react-router-dom";
const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
        </HeaderContainer>
    )    
}

export default Header;