import styled from 'styled-components'

export const Button = styled.button`
    font-size: 1.2rem;
    background-color: red;
    color: white;
    border: none;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: orange;
    }
`;