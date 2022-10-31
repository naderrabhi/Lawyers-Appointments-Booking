import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllClient, getAllLawyer, getAllUser, getUser, searchByName } from "../../JS/actions/admin";
import Navbar from "../Navbar/Navbar";
import "./admindashbord.css";
import Modal from 'react-bootstrap/Modal';
import ModalDetails from "../Modal/ModalDetails";

const AdminDashbord = () => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Users = useSelector(state => state.admin.Users)
  const oneUser = useSelector(state => state.admin.oneUser)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!query) {dispatch(getAllUser())}
    
  }, [query])
  
  return (
    <>
      <Navbar />
      <div className="container dashbord">
        <div className="dashboard--header">
            <div className="dahsboard--users">
              <button onClick={()=>dispatch(getAllUser())} className="btn btn-primary">All</button>
              <button onClick={()=>dispatch(getAllClient())} className="btn btn-primary">Clients</button>
              <button onClick={()=>dispatch(getAllLawyer())} className="btn btn-primary">Lawyers</button>
            </div>
            <form onSubmit={(e)=> {e.preventDefault();dispatch(searchByName(query))}}>
              <input onChange={e=>setQuery(e.target.value)} type="text" placeholder="Search..." className="form-control" />
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
                <ModalDetails oneUser={oneUser} handleClose={handleClose} />
                </Modal>
                <button onClick={()=> dispatch(deleteUser(user._id))} className="btn btn-danger btn-sm">delete</button>
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashbord;
