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
        <Link to="/">Avocat</Link>
      </div>
      <ul className="header--links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À Propos</Link>
        </li>
        {localStorage.getItem("token") ? (
          <li>
            <Link to="/lawyers">Nos Avocats</Link>
          </li>
        ) : null}
        <li>
          <Link to="/practice">Nos Compétences</Link>
        </li>
        <li>
          <Link to="/contact">Contacter Nous</Link>
        </li>
      </ul>
      <div className="header--sign">
        {user && user.role === "admin" ? (
          <li>
            <Link to="/dashboard">tableau de bord</Link> |{" "}
            <Link onClick={() => dispatch(logOut())} to="/login">
            Se déconnecter
            </Link>
          </li>
        ) : user.role === "lawyer" || user.role === "client" ? (
          <li>
            <Link to="/profile">Profil</Link> |{" "}
            <Link onClick={() => dispatch(logOut())} to="/login">
            Se déconnecter
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Connexion</Link> |{" "}
            <div
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
              className="dropdown"
            >
              <Link to="">Inscrivez-vous</Link>
              <div
                className={
                  toggle ? "dropdown--content_show" : "dropdown--content_hide"
                }
              >
                <Link to="/lawyer/register">Avocat</Link>
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
                <Link to="/">Accueil</Link>
              </li>
              <li
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to="/about">À Propos</Link>
              </li>
              {localStorage.getItem("token") ? (
                <li
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  <Link to="/lawyers">Nos Avocats</Link>
                </li>
              ) : null}
              <li
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to="/practice">Nos Compétences</Link>
              </li>
              <li
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to="/contact">Contacter Nous</Link>
              </li>
              {user && user.role === "admin" ? (
                <li>
                  <Link onClick={() =>{ setToggleMenu(false)}} to="/dashboard">tableau de bord</Link> |{" "}
                  <Link onClick={() =>{ dispatch(logOut());setToggleMenu(false)}} to="/login">
                  Se déconnecter
                  </Link>
                </li>
              ) : user.role === "lawyer" || user.role === "client" ? (
                <li>
                  <Link onClick={() =>{ setToggleMenu(false)}} to="/profile" >Profil</Link> |{" "}
                  <Link onClick={() =>{ dispatch(logOut());setToggleMenu(false)}} to="/login">
                  Se déconnecter
                  </Link>
                </li>
              ) : (
                <li>
                  <Link onClick={() => setToggleMenu(false)} to="/login">
                  Connexion
                  </Link>{" "}
                  |{" "}
                  <div
                    onClick={() => setToggle(!toggle)}
                    className="dropdown"
                  >
                    <Link onClick={() => setToggle(!toggle)} to="">
                    Inscrivez-vous
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
                        Avocat
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
