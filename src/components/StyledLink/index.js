import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;

  &:visited {
    color: blue;
  }

  &:focus, &:active {
    outline: none;
  }
`;

export default StyledLink;