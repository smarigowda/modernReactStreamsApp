import styled from 'styled-components'

export const Button = styled.button`
    font-size: 1.5rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;