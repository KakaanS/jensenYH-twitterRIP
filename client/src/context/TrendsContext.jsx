import react, { createContext, useState, useEffect } from "react";

export const TrendsContext = createContext();

export const TrendsContextProvider = ({ children }) => {
  const [hashtags, setHashtags] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3002/trending/hashtags", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => setHashtags(data))
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [token]);

  const contextValues = {
    hashtags,
    setHashtags,
  };

  return (
    <TrendsContext.Provider value={contextValues}>
      {children}
    </TrendsContext.Provider>
  );
};
