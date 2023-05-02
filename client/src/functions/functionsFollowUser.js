const followUser = async (nickname) => {
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

    const status = await response.status();
    return status;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default followUser;
