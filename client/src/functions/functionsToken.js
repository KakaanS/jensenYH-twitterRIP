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
// add functionality to context "UserLoggedInContext" so that we can use it in component ProfileButton
// And it gives us the ability to click profileButton and get to "my profile".

export const isUserLoggedIn = checkAuth();
export const UserLoggedInContext = React.createContext(isUserLoggedIn);

export { checkAuth };
