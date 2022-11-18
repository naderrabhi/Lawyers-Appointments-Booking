import React from 'react'

import { Navigate} from 'react-router-dom'


const PrivateAdmin = ({children,user}) => {
    
  return (
    <>
        <div className='section__padding' style={{background : "var(--color-black)"}}>
            {localStorage.getItem("token") && user.role === "admin" ? children : <Navigate to="/" />}
        </div>
    </>
  )
}

export default PrivateAdmin