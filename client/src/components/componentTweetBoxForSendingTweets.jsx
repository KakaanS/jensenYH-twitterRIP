import React, { useState, useContext } from "react";
import "../css/TweetBox.css";
import { Avatar, Button } from "@mui/material";
import sendTweet from "../functions/functionsSendTweet";
import { FeedContext } from "../context/FeedContext";
import { TrendsContext } from "../context/TrendsContext";

function TweetBoxForSendingTweets() {
  const [tweetsState, setTweetsState, reload, setReload] =
    useContext(FeedContext);

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
