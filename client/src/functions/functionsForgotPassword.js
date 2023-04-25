const forgotPassword = async (email, nickname, newPassword) => {
  try {
    const response = await fetch("http://localhost:3002/user/forgotpassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, nickname, newPassword }),
    });

    const data = await response.json();
    if (data.message === "Password updated successfully") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { forgotPassword };
