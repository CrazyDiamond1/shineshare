import React, { Component } from 'react';
import Header from './components/Header';
import Popular from './components/Popular';
import News from './components/News';
import Footer from './components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Popular/>
        <News/>
        <Footer/>
      </div>
    )
  }
}

export default Home;