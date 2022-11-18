import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
import { logOut } from "../../JS/actions/auth";

import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.User);

  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app--header">
      <div className="header--logo">
        <Link to="/">Lawyer</Link>
      </div>
      <ul className="header--links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {localStorage.getItem("token") ? (
          <li>
            <Link to="/lawyers">Lawyers</Link>
          </li>
        ) : null}
        <li>
          <Link to="/practice">Practice Areas</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="header--sign">
        {user && user.role === "admin" ? (
          <li>
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <Link onClick={() => dispatch(logOut())} to="/login">
              Log out
            </Link>
          </li>
        ) : user.role === "lawyer" || user.role === "client" ? (
          <li>
            <Link to="/profile">Profile</Link> |{" "}
            <Link onClick={() => dispatch(logOut())} to="/login">
              Log out
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Sign in</Link> |{" "}
            <div
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
              className="dropdown"
            >
              <Link to="">Sign up</Link>
              <div
                className={
                  toggle ? "dropdown--content_show" : "dropdown--content_hide"
                }
              >
                <Link to="/lawyer/register">Lawyer</Link>
                <Link to="/client/register">Client</Link>
              </div>
            </div>
          </li>
        )}
      </div>
      <div className="header--smallscreen">
        <FaAlignJustify
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app--header_overlay">
            <FaWindowClose
              className="overlay--close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="header--links_smallscreen">
              <li
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to="/about">About</Link>
              </li>
              {localStorage.getItem("token") ? (
                <li
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  <Link to="/lawyers">Lawyers</Link>
                </li>
              ) : null}
              <li
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to="/practice">Practice Areas</Link>
              </li>
              <li
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to="/contact">Contact</Link>
              </li>
              {user && user.role === "admin" ? (
                <li>
                  <Link to="/dashboard">Dashboard</Link> |{" "}
                  <Link onClick={() => dispatch(logOut())} to="/login">
                    Log out
                  </Link>
                </li>
              ) : user.role === "lawyer" || user.role === "client" ? (
                <li>
                  <Link to="/profile">Profile</Link> |{" "}
                  <Link onClick={() => dispatch(logOut())} to="/login">
                    Log out
                  </Link>
                </li>
              ) : (
                <li>
                  <Link onClick={() => setToggleMenu(false)} to="/login">
                    Sign in
                  </Link>{" "}
                  |{" "}
                  <div
                    onClick={() => setToggle(!toggle)}
                    className="dropdown"
                  >
                    <Link onClick={() => setToggle(!toggle)} to="">
                      Sign up
                    </Link>
                    <div
                      className={
                        toggle
                          ? "dropdown--content_show"
                          : "dropdown--content_hide"
                      }
                    >
                      <Link
                        onClick={() => setToggleMenu(false)}
                        to="/lawyer/register"
                      >
                        Lawyer
                      </Link>
                      <Link
                        onClick={() => setToggleMenu(false)}
                        to="/client/register"
                      >
                        Client
                      </Link>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
