import React, { Component } from 'react';
import Card from './Card';

const POKEMONLIST = require('../pokemon');
const pokemon = POKEMONLIST.pokemon;
let num = 0;

class Popular extends Component {

  // loadPopularHunts() {
  //   var popular_hunts_list = document.getElementById('PopularHuntsList');
  //   var num = 5;
  //   const element = new Card();
  //   console.log(popular_hunts_list);
  //   console.log(element);
  //   for (var i = 0; i < num; i++) {
  //     popular_hunts_list.append(element);
  //   }
  // }

  // componentDidMount() {
  //   this.loadPopularHunts();
  // }

  render() {
    return (
      <div id='popular-hunts'>
        <h1>Popular Hunts</h1>
        {
          pokemon.map((pokemon) => {
            return(
            <Card key={num+=1} name={pokemon.species} gender={pokemon.gender} game={pokemon.region}/>
            )
          })}
        {/* <div id='PopularHuntsList'>
          <Card name={'unown'} gender={'h'} game={'R/B/Y'}/>
        </div> */}
      </div>
    )
  }
}

export default Popular;