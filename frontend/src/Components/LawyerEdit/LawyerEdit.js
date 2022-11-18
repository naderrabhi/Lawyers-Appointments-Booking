import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { postProfile } from "../../JS/actions/profile";

import "./lawyeredit.css";

const LawyerEdit = ({ profile, handleClose }) => {
  const [image, setImage] = useState(profile.image);
  const [address, setAddress] = useState(profile.adress);
  const [bio, setBio] = useState(profile.bio);
  const [phone, setPhone] = useState(profile.phone);
  const dispatch = useDispatch();

  const handleSave = () => {
    const data = new FormData();
    data.append("fileName", image);
    data.append("address", address);
    data.append("bio", bio);
    data.append("phone", phone);
    dispatch(postProfile(data));
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSave}>
          <label htmlFor="fileName" className="mb-1">
            Change Photo
          </label>
          <input
            id="fileName"
            type="file"
            name="fileName"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control mb-3"
          />
          <input
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control mb-3"
            placeholder="Address"
          />
          <textarea
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            type="text"
            className="form-control mb-3"
            placeholder="Bio"
          />
          <input
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="form-control mb-3"
            placeholder="phone"
          />
          <hr style={{ border: "solid 4px #c4964b" }} />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSave()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

export default LawyerEdit;
