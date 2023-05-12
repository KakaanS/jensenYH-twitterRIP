import React, { useState, useEffect, createContext, useContext } from "react";
import { FeedContext } from "./FeedContext.jsx";

export const TrendsContext = createContext();

const theConnector = import.meta.env.VITE_API_URL;
// `${theConnector}`

export const TrendsProvider = (props) => {
  const [hashtags, setHashtags] = useState([]);
  const token = localStorage.getItem("token");
  const [tweetState] = useContext(FeedContext);

  useEffect(() => {
    fetch(`${theConnector}/trending/hashtags`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const JSON = { ...data };
        const hashtags = JSON.topHashtags;
        setHashtags(hashtags);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [token, tweetState]);

  return (
    <TrendsContext.Provider value={[hashtags, setHashtags]}>
      {props.children}
    </TrendsContext.Provider>
  );
};

export default TrendsContext;
