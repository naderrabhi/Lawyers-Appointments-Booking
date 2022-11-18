import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LawyerDetails = ({ lawyer, handleClose }) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          Name : {lawyer.lawyerID.firstName} {lawyer.lawyerID.firstName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Email : {lawyer.lawyerID.email}</h6>
        <h6>Subject : {lawyer.subject}</h6>
        <h6>Description : {lawyer.description}</h6>
        <h6>
          Date : {lawyer.day} at {lawyer.hour}
        </h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};

export default LawyerDetails;
