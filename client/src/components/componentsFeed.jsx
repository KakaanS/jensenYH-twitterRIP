import React, { useState } from "react";
import "../css/Feed.css";
import TweetBoxForSendingTweets from "./componentTweetBoxForSendingTweets";
import Post from "./componentPost";

function Feed() {
  const [reload, setReload] = useState(true);
  return (
    <div className="feed">
      {/*Header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBoxForSendingTweets reload={reload} setReload={setReload} />

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
