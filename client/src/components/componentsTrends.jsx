import { useContext } from "react";
import { TrendsContext } from "../context/TrendsContext.jsx";

function Trends() {
  const { hashtags } = useContext(TrendsContext);

  const myHashtags = {
    hashtags: [hashtags],
    numberOfTimes: 5,
  };
  /*  <div>
      <h1>Trending shit</h1>
      {hashtags.map((hashtag, index) => (
        <div key={index}>{hashtag}</div>
      ))}
    </div> */
  /* 
    <div>
      {Object.entries(myHashtags).map(([key, value]) => (
        <span key={key}>
          {" "}
          {key}: {value}
        </span>
      ))}
    </div> */

  return (
    <div>
      <h1>Trending Shit</h1>
      {Object.entries(myHashtags).map(([key, value]) => {
        <span key={key}>
          {" "}
          {key}: {JSON.stringify(value)}
        </span>;
      })}
    </div>
  );
}

export default Trends;
