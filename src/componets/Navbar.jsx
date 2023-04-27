import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink, useParams } from "react-router-dom"
import './Navbar.css';


function Navbar() {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          AC/DC Store
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to="/categoria/1" className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} >Cd</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to='/categoria/2' className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Vinilos</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <CartWidget />
              </Link>
            </li>

          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
