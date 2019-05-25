import React, { useState, useEffect } from "react";
import { Button } from "../styled/button";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const { REACT_APP_CLIENT_ID } = process.env;

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
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
        console.log(auth);
        setAuth(auth); // renders the component immediately after this call
        console.log(
          `setting isSignedIn to ${auth.isSignedIn.get()} [inside useEffect]`
        );
        onAuthChange(auth.isSignedIn.get(), auth);
        auth.isSignedIn.listen(isSignedIn => onAuthChange(isSignedIn, auth));
      });
    }
    loadLibraries();
  }, []);

  const onAuthChange = (isSignedIn, auth) => {
    console.log(`isSignedIn = ${isSignedIn} [onAuthChange]`)
    if (isSignedIn) {
      console.log(auth);
      signIn(auth.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  const onClickHandler = async () => {
    console.log("button clicked....");
    if (isSignedIn) {
      await auth.signOut();
    } else {
      await auth.signIn();
    }
  };
  const renderLoginButton = () => {
    console.log(`rendering login Button, isSignedIn = ${isSignedIn} [renderLoginButton]`);
    let button;
    let text;
    if (isSignedIn === true) {
      text = "Sign Out";
    } else if (isSignedIn === false) {
      text = "Sign In With Google";
    } else if (isSignedIn === null) {
      text = "Sign Out";
    }
    button = <Button onClick={onClickHandler}>{text}</Button>;
    return button;
  };
  return renderLoginButton();
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: userId => dispatch(signIn(userId)),
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);
