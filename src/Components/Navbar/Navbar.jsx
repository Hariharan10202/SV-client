/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Navbar.css';

import { MdMapsHomeWork } from 'react-icons/md';
import { SiGooglemessages } from 'react-icons/si';
import { SiAntdesign } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { MdCollections, MdReviews } from 'react-icons/md';

const Navbar = () => {
  const [active, setActive] = useState('#');

  return (
    <div className='Navbar'>
      <a href='/' className='logo' rel='noreferrer'>
        <h3>Logo </h3>
      </a>
      <input className='menu-icon' type='checkbox' id='menu-icon' name='menu-icon' />
      <label htmlFor='menu-icon'></label>
      <nav className='nav'>
        <ul className='navList'>
          <li>
            <a href='#work' onClick={() => setActive('#work')}>
              <div className='menuItem'>
                <h3 className='menuItems'>Work</h3> <MdMapsHomeWork className='reactIcon' />
              </div>
            </a>
          </li>
          <li>
            <a href='#contract' onClick={() => setActive('#contract')}>
              <div className='menuItem'>
                <h3 className='menuItems'>Contract</h3>
                <SiAntdesign className='reactIcon' />
              </div>
            </a>
          </li>
          <li>
            <a href='#services' onClick={() => setActive('#services')}>
              <div className='menuItem'>
                <h3 className='menuItems'>Testimonials</h3>
                <MdDesignServices className='reactIcon' />
              </div>
            </a>
          </li>
          <li>
            <a href='#message' onClick={() => setActive('#message')}>
              <div className='menuItem'>
                <h3 className='menuItems'>Ping</h3>
                <SiGooglemessages className='reactIcon' />
              </div>
            </a>
          </li>
          <li>
            <a href='#message' onClick={() => setActive('#message')}>
              <div className='menuItem'>
                <h3 className='menuItems'>Collections</h3>
                <MdCollections className='reactIcon' />
              </div>
            </a>
          </li>
          <li>
            <a href='#message' onClick={() => setActive('#message')}>
              <div className='menuItem'>
                <h3 className='menuItems'>Reviews</h3>
                <MdReviews className='reactIcon' />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
