import React, { useState, useEffect } from "react";

function TweetFeed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3002/user/profile/${tweets}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const data = await response.json();
      setTweets(data.allTweets);
    };

    fetchTweets();
  }, [username]);

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          <p>{tweet.tweet}</p>
          <p>{tweet.nickname}</p>
          <p>{tweet.date}</p>
        </div>
      ))}
    </div>
  );
}

export default TweetFeed;
