import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`http://localhost:3002/search`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
        console.log("SEARCHBARDATA", data);
        setHashtags(data.allhashtags);
        setUsers(data.allUsers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm[0] === "#") {
      console.log("searching for hashtag");
      console.log("SearchTerm", searchTerm);
      console.log("hashtags", hashtags);
    } else if (searchTerm[0] === "@") {
      const userToFind = searchTerm.slice(1);

      const userFind = users.find((user) => user === userToFind);
      if (userFind) {
        navigate(`/profile/${userFind}`);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
