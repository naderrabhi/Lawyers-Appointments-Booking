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
          <h3>Practice Areas</h3>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
        </div>
        <div className="row practice--body">
          <div className="col col-md-4 col-lg-4 col-sm-12 practice--col">
            <BsBank />
            <h5>Bankruptcy Law</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="col col-md-4 col-lg-4 col-sm-12 practice--col">
            <FaMoneyBillAlt />
            <h5>Business Law</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="col col-md-4 col-lg-4 col-sm-12 practice--col">
            <FaPeopleArrows />
            <h5>Civil Rights Law</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="col col-md-4 col-lg-4 col-sm-12 practice--col">
            <FaCompress />
            <h5>Criminal Law</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="col col-md-4 col-lg-4 col-sm-12 practice--col">
            <FaPlaneDeparture />
            <h5>Immigration Law</h5>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
          <div className="col col-md-4 col-lg-4 col-sm-12 practice--col">
            <FaHouseUser />
            <h5>Family Law</h5>
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
