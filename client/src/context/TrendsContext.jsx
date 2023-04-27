import react, { createContext, useState, useEffect } from "react";

export const TrendsContext = createContext();

export const TrendsContextProvider = ({ children }) => {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    // backend fetch
    fetch("http://localhost:3002/trending/hashtags")
      .then((response) => response.json())
      .then((data) => setHashtags(data))
      .catch((error) => console.log(error));
  }, []);
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
