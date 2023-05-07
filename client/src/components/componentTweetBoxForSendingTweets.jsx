import React, { useState, useContext } from "react";
import "../css/TweetBox.css";
import { Avatar, Button } from "@mui/material";
import sendTweet from "../functions/functionsSendTweet";
import { FeedContext } from "../context/FeedContext";
import { isUserLoggedInContext } from "../context/UserLoggedInContext.jsx";

function TweetBoxForSendingTweets() {
  const [allTweets, setAllTweets, reload, setReload] = useContext(FeedContext);
  const [userLoggedIn, setUserLoggedIn, userNickname] = useContext(
    isUserLoggedInContext
  );

  const [tweetMessage, setTweetMessage] = useState("");

  const handleSendTweet = async (e) => {
    e.preventDefault();
    const status = await sendTweet(tweetMessage);
    if (status) {
      setReload(!reload);
      setTweetMessage("");
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={`http://localhost:3002/images/${userNickname}.png`} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <Button
          onClick={handleSendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBoxForSendingTweets;
