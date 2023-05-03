import React, { useState } from "react";
import "../css/Feed.css";
import TweetBoxForSendingTweets from "./componentTweetBoxForSendingTweets";
import Feed from "./componentFeed";
import { FeedProvider } from "../context/FeedContext";

function HomeMiddle() {
  return (
    <FeedProvider>
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        <TweetBoxForSendingTweets />
        <Feed />
      </div>
    </FeedProvider>
  );
}
export default HomeMiddle;
