import React from "react";
import {Link} from 'react-router-dom'
import "./lawyercard.css";

const LawyerCard = ({ profile }) => {
  return (
    <Link className="link--card_lawyer" to={`/lawyers/${profile._id}`} >
    <div className="card card--lawyer" style={{ width: "18rem",height : "24rem" }}>
      <img className="card-img-top" src="./nader.jfif" alt="" />
      <div className="card-body">
        <h4 className="card-title">{profile.lawyerID && profile.lawyerID.firstName} {profile.lawyerID && profile.lawyerID.firstName}</h4>
        <h5>{profile.lawyerID && profile.lawyerID.specialty}</h5>
      </div>
    </div>
    </Link>
  );
};

export default LawyerCard;
