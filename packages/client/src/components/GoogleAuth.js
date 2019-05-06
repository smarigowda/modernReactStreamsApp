import React, { useEffect } from 'react';

const { REACT_APP_CLIENT_ID } = process.env;
console.log(REACT_APP_CLIENT_ID);
console.log(process.env);

export const GoogleAuth = () => {
    useEffect(() => {
        function loadLibraries () {
            window.gapi.load('client:auth2', () => {
                console.log(REACT_APP_CLIENT_ID);
                window.gapi.client.init({
                    clientId: REACT_APP_CLIENT_ID,
                    scope: 'email'
                });
            });
            console.log(window.gapi);
        }
        loadLibraries();
    }, [])
    return (
        <h1>Google Auth</h1>
    )
};