import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
//links to home/dashboard, trips, previous trips & bucketlist
  return (
    <div className='NavbarContainer'>
      <NavLink to='./dashboard' className='NavbarLink'>Home</NavLink> <br></br>
      <NavLink to='/trips' className='NavbarLink'>Trips</NavLink> <br></br>
      <NavLink to='/trips/visited' className='NavbarLink'>Trips I've taken</NavLink> <br></br>
      <NavLink to='/trips/bucketlist' className='NavbarLink'>Bucket List</NavLink> <br></br>
      <br></br>
    </div>
  );
};

export default NavBar;