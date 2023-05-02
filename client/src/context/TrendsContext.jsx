import React, { useState, useEffect, createContext } from "react";

export const TrendsContext = createContext();

export const TrendsProvider = (props) => {
  const [hashtags, setHashtags] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3002/trending/hashtags", {
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
        console.log("hashtags", hashtags);
        setHashtags(hashtags);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [token]);

  console.log("hashtags", hashtags);

  return (
    <TrendsContext.Provider value={[hashtags, setHashtags]}>
      {props.children}
    </TrendsContext.Provider>
  );
};
