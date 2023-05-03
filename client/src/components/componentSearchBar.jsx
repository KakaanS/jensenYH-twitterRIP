import React, { useState, createContext } from "react";

export const SearchContext = createContext();

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/user/profile/${hashtag}/${user}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </SearchContext.Provider>
  );
}

// SearchContext.Consumer - tillhandahåller sökresultatem till andra komponenter

export default SearchBar;
