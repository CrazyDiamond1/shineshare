import React, { Component } from 'react';
import Header from '../components/Header';
import Popular from '../components/Popular';
import News from '../components/News';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div id="page-container">
      <div id="content-wrap">
        <Header/>
        <Popular/>
        <News/>
        <Footer/>
        </div>
      </div>
    )
  }
}

export default Home;