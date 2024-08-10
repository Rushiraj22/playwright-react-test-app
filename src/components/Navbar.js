import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('authToken'); // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser'); // Remove the authUser info on logout
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to='/dashboard' className='navbar-link'>
            Post Manager
          </Link>
        </li>
        {isLoggedIn && (
          <>
            <li className='navbar-item'>
              <Link to='/profile' className='navbar-link'>
                Profile
              </Link>
            </li>
            <li className='navbar-item'>
              <button onClick={handleLogout} className='logout-btn'>
                Logout
              </button>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li className='navbar-item'>
            <Link to='/register' className='navbar-link'>
              Register
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
