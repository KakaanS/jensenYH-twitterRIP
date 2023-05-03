import React, { useContext } from "react";
import "../css/Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FeedContext from "../context/FeedContext";

function Feed() {
  const [{ allTweets, loading }] = useContext(FeedContext);
  console.log("loading", loading);
  console.log("allTweets, Componentfeed", allTweets);
  if (loading) {
    return <div>loading tweets...</div>;
  }

  return (
    <>
      {allTweets.map((tweet) => (
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
    </>
  );
}

export default Feed;
