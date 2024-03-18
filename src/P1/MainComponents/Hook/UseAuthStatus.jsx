import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";

export const UseAuthStatus = () => {

  // this hook is for the person is authenticated or not
  // here the initial value will be false, if the person is new, after that we check the person is authenticate
  // or not and also we need some time to get the information from firebase, so we need to get the another hook
  // that check the status, which we want to know that the information came or not otherwise we need to add the
  // loading effect
  const [loggedIn, setLoggedIn] = useState(false);

  // this hook is for loading effect, here the initial value will be true because we want first, we get the information
  const [checkingStatus, setChekingStatus] = useState(true);

  // now we want to use "useEffect" to ask firebase that if the person is authenticated or not
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setLoggedIn(true);
      }
      setChekingStatus(false);
    })
  }, []);

  return {loggedIn, checkingStatus};
};


