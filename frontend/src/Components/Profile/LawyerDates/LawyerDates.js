import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAppointment,
  getAllAppointment,
} from "../../../JS/actions/appointment";
import Table from "react-bootstrap/Table";
import { FaBookOpen, FaCalendarCheck, FaCalendarTimes } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import ClientDetails from "../ClientDetails/ClientDetails";

const LawyerDates = () => {
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
    <>
      {Appointments.length === 0 ? (
        <h1 className="no--client">Aucun client à afficher</h1>
      ) : (
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
                  {app.clientID && app.clientID.firstName}{" "}
                  {app.clientID && app.clientID.lastName}
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
                      <ClientDetails client={app} handleClose={handleClose} />
                    </Modal>
                    <button>
                      <FaCalendarCheck />
                    </button>
                    <button
                      onClick={() => dispatch(deleteAppointment(app._id))}
                    >
                      <FaCalendarTimes />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default LawyerDates;
