import React, { useEffect, useState } from "react";
import { useDispatch, useSelector,} from "react-redux";
import {deleteUser, getAllUser, getUser} from "../../JS/actions/admin";
import Navbar from "../Navbar/Navbar";
import "./admindashbord.css";
import Modal from 'react-bootstrap/Modal';
import ModalDetails from "../Modal/ModalDetails";

const AdminDashbord = () => {
  const Users = useSelector(state => state.admin.Users)
  const User = useSelector(state => state.admin.User)
  const [show, setShow] = useState(false);
  const [name, setName] = useState("")
  const [role, setRole] = useState("all")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUser(role,name)) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(getAllUser(role,name))
    setName('')
  }
  return (
    <>
      <div className="container dashbord">
        <div className="dashboard--header">
            <form onSubmit={handleSubmit}>
            <div className="dahsboard--users">
              <button onClick={()=>setRole("all")} className="btn btn-primary">All</button>
              <button onClick={()=>setRole("client")} className="btn btn-primary">Clients</button>
              <button onClick={()=>setRole("lawyer")} className="btn btn-primary">Lawyers</button>
            </div>
              <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Search..." className="form-control" />
            </form>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">role</th>
              <th scope="col">specialty</th>
              <th scope="col">date/hour</th>
              <th scope="col">subject</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
          {Users.map((user,index) => (<tr>
              <th scope="row">{index+1}</th>
              <td>{user.firstName} {user.LastName}</td>
              <td>{user.role}</td>
              <td>{user.specialty}</td>
              <td>{user.day} {user.hour}</td>
              <td>{user.subject}</td>
              <td className="dashboard--action">
                <button onClick={()=> {dispatch(getUser(user._id));handleShow()} } className="btn btn-warning btn-sm">detail</button>
                <Modal show={show} onHide={handleClose}>
                <ModalDetails User={User} handleClose={handleClose} />
                </Modal>
                <button onClick={()=> dispatch(deleteUser(User._id))} className="btn btn-danger btn-sm">delete</button>
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashbord;
