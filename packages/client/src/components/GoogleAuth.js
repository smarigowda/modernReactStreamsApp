import React, { useState, useEffect } from 'react';
import { Button } from '../styled-components/button';

const { REACT_APP_CLIENT_ID } = process.env;

export const GoogleAuth = () => {
    const [ isSignedIn, setIsSignedIn ] = useState(false);
    const [ auth, setAuth] = useState({});
    useEffect(() => {
        function loadLibraries() {
            window.gapi.load('client:auth2', async () => {
                window.gapi.client.init({
                    clientId: REACT_APP_CLIENT_ID,
                    scope: 'email'
                });
                const auth = window.gapi.auth2.getAuthInstance();
                setAuth(auth);
                auth.isSignedIn.listen(() => {
                    setIsSignedIn(auth.isSignedIn.get());
                });
            });
        }
        loadLibraries();
    }, []);
    const onClickHandler = async () => {
        console.log('button clicked....');
        if(auth.isSignedIn.get()) {
            await auth.signOut();
        } else {
            await auth.signIn();
        }
    }
    return (
        <Button
            onClick={onClickHandler}>
            { isSignedIn ? 'SIGN-OUT' : 'SIGN-IN' }
        </Button>
    )
};