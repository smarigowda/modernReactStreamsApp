import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './css/Header.module.scss';

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
                // console.log(auth);
                auth.isSignedIn.listen(() => {
                    // console.log('inside listen...');
                    // console.log(auth.isSignedIn.get());
                    setIsSignedIn(auth.isSignedIn.get());
                });
                try {
                    // await auth.signIn();
                } catch(e) {
                    console.log('user closed popup');
                }
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
        <button
            onClick={onClickHandler}>
            {isSignedIn ? 'SIGN-OUT' : 'SIGN-IN' }
        </button>
    )
};