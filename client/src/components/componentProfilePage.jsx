import React, { useState, useContext } from "react";
import "../css/ProfilepageGoran.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import followUser from "../functions/functionsFollowUser";
import TweetFeedProfile from "./componentProfileTweetFeed";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import HttpOutlinedIcon from "@mui/icons-material/HttpOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

import { isUserLoggedInContext } from "../context/UserLoggedInContext.jsx";

const ProfilePage = () => {
  const [userLoggedIn, setUserLoggedIn, userNickname] = useContext(
    isUserLoggedInContext
  );
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3002/user/profile/${username}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const data = await response.json();
      setUser(data.userToSend);
      setIsFollowing(data.isFollowing);
    };

    fetchUser();
  }, [username]);

  const follow = async () => {
    const response = await followUser(username);
    setIsFollowing(response);
  };

  const FollowButton = () => {
    if (username === userNickname) {
      return <></>;
    } else if (isFollowing) {
      return <h3 className="profile-Button-text">Following</h3>;
    } else {
      return (
        <button className="follow-button" onClick={follow}>
          Follow
        </button>
      );
    }
  };

  const {
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
          <img
            className="profileImg"
            src={`http://localhost:3002/images/${nickname}.png`}
            alt="Profile image"
          ></img>
          <h2 className="profile-name">{name}</h2>
          <FollowButton />
        </div>

        <div className="info-div">
          <div className="nickname-tweets-div">
            <h3 className="h3">@{nickname}</h3>
            <h4 className="h3">Tweets:{tweets.length}</h4>
          </div>
          <div className="paragrafs">
            <p>
              <InfoOutlinedIcon /> {about}
            </p>
            <p>
              <WorkOutlineOutlinedIcon />
              {employment}
            </p>
            <p>
              <LocationCityOutlinedIcon />
              {hometown}
            </p>
            <p>
              <HttpOutlinedIcon />
              {webbpage}
            </p>
            <p>
              <QueryBuilderOutlinedIcon /> {date}
            </p>
            <p>
              <GroupOutlinedIcon />
              {followers.length}
            </p>
            <p>
              <GroupAddOutlinedIcon />
              {following.length}
            </p>
          </div>
        </div>
      </div>
      <TweetFeedProfile username={username} />
    </div>
  );
};

export default ProfilePage;
