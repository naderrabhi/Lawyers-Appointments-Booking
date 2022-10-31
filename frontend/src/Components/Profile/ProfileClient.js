import React from 'react'
import './profileclient.css'

const ProfileClient = ({user}) => {
  return (
    <div className='user--profile'>
      <div className="user--image">
        <img src="./nader.png" alt="" />
      </div>
      <div className="user--info">
        <div className="name">
          <h1>{user.firstName}</h1>
          <h1>{user.lastName}</h1>
        </div>
        <p>Email : {user.email}</p>
      </div>
      <div className="user--app">
        <p>{user.appoitnmentID && user.appoitnmentID.day}</p>
      </div>
    </div>
  )
}

export default ProfileClient