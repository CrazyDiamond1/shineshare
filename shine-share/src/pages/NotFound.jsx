import React, { Component } from 'react';
import Header from '../components/Header';
import Popular from '../components/Popular';
import NotFoundComponent from '../components/NotFoundComponent.jsx';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

class NotFound extends Component {
  render() {
    return (
      <div id="page-container">
        <Header/>
      <div id="content-wrap">
        <NavBar/>
        <NotFoundComponent content="PAGE NOT FOUND" date="10/15/19"/>
        <Footer/>
        </div>
      </div>
    )
  }
}

export default NotFound;