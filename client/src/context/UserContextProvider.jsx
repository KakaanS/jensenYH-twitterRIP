import React, { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const signUp = (nickname, email, password) => {
    console.log("signUp");
    console.log(nickname, email, password);
  };

  return (
    <UserContext.Provider value={{ signUp }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
