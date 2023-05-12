const theConnector = import.meta.env.VITE_API_URL;
// `${theConnector}`

const followUser = async (nickname) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${theConnector}/user/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // The body of the request is the id of the user to follow
      body: JSON.stringify({ nickname: nickname }),
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default followUser;
