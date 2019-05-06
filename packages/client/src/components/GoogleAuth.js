import React, { useEffect } from 'react';

const { REACT_APP_CLIENT_ID } = process.env;

export const GoogleAuth = () => {
    useEffect(() => {
        function loadLibraries () {
            window.gapi.load('client:auth2', () => {
                window.gapi.auth2.init({
                    clientId: REACT_APP_CLIENT_ID,
                    scope: 'email'
                }).then(() => {
                    const auth = window.gapi.auth2.getAuthInstance();
                    console.log(auth);
                });
            });
        }
        loadLibraries();
    }, [])
    return (
        <h1>Google Auth</h1>
    )
};