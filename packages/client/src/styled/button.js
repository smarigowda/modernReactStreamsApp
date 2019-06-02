import styled from 'styled-components'

export const Button = styled.button`
    font-size: 1.5rem;
    background-color: white;
    color: black;
    border: black solid 1px;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
    border-radius: 3px;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;