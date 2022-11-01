import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDetails = ({User,handleClose}) => {
  return (
    <>
    <Modal.Header closeButton>
          <Modal.Title>{User.firstName} {User.lastName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h6>{User.email}</h6>
      <h6>{User.role}</h6>
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
