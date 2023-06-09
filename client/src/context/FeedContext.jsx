import React, { useState, useEffect, createContext, useContext } from "react";

import { isUserLoggedInContext } from "../context/UserLoggedInContext.jsx";

export const FeedContext = createContext();

export const FeedProvider = (props) => {
  const [allTweets, setAllTweets] = useState([]);
  const [reload, setReload] = useState(true);
  const [userLoggedIn] = useContext(isUserLoggedInContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3002/tweets/feed", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllTweets(data.allTweets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userLoggedIn, reload]);

  return (
    <FeedContext.Provider value={[allTweets, setAllTweets, reload, setReload]}>
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedContext;
