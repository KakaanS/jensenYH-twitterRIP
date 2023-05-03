import React, { useState, createContext } from "react";

export const SearchContext = createContext();

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const inputText = event.target.value;
    setSearchTerm(inputText);
  };

  const searchHashtagsAndUsernames = (text) => {
    const hashtagRegex = /#\w+/g;
    const usernameRegex = /@\w+/g;

    const hashtags = text.match(hashtagRegex);
    const usernames = text.match(usernameRegex);

    return { hashtags, usernames };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { hashtags, usernames } = searchHashtagsAndUsernames(searchTerm);
    setSearchResults({ hashtags, usernames });
  };

  return (
    <SearchContext.Provider value={searchResults}>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleSearch} value={searchTerm} />
        <button type="submit">Search</button>
      </form>
    </SearchContext.Provider>
  );
}

export default SearchBar;
