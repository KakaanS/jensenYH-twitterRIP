import React, { useState } from "react";
import "../css/ProfilepageGoran.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import followUser from "../functions/functionsFollowUser";

import TweetFeedProfile from "./componentProfileTweetFeed";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log("token", token);
      const response = await fetch(
        `http://localhost:3002/user/profile/${username}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const data = await response.json();
      console.log("data", data);
      setUser(data.userToSend);
      setIsFollowing(data.isFollowing);
    };

    fetchUser();
  }, [username]);

  const followButton = () => {
    const response = followUser(username);
    setIsFollowing(response);
  };

  const {
    profile_image,
    name,
    tweets,
    nickname,
    about,
    employment,
    hometown,
    webbpage,
    date,
    followers,
    following,
  } = user || {};

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-middle-div">
      <div className="profile-page-div">

        <div className="profileImage-div">
          <img className="profileImg" src= {profile_image} alt="Profile image"></img>  
          <h2 className="profile-name">{name}</h2>
          <button className="follow-button" onClick={followButton}>
          {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
        
        
        

        <div className="info-div">

          <div className="nickname-tweets-div">

           <h3 className="h3">@{nickname}</h3>
           <h4 className="h3">Tweets:{tweets.length}</h4>
      
          </div> 
          <div className="paragrafs">
           <p>About:{about}</p>
           <p>Employment:{employment}</p>
           <p>Hometown:{hometown}</p>
           <p>Webbpage:{webbpage}</p>
           <p>Joined: {date}</p>
           <p>{followers.length}Followers</p>
           <p>{following.length}Following</p>
          </div>

        </div>
        
        </div>
      <TweetFeedProfile username={username} />
    </div>
  );
};

export default ProfilePage;
