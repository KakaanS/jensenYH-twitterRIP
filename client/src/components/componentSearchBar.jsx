import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "../css/SearchBar.css";
import "../css/sidebarOption.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`http://localhost:3002/search`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
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
      const hashtagFind = hashtags.find((hashtag) => hashtag === searchTerm);
      if (hashtagFind) {
        setSearchResults([hashtagFind]);
      } else {
        setSearchResults("Hashtag not found");
      }
    } else if (searchTerm[0] === "@") {
      const userToFind = searchTerm.slice(1);

      const userFind = users.find((user) => user === userToFind);
      if (userFind) {
        navigate(`/profile/${userFind}`);
      } else {
        setSearchResults("User not found");
      }
    } else {
      setSearchResults("You need to start with @ or #");
    }
  };

  const result = () => {
    if (searchResults === "") {
      return <></>;
    } else {
      return (
        <div className="searchbar">
          <h3 className="searchBar-result">Result:</h3>
          <p> {searchResults}</p>
        </div>
      );
    }
  };

  return (
    <>
      <input
        className="search-div-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {result()}
      <div className="sidebarOption" onClick={handleSubmit}>
        <SearchIcon />
        <h2>Search</h2>
      </div>
    </>
  );
}

export default SearchBar;
