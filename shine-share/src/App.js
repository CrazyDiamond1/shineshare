import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound'
import './App.css';

class App extends Component {
  componentDidMount() {
    document.title = "Shine Share - Share Your Shiny Pokemon";
  }
  render() {
    return (
      <div className='main-app-container'>
        <BrowserRouter basename="/shineshare">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
