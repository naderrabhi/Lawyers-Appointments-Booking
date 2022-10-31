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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
          <div className="file btn btn-lg btn-primary">
            Change Photo
          <input type="file" name="file" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="profile-head">
          <h5>
            {profile && profile.userID && profile.userID.firstName} {profile && profile.userID && profile.userID.firstName}
          </h5>
          <h5>
          {profile && profile.address}
          </h5>
          <h6>
          {profile && profile.specialty}
          </h6>
          <p>
          {profile && profile.bio}
          </p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <button onClick={()=> setToggle(true)} className="btn btn-primary btn-sm">About</button>
            </li>
            <li className="nav-item">
            <button onClick={()=> setToggle(false)} className="btn btn-primary btn-sm">dates</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <button onClick={handleShow} className='btn btn-primary'>Edit</button>
        <Modal show={show} onHide={handleClose}>
          <LawyerEdit profile={profile} handleClose={handleClose} />
        </Modal>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="profile-work">
          <p>Experience</p>
          {profile && profile.experience && profile.experience.map(el => (
            <p>{el.company} from {el.from} to {el.to}</p>
          ))}
          <p>Education</p>
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