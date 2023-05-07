import React, { useContext, createContext } from "react";
import "../css/Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { FeedContext } from "../context/FeedContext.jsx";

function Feed() {
  const [allTweets] = useContext(FeedContext);

  if (allTweets === undefined || allTweets.length === 0) {
    return <div>loading tweets...</div>;
  }

  return (
    <>
      {allTweets.map((tweet) => (
        <div key={tweet._id} className="post">
          <div className="post__avatar">
            <Avatar
              src={`http://localhost:3002/images/${tweet.nickname}.png`}
            />
          </div>

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
    </>
  );
}

export default Feed;
