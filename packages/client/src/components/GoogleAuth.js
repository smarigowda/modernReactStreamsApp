import React, { useState, useEffect } from "react";
import { Button } from "../styled/button";

const { REACT_APP_CLIENT_ID } = process.env;

export const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [auth, setAuth] = useState({});
  useEffect(() => {
    function loadLibraries() {
      console.log("loadLibraries called... [useEffect]");
      window.gapi.load("client:auth2", () => {
        console.log("initiating gapi client... [useEffect]");
        window.gapi.client.init({
          clientId: REACT_APP_CLIENT_ID,
          scope: "email"
        });
        console.log("gapi client initiated... [useEffect]");
        const auth = window.gapi.auth2.getAuthInstance();
        console.log("setting auth... [useEffect]");
        setAuth(auth); // renders the component immediately after this call
        console.log(
          `setting isSignedIn to ${auth.isSignedIn.get()} [inside useEffect]`
        );
        onAuthChange(auth);
        auth.isSignedIn.listen(() => {
          console.log(
            `setting isSignedIn to ${auth.isSignedIn.get()} [inside listen of useEffect]`
          );
          onAuthChange(auth);
        });
      });
    }
    loadLibraries();
  }, []);
  const onAuthChange = auth => {
    setIsSignedIn(auth.isSignedIn.get()); // renders the component immediately after this call
  };
  const onClickHandler = async () => {
    console.log("button clicked....");
    if (auth.isSignedIn.get()) {
      await auth.signOut();
    } else {
      await auth.signIn();
    }
  };
  const renderLoginButton = () => {
    console.log("rendering login Button [renderLoginButton]");
    let button;
    let text;
    if (isSignedIn === true) {
      text = "Sign Out";
    } else if (isSignedIn === false) {
      text = "Sign In With Google";
    } else if (isSignedIn === null) {
      text = "...";
    }
    button = <Button onClick={onClickHandler}>{text}</Button>;
    return button;
  };
  return renderLoginButton();
};
