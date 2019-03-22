import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className='navbar'>
          <Link to='/' className='navbar-item'>Home</Link>
          <Link to='/' className='navbar-item'>Pokemon</Link>
          <Link to='/' className='navbar-item'>Community</Link>
          <Link to='/' className='navbar-item'>About</Link>
          <Link to='/' className='navbar-item'>Support</Link>
        </ul>
      </div>
    )
  }
}

export default NavBar;