import React, { useState, useEffect } from 'react';
import { Button } from '../styled/button';

const { REACT_APP_CLIENT_ID } = process.env;

export const GoogleAuth = () => {
    const [isSignedIn, setIsSignedIn] = useState(null);
    const [auth, setAuth] = useState({});
    console.log(`current state of isSignedIn = ${isSignedIn} [GoogleAuth]`)
    useEffect(() => {
        function loadLibraries() {
            console.log('loadLibraries called... [useEffect]');
            window.gapi.load('client:auth2', async () => {
                console.log('initiating gapi client... [useEffect]');
                window.gapi.client.init({
                    clientId: REACT_APP_CLIENT_ID,
                    scope: 'email'
                });
                console.log('initiated... [useEffect]');
                const auth = window.gapi.auth2.getAuthInstance();
                console.log('setting auth... [useEffect]');
                setAuth(auth); // renders the component immediately after this call
                auth.isSignedIn.listen(() => {
                    console.log(`setting isSignedIn to ${auth.isSignedIn.get()} [listen inside useEffect]`)
                    setIsSignedIn(auth.isSignedIn.get()); // renders the component immediately after this call
                });
            });
        }
        loadLibraries();
    }, []);
    const onClickHandler = async () => {
        console.log('button clicked....');
        if (auth.isSignedIn.get()) {
            await auth.signOut();
        } else {
            await auth.signIn();
        }
    }
    const renderLoginButton = () => {
        console.log('rendering login Button [renderLoginButton]');
        let button;
        if(isSignedIn === null) {
            button = null;
            return button; // do not render anything if signed in state is unknown (null)
        } 
        button = (
            <Button
                onClick={onClickHandler}>
                {isSignedIn ? 'Sign Out' : 'Sign In With Google'}
            </Button>
        )
        return button;
    }
    return renderLoginButton();
};