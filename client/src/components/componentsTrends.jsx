import React, { useContext } from "react";
import { TrendsContext } from "../context/TrendsContext.jsx";

function Trends() {
  const [hashtags] = useContext(TrendsContext);

  if (!hashtags) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Trending Shit</h1>
      {hashtags.map((hashtag) => (
        <div key={hashtag._id} className="hashtag">
          <h3>{hashtag.hashtag}</h3>
        </div>
      ))}
    </div>
  );
}

export default Trends;
