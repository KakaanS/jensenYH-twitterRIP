import React, { useState, useEffect } from "react";
import Sidebar from "../components/componentsSidebar";
import Trends from "../components/componentsTrends";
import TweetBoxForSendingTweets from "../components/componentTweetBoxForSendingTweets";
import Feed from "../components/componentFeed";

//CSS
import "../css/Feed.css";
import "../css/main.css";

const Home = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="feed">
        <div className="feed__header">
          <h1>Home</h1>
        </div>
        <TweetBoxForSendingTweets />
        <Feed />
      </div>
      <Trends />
    </div>
  );
};

export default Home;
