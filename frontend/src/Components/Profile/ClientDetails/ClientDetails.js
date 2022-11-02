import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ClientDetails = ({client,handleClose}) => {
  return (
    <>
    <Modal.Header closeButton>
          <Modal.Title>Name : {client.clientID.firstName} {client.clientID.firstName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h6>Email : {client.clientID.email}</h6>
      <h6>Subject : {client.subject}</h6>
      <h6>Description : {client.description}</h6>
      <h6>Date : {client.day} at {client.hour}</h6>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
    </>
  )
}

export default ClientDetails