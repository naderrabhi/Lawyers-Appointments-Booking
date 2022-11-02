import React, {useState} from 'react'
import LawyerAbout from './LawyerAbout/LawyerAbout'
import LawyerDates from './LawyerDates/LawyerDates'
import Modal from 'react-bootstrap/Modal';
import './profilelawyer.css'
import LawyerEdit from '../LawyerEdit/LawyerEdit';

const ProfileLawyer = ({profile}) => {
  const [toggle, setToggle] = useState(true)
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

<div className="container emp-profile .profile--lawyer">
  <div>
    <div className="row">
      <div className="col-md-4">
        <div className="profile-img">
          <img src="/nader.jfif" alt="" />
          <div className="file btn btn-lg btn-primary">
            Change Photo
          <input type="file" name="file" />
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="profile-head">
          <h5>
            {profile && profile.lawyerID && profile.lawyerID.firstName} {profile && profile.lawyerID && profile.lawyerID.firstName}
          </h5>
          <h6>
          Addres : {profile && profile.address}
          </h6>
          <h6>
          Specialty : {profile && profile.lawyerID.specialty}
          </h6>
          <h6>
          Bio : {profile && profile.bio}
          </h6>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <button onClick={()=> setToggle(true)} className="btn btn-primary btn-sm">About</button>
            </li>
            <li className="nav-item">
            <button onClick={()=> setToggle(false)} className="btn btn-primary btn-sm">Clients</button>
            </li>
            <li className="nav-item">
            <button onClick={handleShow} className='btn btn-primary btn-sm'>Edit</button>
            <Modal show={show} onHide={handleClose}>
              <LawyerEdit profile={profile} handleClose={handleClose} />
            </Modal>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="profile-work">
          <h5>Experience</h5>
          {profile && profile.experience && profile.experience.map(el => (
            <p>{el.company} from {el.from} to {el.to}</p>
          ))}
          <h5>Education</h5>
          {profile && profile.education && profile.education.map(el => (
            <p>{el.degree} from {el.from} to {el.to}</p>
          ))}
        </div>
      </div>
      <div className="col-md-8">
        <div className="tab-content profile-tab" id="myTabContent">
          {toggle ?  <LawyerAbout profile={profile && profile} /> : <LawyerDates />}
        </div>
      </div>
    </div>
  </div>           
</div>

  )
}

export default ProfileLawyer