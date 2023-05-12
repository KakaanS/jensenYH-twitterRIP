const theConnector = import.meta.env.VITE_API_URL;
// `${theConnector}`

async function login(email, password) {
  return await fetch(`${theConnector}/user/login`, {
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
