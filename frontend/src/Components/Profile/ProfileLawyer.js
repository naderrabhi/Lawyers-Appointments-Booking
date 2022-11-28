import React, { useState } from "react";
import LawyerDates from "./LawyerDates/LawyerDates";
import Modal from "react-bootstrap/Modal";
import LawyerEdit from "../LawyerEdit/LawyerEdit";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";

import "./profilelawyer.css";

const ProfileLawyer = ({ profile }) => {
  
  const [show, setShow] = useState(false);
  const Loading = useSelector((state) => state.profile.loading);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="profile--lawyer section__padding">
      {Loading ? <LoadingSpinner /> : <div className="profile--lawyer_container">
        <div className="profile--lawyer_img">
          <img
            src={(profile && profile.image) || './nader.png'}
            alt={
              (profile.lawyerID && profile.lawyerID.firstName) ||
              "dafault image"
            }
          />
          <button onClick={handleShow}>Editer le profil</button>
          <Modal show={show} onHide={handleClose}>
            <LawyerEdit profile={profile} handleClose={handleClose} />
          </Modal>
        </div>
        <div className="profile--lawyer_info" id="myTabContent">
          <div className="profile-head">
            <h5>
              <span>Nom et prénom : </span>
              {profile.lawyerID && profile.lawyerID.firstName}{" "}
              {profile.lawyerID && profile.lawyerID.firstName}
            </h5>
            <h6>
              <span>Adresse : </span> {profile && profile.address}
            </h6>
            <h6>
              <span>Spécialité : </span>{" "}
              {profile.lawyerID && profile.lawyerID.specialty}
            </h6>
            <h6>
              <span>Bio : </span> {profile && profile.bio}
            </h6>
            <h6>
              <span>Téléphone : </span> {profile && profile.phone}
            </h6>
          </div>
          <LawyerDates />
        </div>
      </div>}
      
    </div>
  );
};

export default ProfileLawyer;
