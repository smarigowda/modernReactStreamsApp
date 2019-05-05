import React, { useEffect } from 'react';

export const GoogleAuth = () => {
    useEffect(() => {
        console.log(window.gapi);
        async function loadLibraries () {
            console.log('waiting for 10 sec...');
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 10000);
            });
            console.log('loading libraries...');
            await window.gapi.load('client:auth2');
        }
        loadLibraries();
    }, [])
    return (
        <h1>Google Auth</h1>
    )
};