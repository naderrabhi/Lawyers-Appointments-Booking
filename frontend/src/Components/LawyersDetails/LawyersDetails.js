import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProfile } from "../../JS/actions/profile";
import { getOneAppointmentOfLawyer } from "../../JS/actions/appointment";
import Modal from "react-bootstrap/Modal";
import Booking from "../Booking/Booking";
import Days from "../Days";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import "./lawyersdetails.css";
import { addPost, getPost } from "../../JS/actions/post";

const LawyersDetails = () => {
  const { id } = useParams();

  const user = useSelector((state) => state.auth.User);
  const profile = useSelector((state) => state.profile.Profile);
  const posts = useSelector((state) => state.post.Posts);
  const Loading = useSelector((state) => state.profile.loading);
  
  const [comment,setComment] = useState("");
  const [value, onChange] = useState(new Date());
  
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  let date = new Date();
  let x = date.getDate();
  const utc = date.toJSON().slice(0, 8).replace(/-/g, "-") + x;
  // const [today, setToday] = useState(utc);
  const [show, setShow] = useState(false);
  const appointments = useSelector(
    (state) => state.appointment.lawyerAppointment
  );

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getOneProfile(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    dispatch(
      getOneAppointmentOfLawyer(profile.lawyerID && profile.lawyerID._id, utc)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[show]);

  useEffect(() => {
    dispatch(getPost(profile.lawyerID && profile.lawyerID._id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment])
  


  function getDifference(array1, array2) {
    return array1.filter((object1) => {
      return !array2.some((object2) => {
        return object1.hour === object2.hour;
      });
    });
  }

  const handleChange = (e) => {
    dispatch(
      getOneAppointmentOfLawyer(
        profile.lawyerID && profile.lawyerID._id,
        e.toJSON().slice(0, 8).replace(/-/g, "-") + e.getDate()
      )
    );
    setDay(e.toJSON().slice(0, 8).replace(/-/g, "-") + e.getDate());
  };

  const handleGetAppointment = (hour) => {
    setHour(hour);
    handleShow();
  };

  return (
    <div className="lawyer--details section__padding">
      {Loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="lawyer--container">
            <div className="lawyer--details_row lawyer--container_info">
              <img
                className="lawyer--details_img"
                src={profile.image}
                alt={profile.lawyerID && profile.lawyerID.firstName}
              />
              <div>
                <h1>
                  {profile.lawyerID && profile.lawyerID.firstName}{" "}
                  {profile.lawyerID && profile.lawyerID.lastName}
                </h1>
                <p>Adresse : {profile.address}</p>
                <p>Bio : {profile.bio}</p>
                <p>Email : {profile.lawyerID && profile.lawyerID.email}</p>
                <p>
                  Spécialité : {profile.lawyerID && profile.lawyerID.specialty}
                </p>
                <p>Telephone : {profile.phone}</p>
              </div>
            </div>
            <div className="lawyer--details_row">
              <div className="calendar">
                <p>Obtenez votre rendez-vous</p>
                <Calendar
                  value={value}
                  onChange={onChange}
                  onClickDay={handleChange}
                />
                {(user.role === "client" ||
                  user.role === "admin" ||
                  (profile.lawyerID && user._id === profile.lawyerID._id)) && (
                  <div className="btn-calendar">
                    {appointments.length > 0
                      ? getDifference(Days, appointments).map((el, i) => (
                          <button
                            className="mb-2"
                            key={i}
                            onClick={() => handleGetAppointment(el.hour)}
                          >
                            {el.hour}h
                          </button>
                        ))
                      : Days.map((el, i) => (
                          <button
                            key={i}
                            className="mb-2"
                            onClick={() => handleGetAppointment(el.hour)}
                          >
                            {el.hour}h
                          </button>
                        ))}
                  </div>
                )}
                <div className="lawyer--details_btn">
                  <Modal show={show} onHide={handleClose}>
                    <Booking
                      handleClose={handleClose}
                      id={profile.lawyerID && profile.lawyerID._id}
                      day={day}
                      hour={hour}
                    />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <div className="lawyer--details_commentpost">
            <h1>Laisser un commentaire</h1>
            <div className="lawyer--details_comment">
              <img src={(user && user.image) || "/defaultSrc.png"} alt="" />
              <input value={comment} onChange={e => setComment(e.target.value)} type="text" placeholder="Laisser un commentaire" />
              <button onClick={()=>{dispatch(addPost({userID : user._id,lawyerID : profile.lawyerID._id,comment}));setComment("")}}>commenter</button>
            </div>
          </div>
          {posts.length > 0 ? posts.map(post => <div className="lawyer--details_commentget">
            <img src={(user && user.image) || "/defaultSrc.png"} alt="" />
            <div className="lawyer--details_commentget-info">
              <h3>{post.name}</h3>
              <h6>{post.date.slice(0,10) + " à " + post.date.slice(11,16)}</h6>
              <p>{post.comment}</p>
              <div className="commentget--info_btn">
                {user && user._id === post.userID ? <><button>Editer</button> <button>Supprimer</button></> : null}
                
              </div>
            </div>
          </div>)  : <p className="noComment">No commentaire to show</p>}
        </>
      )}
    </div>
  );
};

export default LawyersDetails;
