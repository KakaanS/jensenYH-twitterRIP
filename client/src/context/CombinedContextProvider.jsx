import React from "react";
import { FeedProvider } from "./FeedContext";
import { TrendsProvider } from "./TrendsContext";
import { UserLoggedInProvider } from "./UserLoggedInContext";

export const CombinedContextProvider = ({ children }) => {
  return (
    <UserLoggedInProvider>
      <FeedProvider>
        <TrendsProvider>{children}</TrendsProvider>
      </FeedProvider>
    </UserLoggedInProvider>
  );
};

export default CombinedContextProvider;
