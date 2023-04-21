import React from "react";
import"../css/Feed.css";
import TweetBox from "./Tweetbox";
import Post from "./Post"



function Feed  ()  {
  return (
    <div className="feed">
      
      {/*Header*/ }
      <div className="feed__header">
        
      </div>

       {/*TweetBox*/ }
       <TweetBox />

        {/*Post*/ }
        <Post />
        {/*Post*/ }
        {/*Post*/ }
        {/*Post*/ }
    </div>
  );
};
export default Feed;
