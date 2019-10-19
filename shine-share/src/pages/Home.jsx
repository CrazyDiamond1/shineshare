import React, { Component } from 'react';
import Header from '../components/Header';
import Popular from '../components/Popular';
import News from '../components/News';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

class Home extends Component {
  render() {
    return (
      <div id="page-container">
        <Header/>
      <div id="content-wrap">
        <NavBar/>
        <Popular/>
        <News/>
        <Footer/>
        </div>
      </div>
    )
  }
}

export default Home;