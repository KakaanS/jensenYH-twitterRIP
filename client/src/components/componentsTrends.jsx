import { useContext } from "react";
/* import { TrendsContext } from "../context/TrendsContext.jsx";
 */
function Trends() {
  const { hashtags } = useContext(/* TrendsContext */);

  return (
    <div>
      <h1>Trending shit</h1>
      {hashtags.map((hastag, index) => (
        <div key={index}>{hastag}</div>
      ))}
    </div>
  );
}

export default Trends;
