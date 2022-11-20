import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAppointment,
  getAllAppointment,
} from "../../JS/actions/appointment";
import Table from "react-bootstrap/Table";
import { FaBookOpen, FaCalendarCheck, FaCalendarTimes } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import LawyerDetails from "./LawyerDetails/LawyerDetails";

import "./profileclient.css";

const ProfileClient = ({ user }) => {
  const dispatch = useDispatch();
  const Appointments = useSelector((state) => state.appointment.Appointments);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(getAllAppointment());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user--profile section__padding">
      <div className="container user--profile_container">
        <div className="row user--profile_row">
          <div className="user--profile_info">
            <p>Prénom : {user.firstName}</p>
            <p>Nom : {user.lastName}</p>
            <p>Email : {user.email}</p>
            <div className="user--profile_app">
              {!Appointments.length === 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Jour/Heure</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Appointments.map((app, i) => (
                      <tr key={i}>
                        <td>
                          {app.lawyerID && app.lawyerID.firstName}{" "}
                          {app.lawyerID && app.lawyerID.lastName}
                        </td>
                        <td>
                          {app.day} at {app.hour}h
                        </td>
                        <td>
                          <div className="lawyer--action">
                            <button onClick={() => handleShow()}>
                              <FaBookOpen />
                            </button>
                            <Modal show={show} onHide={handleClose}>
                              <LawyerDetails
                                lawyer={app}
                                handleClose={handleClose}
                              />
                            </Modal>
                            <button>
                              <FaCalendarCheck />
                            </button>
                            <button
                              onClick={() =>
                                dispatch(deleteAppointment(app._id))
                              }
                            >
                              <FaCalendarTimes />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h1>You Have No Appointment</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileClient;
