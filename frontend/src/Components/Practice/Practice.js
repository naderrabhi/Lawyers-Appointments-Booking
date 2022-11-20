import React from "react";
import { BsBank } from "react-icons/bs";
import {
  FaMoneyBillAlt,
  FaPeopleArrows,
  FaCompress,
  FaPlaneDeparture,
  FaHouseUser,
} from "react-icons/fa";

import "./practice.css";

const Practice = () => {
  return (
    <div className="practice section__padding" id="practice-areas">
      <div className="container parctice--content">
        <div className="row practice--header">
          <h3>Nos Compétences</h3>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
        </div>
        <div className="practice--body">
          <div className="practice--col">
            <BsBank />
            <h5>Droit international</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="practice--col">
            <FaMoneyBillAlt />
            <h5>Droit Commercial</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="practice--col">
            <FaPeopleArrows />
            <h5>Droit civil et familial</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="practice--col">
            <FaCompress />
            <h5>Droit des sociétés</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="practice--col">
            <FaPlaneDeparture />
            <h5>Droit des investissements</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="practice--col">
            <FaHouseUser />
            <h5>Droit fiscal</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
