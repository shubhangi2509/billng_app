import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">STOCK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/user/add">Add Stock</NavLink>
        <NavLink className="nav-link" to="/user/show">Show Stock</NavLink>
        <NavLink className="nav-link" to="#">Pricing</NavLink>
        <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
      </div>
    </div>
  </div>
</nav>
    
    
    </>
  )
}

export default NavBar