import styled from "styled-components"

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 230px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 30px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`

export default Input