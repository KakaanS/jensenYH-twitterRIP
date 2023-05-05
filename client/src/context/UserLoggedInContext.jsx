import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const isUserLoggedInContext = createContext();

export const UserLoggedInProvider = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3002/user/JWT", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserNickname(data.decoded.nickname);
      })
      .catch((err) => {
        setUserLoggedIn(false);
      });
  }, [token]);

  useEffect(() => {
    if (userNickname !== "") {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
      navigate("/");
    }
  }, [userNickname]);

  return (
    <isUserLoggedInContext.Provider
      value={[userLoggedIn, setUserLoggedIn, userNickname]}
    >
      {props.children}
    </isUserLoggedInContext.Provider>
  );
};
