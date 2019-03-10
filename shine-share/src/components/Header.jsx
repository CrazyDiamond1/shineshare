import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='login-stuff'>
          <button>Register</button>
        </div>
        <img className='banner' alt='' src={require('../images/ShineShareTemp.png')} />
        <NavBar/>
      </div>
    )
  }
}

export default Header;