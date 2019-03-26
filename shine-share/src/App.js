import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Register from './Register.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='main-app-container'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
