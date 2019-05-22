import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
        padding: 1rem;
        justify-self: center;
        align-self: center;
        text-decoration: none;
        font-size: 1.6rem;
        text-transform: uppercase;
        color: black;
        width: 80%;
        text-align: center;
        &:hover {
            background-color: palevioletred;
            color: white;
        }
`