import React, { useState, useEffect, createContext } from "react";

const isUserLoggedInContext = createContext();

export const UserLoggedInProvider = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3002/users/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserLoggedIn(true);
      })
      .catch((err) => {
        setUserLoggedIn(false);
      });
  }, [token]);

  return (
    <isUserLoggedInContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      {props.children}
    </isUserLoggedInContext.Provider>
  );
};

export default isUserLoggedInContext;
