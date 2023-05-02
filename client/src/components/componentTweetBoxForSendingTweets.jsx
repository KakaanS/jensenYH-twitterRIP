import React, { useState } from "react";
import "../css/TweetBox.css";
import { Avatar, Button } from "@mui/material";
import sendTweet from "../functions/functionsSendTweet";

function TweetBoxForSendingTweets() {
  const [tweetMessage, setTweetMessage] = useState("");

  const handleSendTweet = (e) => {
    e.preventDefault();
    sendTweet(tweetMessage);
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-boy-user-avatar-vector-icon-free-png-image_4827808.jpg" />
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
