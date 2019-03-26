import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Game: '',
      Gender: '',
      Image: '',
      BackupImage: ''
    };

    this.delta.bind(this);
  }

  delta(url) {
    this.setState({ Image: url });
  }

  setInitialState() {
    this.setState({ Name: this.props.name, Gender: this.props.gender, Game: this.props.game });
  }

  //Check Correct info is being loaded
  // handleEvent() {
  //   console.log(this.props);
  // }

  //Check if Image Exists using a promise
  testImage(url) {
    // Define the promise
    const imgPromise = new Promise(function imgPromise(resolve, reject) {
      // Create the image
      const imgElement = new Image();
      // When image is loaded, resolve the promise
      imgElement.addEventListener('load', function imgOnLoad() {
        resolve(this);
      });
      // When there's an error during load, reject the promise
      imgElement.addEventListener('error', function imgOnError() {
        reject();
      })
      // Assign URL
      imgElement.src = url;
    });

    return imgPromise;
  }

  setImage(parent) {
    //Delcare impportant variables
    let gender = this.props.gender;
    let name = this.props.name;
    let imageLink = '';
    let backupImageLink = ';'

    //search for image
    if (gender !== '!' && gender !== '?' && gender !== 'm' && gender !== 'none') {

      imageLink = `https://play.pokemonshowdown.com/sprites/xyani-shiny/${name.toLowerCase()}-${gender.toLowerCase()}.gif`;

      backupImageLink = `https://play.pokemonshowdown.com/sprites/xyani-shiny/${name.toLowerCase()}.gif`;
    }
    else if (this.props.gender === '!'){
      imageLink = `https://play.pokemonshowdown.com/sprites/xyani-shiny/${name.toLowerCase()}-exclamation.gif`;
    }
    else if (this.props.gender === '?'){
      imageLink = `https://play.pokemonshowdown.com/sprites/xyani-shiny/${name.toLowerCase()}-question.gif`;
    }
    else{
      imageLink = `https://play.pokemonshowdown.com/sprites/xyani-shiny/${name.toLowerCase()}.gif`;
    }
    this.setState({ Image: imageLink });

    //Check if Image Exists
    this.testImage(imageLink).then(
      function fulfilled(img) {
        console.log('That image is found and loaded', img);
        parent.delta(imageLink);
      },

      function rejected() {
        console.log('That image was not found');
        parent.delta(backupImageLink);
      }
    );
  }

  //render at startup
  componentDidMount() {
    this.setInitialState();
    this.setImage(this);
    // this.handleEvent();
  }

  render() {
    return (
      <div className='popular-hunts-card'>
        <div className='popular-hunts-card-text'>
          <div >{this.state.Name}</div>
          <div >{this.state.Game}</div>
        </div>
        <img src={this.state.Image} />
      </div>
    )
  }
}

export default Card;