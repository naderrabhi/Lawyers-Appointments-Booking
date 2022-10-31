import React, { useEffect } from "react";

import "./lawyersdetails.css";
import { useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import { getOneLawyerGuest } from "../../JS/actions/actionsGuest";

const LawyersDetails = () => {
  const {id} = useParams()
  const lawyer = useSelector(state => state.reducersGuest.oneLawyer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneLawyerGuest(id))
  }, [])
  
  return (
    <div className="lawyer--details">
      <div className="lawyer--img">
        <img src="" alt="" />
      </div>
      <div className="lawyer--info">
        <h5>{lawyer.firstName}</h5>
      </div>
    </div>
  );
};

export default LawyersDetails;
