import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class Register extends Component {
  render() {
    return (
      <div>
        <Header/>
        <form>
          <p>Register </p>
          <input type='text' id='username' placeholder='Username'/> <br/>
          <input type='password' id='password' placeholder='Password'/><br/>
          <input type='password' id='confirm-password' placeholder='Confirm Password'/><br/>
          
          </form>
        <Footer/>
      </div>
    )
  }
}

export default Register;