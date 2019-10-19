import React, { Component } from 'react';

class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Content: '',
      Date: ''
    };
  }

  setInitialState() {
    this.setState({ Title: this.props.title, Content: this.props.content, Date: this.props.date });
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
      <div className='news-card'>
        <div className='news-card-text'>
          <h2>{this.state.Title}</h2>
          <h3>{this.state.Date}</h3>
          <div >{this.state.Content}</div>
        </div>
      </div>
    )
  }
}

export default NewsCard;