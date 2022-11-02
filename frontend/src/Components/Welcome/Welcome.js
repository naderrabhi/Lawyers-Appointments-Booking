import React from 'react'
import './welcome.css'
import background from '../../assets/image/justice.jpg'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome" id='welcome' style={{ backgroundImage: `url(${background})` }}>
        <div className="row welcome--content">
            <div className="welcome--col col-12">
                <h5>BEST LAW AGENCY</h5>
                <p>Our Fighting Is For Your Justice</p>
                
                <Link to={localStorage.getItem('token') ? '/lawyers' : '/login'}>Get an appointment</Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome