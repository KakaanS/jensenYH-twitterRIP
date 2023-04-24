function login(email, password) {
  return fetch("http://localhost:3002/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error("Login failed");
    }
    return response.json();
  });
}

function getJWT(token) {
  return fetch("http://localhost:3002/api/JWT", {
    method: "POST",
    headers: { Authorization: "Bearer ${token}" },
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error("JWT failed");
    }
    return response.json();
  });
}

export { login, getJWT };
