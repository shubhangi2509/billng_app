import React from 'react';
import { NavLink } from 'react-router-dom';

function CEONavBar() {
  return (
    <>
        <center><u><h1>CEO Dashboard</h1></u></center>
        <br/>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <NavLink className="navbar-brand" to="#">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/ceo/register">Register Employee<span className="sr-only"></span></NavLink>
            <NavLink className="nav-item nav-link" to="/ceo/list">List Employee</NavLink>
            <NavLink className="nav-item nav-link" to="/ceo/update">Update Employee</NavLink>
            <NavLink className="nav-item nav-link" to="/ceo/remove">Remove Employee</NavLink>
            <NavLink className="nav-item nav-link disabled" to="#"></NavLink>
            </div>
        </div>
        </nav>
    </>
  )
}

export default CEONavBar;