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
  const [charCount, setCharCount] = useState(0);

  const handleSendTweet = async (e) => {
    e.preventDefault();
    const status = await sendTweet(tweetMessage);
    if (status) {
      setReload(!reload);
      setTweetMessage("");
    }
  };

  const handleCharCount = (e) => {
    const inputText = e.target.value;
    setTweetMessage(inputText.slice(0, 120));
    setCharCount(inputText.length);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={`http://localhost:3002/images/${userNickname}.png`} />
          <input
            onChange={handleCharCount}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
            maxLength={120}
            onKeyUp={(e) => setCharCount(e.target.value.length)}
          />
        </div>
        <div className="tweetBox__counter">{charCount}/120</div>

        <Button
          onClick={handleSendTweet}
          type="submit"
          className="tweetBox__tweetButton"
          disabled={charCount === 0 || charCount > 120}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBoxForSendingTweets;
