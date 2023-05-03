const followUser = async (nickname) => {
  console.log("followUser function called");
  console.log("nickname: ", nickname);
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3002/user/follow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // The body of the request is the id of the user to follow
      body: JSON.stringify({ nickname: nickname }),
    });
    console.log("response", response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default followUser;
