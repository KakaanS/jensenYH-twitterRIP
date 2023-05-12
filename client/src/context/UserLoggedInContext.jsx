import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const isUserLoggedInContext = createContext();

const theConnector = import.meta.env.VITE_API_URL;
// `${theConnector}`

export const UserLoggedInProvider = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${theConnector}/user/JWT`, {
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
      navigate("/home");
    } else {
      setUserLoggedIn(false);
      navigate("/");
    }
  }, [userNickname]);

  return (
    <isUserLoggedInContext.Provider
      value={[userLoggedIn, setUserLoggedIn, userNickname, setUserNickname]}
    >
      {props.children}
    </isUserLoggedInContext.Provider>
  );
};
