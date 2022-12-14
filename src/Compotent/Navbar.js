// rfc cmd for import
//import React from 'react';
 import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon" />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/MyForm">{props.home} <span className="sr-only" >(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/About">about</a>
      </li>
     
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <div className= {`form-check form-switch text-${props.mode==='dark'?'light':'dark'}` } >
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.change} id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Mode</label>
</div>
  </div>
</nav>
   
  )
}

Navbar.propTypes = {
title : PropTypes.string,
home: PropTypes.string
}

// Navbar.propTypes={
//     title:"FaiyazLearning",
//     home: "AboutLearning"
// }



export default Navbar

