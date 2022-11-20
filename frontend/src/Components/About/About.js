import React from "react";
import about from "../../assets/image/about.jpg";

import "./about.css";

const About = () => {
  return (
    <div className="about section__padding" id="about">
      <div className="container about--content">
        <div className="row about--row">
          <div className="col col-md-12 col-lg-6 col-sm-12 about--col">
            <img src={about} alt="" />
          </div>
          <div className="col col-md-12 col-lg-6 col-sm-12 about--col about--col_content">
            <h3>À propos de nous</h3>
            <p>Nous fournissons des solutions juridiques très fiables et efficaces</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              non, reprehenderit accusantium voluptatem dicta nobis similique
              rerum aperiam laboriosam, maiores iusto delectus est. Labore
              sapiente corrupti veniam earum consequatur fugit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
