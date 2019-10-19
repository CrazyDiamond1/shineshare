import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

class Header extends Component {
  
//MAKE Login Component
  // LogUserIn() {
  //   const Username = document.getElementById('username').value;
  //   const Password = document.getElementById('password').value;
  // }


  render() {
    return (
      <div className='header'>
        <div className='header-logo'/>
        <div className='text-logo'>
          <div className="text-logo1">SHINE</div>
          <div className="text-logo2">SHARE</div>
        </div>
      </div>
    )
  }
}

export default Header;