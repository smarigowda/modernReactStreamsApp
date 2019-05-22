import React from 'react';

import { GoogleAuth } from './GoogleAuth';
import { HeaderContainer } from '../styled-components/headerContainer';
import Link from '../styled-components/styledLink';

export const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">Streamer</Link>
            <Link to="/">All Streams</Link>
            <GoogleAuth />
        </HeaderContainer>
    )
}