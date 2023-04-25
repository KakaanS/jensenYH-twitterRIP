const forgotPassword = async (email, nickname) => {
  try {
    const response = await fetch("http://localhost:3002/user/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, nickname }),
    });

    const data = await response.json();
    if (data.password) {
      return data.password;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default forgotPassword;
