import React, { useState } from 'react'
import './sign.css'
import background from  '../../assets/image/justice.jpg'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../JS/actions/auth';

const SignIn = () => {
    const [data, setData] = useState({})
    const dispatch = useDispatch();
     const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    dispatch(
      loginUser(data,navigate)
    );
  };
  
  return ( 
    <div className="sign" style={{ backgroundImage: `url(${background})`,opacity: 0.94, }}>
        <div className="container sign--content" >
            <div className="row sign--row">
                <div className="sign--form_sign">
                    <h3>Sign in</h3>
                    <form action='http://localhost:3000/login' onSubmit={handleSubmit}>
                        <input name="email" onChange={e=> setData({...data,email:e.target.value})} placeholder='Email' type="email" className='form-control mb-3' />
                        <input name="password" onChange={e=> setData({...data,password:e.target.value})} placeholder='Password' type="password" className='form-control mb-3' />
                        <button>Sign in</button>
                    </form>
                    <div className="sign--in_signup">
                    <Link to='/client/register'>Sign Up as Client</Link>
                    <Link to='/lawyer/register'>Sign Up as Lawyer</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn