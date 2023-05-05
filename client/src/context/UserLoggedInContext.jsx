import React, { useState, useEffect, createContext } from "react";

export const isUserLoggedInContext = createContext();

export const UserLoggedInProvider = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3002/user/JWT", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log("response", res);
        return res.json();
      })
      .then((data) => {
        setUserNickname(data.decoded.nickname);
        setUserLoggedIn(true);
      })
      .catch((err) => {
        setUserLoggedIn(false);
      });
  }, [token]);

  return (
    <isUserLoggedInContext.Provider
      value={[userLoggedIn, setUserLoggedIn, userNickname]}
    >
      {props.children}
    </isUserLoggedInContext.Provider>
  );
};
