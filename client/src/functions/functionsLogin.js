async function login(email, password) {
  return await fetch("http://localhost:3002/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Login failed");
      }
      return response.json();
    })
    .then((data) => {
      return data.token;
    });
}

export { login };
