import React, { Component } from 'react';

class NotFoundComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Content: '',
      Date: ''
    };
  }

  setInitialState() {
    this.setState({ Content: this.props.content, Date: this.props.date });
  }

  //Check Correct info is being loaded
  // handleEvent() {
  //   console.log(this.props);
  // }

  //render at startup
  componentDidMount() {
    this.setInitialState();
    // this.handleEvent();
  }

  render() {
    return (
      <div className='not-found-body'>
        <div className='not-found-text'>
          <h1>{this.state.Date}</h1>
          <div >{this.state.Content}</div>
        </div>
      </div>
    )
  }
}

export default NotFoundComponent;