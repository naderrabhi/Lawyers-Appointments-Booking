import React, { useState } from "react";
import LawyerDates from "./LawyerDates/LawyerDates";
import Modal from "react-bootstrap/Modal";
import LawyerEdit from "../LawyerEdit/LawyerEdit";

import "./profilelawyer.css";

const ProfileLawyer = ({ profile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="profile--lawyer section__padding">
      <div className="profile--lawyer_container">
        <div className="profile--lawyer_img">
          <img
            src={(profile && profile.image) || "/defaultSrc.png"}
            alt={
              (profile.lawyerID && profile.lawyerID.firstName) ||
              "dafault image"
            }
          />
          <button onClick={handleShow}>Edit Profile</button>
          <Modal show={show} onHide={handleClose}>
            <LawyerEdit profile={profile} handleClose={handleClose} />
          </Modal>
        </div>
        <div className="profile--lawyer_info" id="myTabContent">
          <div className="profile-head">
            <h5>
              <span>Full name : </span>
              {profile.lawyerID && profile.lawyerID.firstName}{" "}
              {profile.lawyerID && profile.lawyerID.firstName}
            </h5>
            <h6>
              <span>Address : </span> {profile && profile.address}
            </h6>
            <h6>
              <span>Specialty : </span>{" "}
              {profile.lawyerID && profile.lawyerID.specialty}
            </h6>
            <h6>
              <span>Bio : </span> {profile && profile.bio}
            </h6>
          </div>
          <LawyerDates />
        </div>
      </div>
    </div>
  );
};

export default ProfileLawyer;
