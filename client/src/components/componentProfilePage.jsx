import React, { useState } from "react";
import "../css/Profilepage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import followUser from "../functions/functionsFollowUser";

const ProfilePage = ({ username }) => {
  const [user, setUser] = useState(null);
  const [isFollowing, _setIsFollowing] = useState(false);

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
      console.log(data);
      setUser(data);
    };

    fetchUser();
  }, [username]);

  const {
    background_image,
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

  return (
    <div className="profile-page">
      <Link to="/">Back</Link>
      <img src={background_image} alt="Background image"></img>
      <img src={profile_image} alt="Profile image"></img>
      <h2>{name}</h2>
      <button className="follow-button" onClick={() => followUser(nickname)}>
        {isFollowing ? "Following" : "Follow"}
      </button>
      <h3>@{nickname}</h3>
      <h4>Tweets:{tweets.length}</h4>
      <p>About:{about}</p>
      <p>Employment:{employment}</p>
      <p>Hometown:{hometown}</p>
      <p>Webbpage:{webbpage}</p>
      <p>Joined: {date}</p>
      <p>{followers.length}Followers</p>
      <p>{following.length}Following</p>
    </div>
  );
};

export default ProfilePage;
