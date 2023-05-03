import React, { useState, useEffect, createContext } from "react";

export const FeedContext = createContext();

export const FeedProvider = (props) => {
  const [tweetsState, setTweetsState] = useState({
    allTweets: [],
    loading: true,
  });
  const [reload, setReload] = useState(true);

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
        setTweetsState({ allTweets: data.allTweets, loading: false });
      })
      .catch((err) => {
        setTweetsState({ allTweets: [], loading: false });
      });
  }, [token, reload]);

  return (
    <FeedContext.Provider
      value={[tweetsState, setTweetsState, reload, setReload]}
    >
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedContext;
