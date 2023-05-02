import React, { useState, useEffect, createContext } from "react";

export const FeedContext = createContext();

export const FeedProvider = (props) => {
  const [tweetsState, setTweetsState] = useState({
    allTweets: [],
    loading: true,
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("useeffect");
    fetch("http://localhost:3002/tweets/feed", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log("res", Response);
        return res.json();
      })
      .then((data) => {
        setTweetsState({ allTweets: data.allTweets, loading: false });
        console.log("allTweets", data.allTweets);
      })
      .catch((err) => {
        console.log("Error", err);
        setTweetsState({ allTweets: [], loading: false });
      });
  }, [token]);

  return (
    console.log("tweetstate", tweetsState),
    (
      <FeedContext.Provider value={[tweetsState, setTweetsState]}>
        {props.children}
      </FeedContext.Provider>
    )
  );
};

export default FeedContext;
