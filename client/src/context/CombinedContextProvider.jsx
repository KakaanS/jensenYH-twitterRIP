import React from "react";
import { FeedProvider } from "./FeedContext";
import { TrendsProvider } from "./TrendsContext";

export const CombinedContextProvider = ({ children }) => {
  return (
    <FeedProvider>
      <TrendsProvider>{children}</TrendsProvider>
    </FeedProvider>
  );
};

export default CombinedContextProvider;
