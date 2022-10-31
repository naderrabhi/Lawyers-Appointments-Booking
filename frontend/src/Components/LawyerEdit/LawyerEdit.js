import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { postProfile } from "../../JS/actions/actionsProfile";
import "./lawyeredit.css";

const specialty = [
  "bankruptcy",
  "business",
  "civil Rights",
  "criminal Law",
  "immigration",
  "family",
];

const LawyerEdit = ({profile,handleClose}) => {

  const dispatch = useDispatch()
  const [data, setData] = useState({
    address : "",
    bio : "",
    specialty : "",
    experience : [{
        company : "",
        from : "",
        to : "",
    }],
    education : [{
      degree : "",
      from : "",
      to : "",
  }],
  social :{
    twitter : "",
    facebook : "",
    linkedin : "",
}
  })
  const handleSave = () => {
    dispatch(postProfile(data))
    handleClose()
    console.log(data)
  }
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input onChange={e => setData({...data,address : e.target.value})} type="text" className="form-control mb-3" placeholder="Address" />
          <textarea onChange={e => setData({...data,bio : e.target.value})} type="text" className="form-control mb-3" placeholder="Bio" />
          <p>Speciality</p>
          <select onChange={e => setData({...data,specialty : e.target.value})} className="form-control mb-3" name="specialty" id="specialty">
            {specialty.map((s, i) => (
              <option key={i} value={s}>
                  {s}
                </option>
              ))}
          </select>
          <hr style={{border : "solid 4px #c4964b"}} />
          <div className="eductaion">
            <p>Education</p>
            <input id="education"  onChange={e => setData({...data,education :[{...data.education[0],degree : e.target.value}]})} type="text" className="form-control mb-3" placeholder="Degree" />
            <input type="text" placeholder="MM/YY" onChange={e => setData({...data,education :[{...data.education[0],from : e.target.value}]})} className="form-control mb-3"/>
            <input type="text" placeholder="MM/YY" onChange={e => setData({...data,education :[{...data.education[0],to : e.target.value}]})} className="form-control mb-3"/>
          </div>
          <hr style={{border : "solid 4px #c4964b"}} />
          <div className="exprecience">
          <p>Experience</p>
            <input  onChange={e => setData({...data,experience :[{...data.experience[0],company : e.target.value}]})} type="text" className="form-control mb-3" placeholder="Experience" />
            <p>From</p>
            <input type="text" placeholder="MM/YY" onChange={e => setData({...data,experience :[{...data.experience[0],from : e.target.value}]})} className="form-control mb-3"/>
            <p>to</p>
            <input type="text" placeholder="MM/YY" onChange={e => setData({...data,experience :[{...data.experience[0],to : e.target.value}]})} className="form-control mb-3"/>
          </div>
          <hr style={{border : "solid 4px #c4964b"}} />
          <div className="social">
          <p>Social media</p>
            <input  onChange={e => setData({...data,social : {...data.social, twitter : e.target.value}})} type="text" className="form-control mb-3" placeholder="Twitter" />
            <input  onChange={e => setData({...data,social : {...data.social, facebook : e.target.value}})} type="text" className="form-control mb-3" placeholder="Facebook" />
            <input  onChange={e => setData({...data,social : {...data.social, linkedin : e.target.value}})} type="text" className="form-control mb-3" placeholder="Linkedin" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

export default LawyerEdit;
