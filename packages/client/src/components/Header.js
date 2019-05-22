import React from 'react';
import { Link } from 'react-router-dom';

import { GoogleAuth } from './GoogleAuth';
import { HeaderContainer } from '../styled-components/headerContainer';

export const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">Streamer</Link>
            <Link to="/">All Streams</Link>
            <GoogleAuth />
        </HeaderContainer>
    )
}