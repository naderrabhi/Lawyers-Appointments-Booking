import React, { useEffect, useState } from "react";
import {FaTwitterSquare,FaFacebookSquare,FaLinkedin} from 'react-icons/fa'
import "./lawyersdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProfile } from "../../JS/actions/profile";
import { getOneAppointmentOfLawyer } from "../../JS/actions/appointment";
import Modal from 'react-bootstrap/Modal';
import Booking from "../Booking/Booking";

const LawyersDetails = () => {
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const appointments = useSelector(state => state.appointment.lawyerAppointment)
  console.log(appointments)
  const profile = useSelector((state) => state.profile.Profile);
  const loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getOneProfile(id));
  }, []);
  
  useEffect(() => {
    dispatch(getOneAppointmentOfLawyer(profile.lawyerID && profile.lawyerID._id));
  }, [show]);

  if (!loading) {
    return (
      <div className="lawyer--details">
        <div className="container lawyer--container">
          <div className="row lawyer--details_row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <img className="lawyer--details_img" src="/nader.jfif" alt="" />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="lawyer--details_info">
                <h1>{profile.lawyerID && profile.lawyerID.firstName} {profile.lawyerID && profile.lawyerID.lastName}</h1>
                <p>Address : {profile.address}</p>
                <p>Bio : {profile.bio}</p>
                <p>Email : {profile.lawyerID && profile.lawyerID.email}</p>
                <p>Speciality : {profile.lawyerID && profile.lawyerID.specialty}</p>
                <p>Phone : {profile.phone}</p>  
                <div className="lawyer--details_social">
                <p>Follow ME : </p>
                  {profile.social && Object.keys(profile.social).map(el => el=='twitter'? <a href={profile.social[el]} ><FaTwitterSquare /></a> : el == 'facebook'? <a href={profile.social[el]} ><FaFacebookSquare /></a> : <a href={profile.social[el]} ><FaLinkedin /></a>)}
                </div>
                <div className="lawyer--details_btn">
                  <button onClick={()=> handleShow()} className="btn btn-sm btn-primary">Get an appointment</button>
                  <Modal show={show} onHide={handleClose}>
                    <Booking handleClose={handleClose} id={id} />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LawyersDetails;
