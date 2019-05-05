import React, { useEffect } from 'react';

export const GoogleAuth = () => {
    useEffect(() => {
        console.log(window.gapi);
        window.gapi.load('client:auth2');
    }, [])
    return (
        <h1>Google Auth</h1>
    )
};