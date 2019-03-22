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
    this.setState({ Image: url});
  }

  setInitialState() {
    this.setState({ Name: this.props.name, Gender: this.props.gender, Game: this.props.game });
  }

  handleEvent() {
    console.log(this.props);
  }

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
    let imageLink = '';
    imageLink = `https://play.pokemonshowdown.com/sprites/xyani/${this.props.name.toLowerCase()}-${this.props.gender.toLowerCase()}.gif`;

    let backupImageLink = `https://play.pokemonshowdown.com/sprites/xyani/${this.props.name.toLowerCase()}.gif`;
    // console.log(this.backupImageLink);

    this.setState({ Image: imageLink });
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

  imageFix(image) {
    image.src = this.state.BackupImage;
  }

  componentDidMount() {
    this.setInitialState();
    this.setImage(this);
    this.handleEvent();
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