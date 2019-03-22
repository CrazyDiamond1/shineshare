import React, { Component } from 'react';
import Header from './components/Header';
import Popular from './components/Popular';
import News from './components/News';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Popular/>
        <News/>
      </div>
    )
  }
}
export default Home;