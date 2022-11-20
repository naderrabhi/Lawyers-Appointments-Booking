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
          Nous sommes ici pour protéger tout type de violence
          </p>
          <Link to="/contact">Contactez-nous</Link>
        </div>
      </div>
    </div>
  );
};

export default Violance;
