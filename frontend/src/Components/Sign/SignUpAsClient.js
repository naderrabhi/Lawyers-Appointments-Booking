import React from "react";
import background from "../../assets/image/gavel1.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./sign.css";

const SignUpAsClient = ({ action }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      action(
        {
          email: data.get("email"),
          password: data.get("password"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
        },
        navigate
      )
    );
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
            <h3>S'inscrire Client</h3>
            <form method="post" onSubmit={handleSubmit}>
              <input
                required
                name="firstName"
                placeholder="First Name"
                type="text"
                className="form-control mb-3"
              />
              <input
                required
                name="lastName"
                placeholder="Last Name"
                type="text"
                className="form-control mb-3"
              />
              <input
                required
                name="email"
                placeholder="Email"
                type="email"
                className="form-control mb-3"
              />
              <input
                required
                name="password"
                placeholder="Password"
                type="password"
                className="form-control mb-3"
              />
              <button>S'inscrire</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpAsClient;
