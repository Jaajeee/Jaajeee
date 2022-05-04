import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from './djmapplogo.svg';

const NavBar = () => {
      return ( 
      <nav className="navbar-container">
        <div className="navbar-container-item">
        <div className="navbar-brand-logo">
          <NavLink className="navbar-brand-logo-link" to="/">
            <img src={logo} className="navbar-brand-logo-img" alt="logo" />
          </NavLink>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink className="nav-link" to="/addactivity" >Activity
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/data" >Data
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/" >Sign out
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>
  );
};
export default NavBar;