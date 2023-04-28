import { useContext } from "react";
import {
  TrendsContext,
  TrendsContextProvider,
} from "../context/TrendsContext.jsx";

function Trends() {
  const { hashtags } = useContext(TrendsContext);

  return (
    <div>
      <h1>Trending shit</h1>
      {hashtags.map((hashtag, index) => (
        <div key={index}>{hashtag}</div>
      ))}
    </div>
  );
}

export default Trends;
