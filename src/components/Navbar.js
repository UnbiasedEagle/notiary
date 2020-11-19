import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Notiary
        </Link>
        <div className='collapse navbar-collapse' id='mobile-nav'>
          <ul className='ml-auto navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='text-light nav-link'>
                All Notes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
