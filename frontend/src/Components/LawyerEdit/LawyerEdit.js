import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { postProfile } from "../../JS/actions/profile"
import "./lawyeredit.css";



const LawyerEdit = ({profile,handleClose}) => {

  const dispatch = useDispatch()

  const [image, setImage] = useState (profile.image)
  const [address, setAddress] = useState (profile.adress)
  const [bio, setBio] = useState (profile.bio)
  const [eductaion, setEducation] = useState ({degree : '',from : '',to : ''})
  const [experience, setExperience] = useState ([{company : '',from : '',to : ''}])
  const [social, setSocial] = useState (profile.social)
  
  const handleSave = () => { 
    const data = new FormData();
    data.append("fileName",image)
    data.append("address",address)
    data.append("bio",bio)
    data.append("eductaion",eductaion)
    // data.append("experience",experience)
    data.append("social",social)
    dispatch(postProfile(data));
    handleClose();
  }
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSave}>
          <input type="file" name='fileName' onChange={e => setImage(e.target.files[0])} className='form-control mb-3' />
          <input name='address' onChange={e => setAddress(e.target.value)} type="text" className="form-control mb-3" placeholder="Address" />
          <textarea name="bio" onChange={e => setBio(e.target.value)} type="text" className="form-control mb-3" placeholder="Bio" />
          <hr style={{border : "solid 4px #c4964b"}} />
          <div className="eductaion">
            <p>Education</p>
            <input name="degree" id="education"  onChange={e => setEducation({...eductaion,degree : e.target.value})} type="text" className="form-control mb-3" placeholder="Degree" />
            <input name='from' type="text" placeholder="MM/YY" onChange={e => setEducation({...eductaion,from : e.target.value})} className="form-control mb-3"/>
            <input name='to' type="text" placeholder="MM/YY"  onChange={e => setEducation({...eductaion,to : e.target.value})} className="form-control mb-3"/>
          </div>
          <hr style={{border : "solid 4px #c4964b"}} />
          <div className="exprecience">
          <p>Experience</p>
            <input name='company'  onChange={e => setExperience({...experience,company : e.target.value})} type="text" className="form-control mb-3" placeholder="Experience" />
            <p>From</p>
            <input name='from' type="text" placeholder="MM/YY" onChange={e => setExperience({...experience,from : e.target.value})} className="form-control mb-3"/>
            <p>to</p>
            <input name='to' type="text" placeholder="MM/YY" onChange={e => setExperience({...experience,to : e.target.value})} className="form-control mb-3"/>
          </div>
          <hr style={{border : "solid 4px #c4964b"}} />
          <div className="social">
          <p>Social media</p>
            <input name='twitter'  onChange={e => setSocial({...social,twitter : e.target.value})} type="text" className="form-control mb-3" placeholder="Twitter" />
            <input name='facebook'   onChange={e => setSocial({...social,facebook : e.target.value})} type="text" className="form-control mb-3" placeholder="Facebook" />
            <input name='linkedin'   onChange={e => setSocial({...social,linkedin : e.target.value})} type="text" className="form-control mb-3" placeholder="Linkedin" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>handleSave()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

export default LawyerEdit;
