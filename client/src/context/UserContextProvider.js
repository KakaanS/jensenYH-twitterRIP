import React, { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const signUp = (nickname, email, password) => {
    // backend ska in här så vi kan skapa en användare, Simon go get em.
  };

  return (
    <UserContext.Provider value={{ signUp }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
