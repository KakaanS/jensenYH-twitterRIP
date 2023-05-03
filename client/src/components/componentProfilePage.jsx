import React, { useState } from "react";
import "../css/Profilepage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import followUser from "../functions/functionsFollowUser";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [logedInUser, setLogedInUser] = useState(null);

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
      setLogedInUser(data.logedInUser);
    };

    fetchUser();
  }, [username]);

  const followButton = () => {
    console.log("FOLLOWBUTTON");
    console.log("logedInUser", logedInUser);
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
    <div className="profile-page">
      <img src={profile_image} alt="Profile image"></img>
      <h2>{name}</h2>
      <button className="follow-button" onClick={followButton}>
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
