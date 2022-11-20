import React, { useState } from "react";
import background from "../../assets/image/gavel1.jpg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../JS/actions/auth";

import "./sign.css";

const SignIn = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    dispatch(loginUser(data, navigate));
  };

  return (
    <div
      className="sign"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
      }}
    >
      <div className="container sign--content">
        <div className="row sign--row">
          <div className="sign--form_sign">
            <h3 className="p__opensans">Connectez-vous</h3>
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Email"
                type="email"
                className="form-control mb-3"
              />
              <input
                name="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                placeholder="Password"
                type="password"
                className="form-control mb-3"
              />
              <button>Connecter</button>
            </form>
            <div className="sign--in_signup">
              <Link className="p__opensans" to="/client/register">
              S'inscrire Client
              </Link>
              <Link className="p__opensans" to="/lawyer/register">
              S'inscrire Avocat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
