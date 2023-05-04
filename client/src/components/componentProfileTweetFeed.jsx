import React, { useState, useEffect } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "../css/Post.css";



function TweetFeedProfile({ username }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:3002/tweets/fromUser/${username}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        const data = await response.json();
        setTweets(data.tweets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTweets();
  }, [username]);

  if (!tweets) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>My Tweets</h3>
      {tweets.map((tweet) => (
        <div key={tweet._id} className="post">
          <div className="post__avatar"></div>

          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  <span>@{tweet.nickname}</span>
                </h3>
              </div>
              <div className="post__headerDiscription">
                <p>{tweet.tweet}</p>
              </div>
            </div>
            <div className="post__footer">
              <ChatBubbleOutlineIcon fontSize="small" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TweetFeedProfile;
