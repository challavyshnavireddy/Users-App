import React from "react";
import "./Navigationbar.css";
import { NavLink } from "react-router-dom";
import {FaUserSecret} from 'react-icons/fa'
import {TiUserDelete} from 'react-icons/ti'

export const Navigationbar = () => {

const activeLink={
  color:"white",
  fontWeight:"bold"
}
const inactiveLink={
  color:"white"
}

const inactivetext={
color:"white"
}
const activetext={
  color:"black"
}


  return (
    <div  className="m">
      <nav className="navbar navbar-expand-sm ">
          <NavLink className="nav-link  m-4" style={({isActive})=>{
            return isActive ? activetext:inactivetext
          }} to="/">
            Home
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto  ">
              <li className="nav-item ">
                <NavLink className="nav-link mt-1 " style={({isActive})=>{
                  return isActive ? activeLink:inactiveLink;
                }} to="/users">
                <FaUserSecret size={30} className="icon" /> &nbsp;
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  " style={({isActive})=>{
                  return isActive?activeLink:inactiveLink}}
                   to="/removedusers">
                 <TiUserDelete size={40} className="icon"/> &nbsp;
                  removedusers
                </NavLink>
              </li>
            </ul>
          </div>
      
      </nav>
    </div>
  );
};
