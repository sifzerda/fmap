import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';
//import Sidebar from './Sidebar'; -- subjects formerly in navbar
import '../App.css';

function Navigation() {
  const currentPage = useLocation().pathname;
  const isLoggedIn = Auth.loggedIn();

  // login condition //

  function showNavigation() {
    if (isLoggedIn) {
      return (
        <React.Fragment>

          <li className="nav-item">
            <Link to="/Profile" className={currentPage === '/account' ? 'nav-link active' : 'nav-link'}>Profile</Link>
          </li>

          <li className="nav-item">
            <Link to="/" onClick={() => Auth.logout()} className="nav-link">Logout</Link>
          </li>

        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>

          <li className="nav-item">
            <Link to="/signup" className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Signup</Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
          </li>

        </React.Fragment>
      );
    }
  }

// ------------------------------- MAIN NAVIGATION LINKS ------------------//

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
      </li>

      <li className="nav-item">
        <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
      </li>

           {/* New Tab Linking to Horror-Map */}
           <li className="nav-item">
        <a href="https://horror-map-3b5accd83dc7.herokuapp.com" className="nav-link" target="_blank" rel="noopener noreferrer">Horror Map</a>
      </li>

    {/* ---------------------------------- log in conditional function --------------------------------  */}

    {showNavigation()}

    {/* ----------------------------------end --------------------------------  */}

    </ul>
  );
}

export default Navigation;
