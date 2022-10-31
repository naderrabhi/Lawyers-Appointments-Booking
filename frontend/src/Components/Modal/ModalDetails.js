import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDetails = ({oneUser,handleClose}) => {
  return (
    <>
    <Modal.Header closeButton>
          <Modal.Title>{oneUser.firstName} {oneUser.lastName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h6>{oneUser.email}</h6>
      <h6>{oneUser.role}</h6>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
    </>
  );
};

export default ModalDetails;
