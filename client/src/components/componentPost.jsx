import React, { useState, useEffect } from 'react';
import "../css/Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Post() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch('/api/tweets') // Replace with correct API endpoint
      .then(res => res.json())
      .then(data => setTweets(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {tweets.map(tweet => (
        <div key={tweet._id} className="post">
          <div className="post__avatar">
            <Avatar src={tweet.avatar} />
          </div>

          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {tweet.displayName}{" "}
                  <span>@{tweet.username}</span>
                </h3>
              </div>
              <div className="post__headerDiscription">
                <p>{tweet.text}</p>
              </div>
            </div>
            <div className="post__footer">
              <ChatBubbleOutlineIcon fontSize="small" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
