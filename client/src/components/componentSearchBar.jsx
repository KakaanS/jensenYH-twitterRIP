import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "../css/SearchBar.css"

import { Modal, Button } from "react-bootstrap";
import removeToken from "../functions/functionsLogout.js";
import "../css/modalBackground.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
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

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>

      <div className="searchBar-button-text">

      <SearchIcon Icon={SearchIcon} className="sidebar--searchIcon" />

      <button className="searchBar-button" type="submit">Search</button>
      </div>
     
        <input 
          className="search-div-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       
      </form>
      <h3 className="searchBar-result">Result:</h3>
      <p> {searchResults}</p>
    </div>
  );
}



const LogoutModal = ({ show, closeCallback, handleLogoutCallback }) => {
  return (
    <div>
      {show && (
        <div className="modalContainer">
          <div className="modalBackground"></div>
          <Modal className="modalLogout" show={show} onHide={closeCallback}>
            <Modal.Header>
              <Modal.Title>
                <h4>Confirm logout</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeCallback}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleLogoutCallback}>
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

const Logout = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    console.log("handleClose");
  };
  const handleShow = () => {
    setShow(true);
    console.log("handleShow");
  };

  const handleLogoutConfirm = () => {
    /* handleLogout(); */
    removeToken();
    navigate("/");
    handleClose();

    console.log("logout");
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Logout
      </Button>
      <LogoutModal
        handleLogoutCallback={handleLogoutConfirm}
        show={show}
        closeCallback={handleClose}
      />
    </div>
  );
};

export default ( Logout , SearchBar );



