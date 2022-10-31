import React from "react";
import {Link} from 'react-router-dom'
import "./lawyercard.css";

const LawyerCard = ({ lawyer }) => {
  return (
    <div className="card card--lawyer" style={{ width: "18rem" }}>
      <img className="card-img-top" src="./nader.png" alt="" />
      <div className="card-body">
        <h5 className="card-title">{lawyer.firstName} {lawyer.lastName}</h5>
        <Link to={`/lawyers/${lawyer._id}`} className="btn card--btn btn-sm btn-primary">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default LawyerCard;
