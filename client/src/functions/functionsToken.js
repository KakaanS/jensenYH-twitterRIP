async function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  try {
    const response = await fetch("http://localhost:3002/user/JWT", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      console.log("response unauthorized");
      throw new Error("Unauthorized");
    }
    return true;
  } catch (error) {
    return false;
  }
}

export { checkAuth };
