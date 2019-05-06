import React, { useEffect } from 'react';

const { REACT_APP_CLIENT_ID } = process.env;

export const GoogleAuth = () => {
    useEffect(() => {
        function loadLibraries() {
            window.gapi.load('client:auth2', async () => {
                window.gapi.client.init({
                    clientId: REACT_APP_CLIENT_ID,
                    scope: 'email'
                });
                const auth = window.gapi.auth2.getAuthInstance();
                console.log(auth);
                console.log(auth.isSignedIn.get())
                try {
                    await auth.signIn();
                } catch(e) {
                    console.log('user closed popup');
                }
                console.log(auth.isSignedIn.get())
            });
        }
        loadLibraries();
    }, [])
    return (
        <h1>Google Auth</h1>
    )
};