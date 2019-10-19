import React, { Component } from 'react';
import Header from '../components/Header';
import Popular from '../components/Popular';
import NotFoundComponent from '../components/NotFoundComponent.jsx';
import Footer from '../components/Footer';

class NotFound extends Component {
  render() {
    return (
      <div id="page-container">
      <div id="content-wrap">
        <Header/>
        <NotFoundComponent content="PAGE NOT FOUND" date="10/15/19"/>
        <Footer/>
        </div>
      </div>
    )
  }
}

export default NotFound;