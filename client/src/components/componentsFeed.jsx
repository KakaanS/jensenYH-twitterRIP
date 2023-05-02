import React from "react";
import "../css/Feed.css";
import TweetBoxForSendingTweets from "./componentTweetBoxForSendingTweets";
import Post from "./componentPost";

function Feed() {
  return (
    <div className="feed">
      {/*Header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBoxForSendingTweets />

      {/*Post*/}
      <Post />
      <Post />
      <Post />
      <Post />
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
    </div>
  );
}
export default Feed;
