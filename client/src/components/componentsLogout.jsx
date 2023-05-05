import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap"; //izbrisao Button
import removeToken from "../functions/functionsLogout.js";
import "../css/modalBackground.css";
import { Button } from "@mui/material";

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
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleLogoutConfirm = () => {
    /* handleLogout(); */
    removeToken();
    navigate("/");
    handleClose();
  };
  return (
    <div className="LogoutButton-div">
      <Button className="LogoutButton" variant="primary" onClick={handleShow}>
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

export default Logout;
