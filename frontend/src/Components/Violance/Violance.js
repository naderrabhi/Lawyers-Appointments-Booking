import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/image/gavel1.jpg";

import "./violance.css";

const Violance = () => {
  return (
    <div
      className="violance section__padding"
      id="violance"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
      }}
    >
      <div className="row violance--content">
        <div className="violance--col col-12">
          <p className="p__opensans">
            We are here to protect any kind of Violance
          </p>
          <Link to="/contact">Contact Us Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Violance;
