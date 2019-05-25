import React from 'react';

import GoogleAuth from './GoogleAuth';
import { HeaderContainer } from '../styled/headerContainer';
import Link from '../styled/Link';

export const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">Streamer</Link>
            <Link to="/">All Streams</Link>
            <GoogleAuth />
        </HeaderContainer>
    )
}