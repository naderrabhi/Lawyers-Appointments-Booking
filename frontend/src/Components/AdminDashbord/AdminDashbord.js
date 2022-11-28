import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAppointmentByAdmin,deletePostByAdmin, deleteUser, getAllUser, getUser } from "../../JS/actions/admin";
import { FaBookOpen, FaCalendarTimes } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import ModalDetails from "../Modal/ModalDetails";
import { deleteProfile } from "../../JS/actions/profile";

import "./admindashbord.css";

const AdminDashbord = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("all");

  const Users = useSelector((state) => state.admin.Users);
  const User = useSelector((state) => state.admin.User);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser(role, name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getAllUser(role, name));
    setName("");
  };
  return (
    <div className="dashbord section__padding">
      <div className="dashboard--header">
        <form onSubmit={handleSubmit}>
          <div className="dahsboard--users">
            <button onClick={() => setRole("all")}>Tout</button>
            <button onClick={() => setRole("client")}>Clients</button>
            <button onClick={() => setRole("lawyer")}>Avocats</button>
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Recherche.."
            className="form-control"
          />
        </form>
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">rôle</th>
            <th scope="col">spécialité</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                {user.firstName} {user.LastName}
              </td>
              <td>{user.role}</td>
              <td>{user.specialty && user.specialty.slice(9)}</td>
              <td className="dashboard--action">
                <button
                  onClick={() => {
                    dispatch(getUser(user._id));
                    handleShow();
                  }}
                  
                >
                  <FaBookOpen />
                </button>
                <Modal show={show} onHide={handleClose}>
                  <ModalDetails User={User} handleClose={handleClose} />
                </Modal>
                <button
                  onClick={() => {
                    dispatch(deleteUser(user._id, role, name));
                    dispatch(deleteProfile(user._id));
                    dispatch(deleteAppointmentByAdmin(user.role === 'lawyer' && user._id))
                    dispatch(deletePostByAdmin(user.role === 'lawyer' && user._id))
                    dispatch(getAllUser(role, name));
                  }}
                  
                >
                  <FaCalendarTimes />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashbord;
