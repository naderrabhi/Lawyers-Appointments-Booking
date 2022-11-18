import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import background from "../../assets/image/gavel1.jpg";

import "./sign.css";

const specialty = [
  "bankruptcy",
  "business",
  "civil Rights",
  "criminal Law",
  "immigration",
  "family",
];

const SignUpAsLawyer = ({ action }) => {
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
          specialty: data.get("specialty"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
        },
        navigate
      )
    );
  };

  return (
    <div
      className="sign section__padding"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
      }}
    >
      <div className="container sign--content ">
        <div className="row sign--row">
          <div className="sign--form_sign">
            <h3 className="p__opensans">Sign up for Lawyer</h3>
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
              <select
                className="form-control mb-3"
                name="specialty"
                id="specialty"
              >
                {specialty.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
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
              <button className="p__opensans">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpAsLawyer;
