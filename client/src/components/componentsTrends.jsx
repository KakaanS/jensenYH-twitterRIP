import React, { useContext } from "react";
import { TrendsContext } from "../context/TrendsContext.jsx";
import "../css/Trends.css";



function Trends() {
  const [hashtags] = useContext(TrendsContext);

  if (!hashtags) {
    return <div>Loading...</div>;
  }

  return (
    <div className="trends">
      <h2 className="trends-div">What's happening</h2>
      {hashtags.map((hashtag) => (
        <div key={hashtag._id} className="hashtag">
          <h3>{hashtag.hashtag}</h3>
        </div>
        
        
      ))}
    </div>
    
    
  );
}



export default Trends;
