import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let navList = ["RANDOM HUNT",
  "POKEMON",
  "HOME",
  "ABOUT",
  "CONTACT US"];

let navIndex = 0;

class NavBar extends Component {

  wheelArray(currentpage){
    var i;
    navIndex = 0
    var newList = navList;
    // var goodSpot = false;
    // if(currentpage === ''){
    //   currentpage = 'HOME'
    // }
    // while(!goodSpot){
    //   if(!navList.includes(currentpage) || navList[2].includes(currentpage)){
    //     goodSpot = true;
    //   }
    //   else{
    //     var temp = newList[0];
    //     for (i = 0; i < newList.length; i++ ){
    //       if(i+1 < newList.length){
    //         //take content
    //         //temp = newList[i];
    //         // console.log("temp = ",temp);
    //         newList[i] = newList[i+1];
    //         // newList[i - 1] = temp;
    //         if(newList[2].includes(currentpage)){
    //           goodSpot = true;
    //         }
    //       }
    //       else{
    //         newList[i] = temp;
    //         //temp = null;
    //       }
    //     }
    //   }
    // }
    // //console.log(newList);
    return newList;
  }

  getCurrentPageName(){
    var full = window.location.href;
    var arrayURL = full.split('/');
    var page = arrayURL[arrayURL.length - 1].toUpperCase().replace('-',' ');
    //console.log(page);

    return page;
  }

  componentDidMount(){
    // console.log(navList);
    //navList = this.wheelArray("RANDOM");
  }
  render() {
    return (
      <div>
        <div className='nav-center'>
          <div className='large-center'>
            <div className='small-center'>
              <div className='large-logo'/>
            </div>
          </div>
        </div>
        <ul className='navbar'>
          { 
            this.wheelArray(this.getCurrentPageName()).map((element) => {
              var link;
              var key;
              var page = this.getCurrentPageName();
              if (element === "HOME"){
                link = '/';
              }
              else{
                var element2 = element.replace(' ', '-').toLowerCase();
                link = element2.toString();
                link = '/' + link
              }
              key=navIndex.toString();
              var cName = 'navbar-item '+('navItem' + navIndex.toString());
              if(page === element || page === '' && element === "HOME"){
                cName += ' navSelected'
              }
              navIndex++;
              return(<Link to={link} key={key} className={cName}>{element}</Link>);
            })
            
            /* <Link to='/' className='navbar-item'>Home</Link>
          <Link to='/pokemon' className='navbar-item'>Pokemon</Link>
          <Link to='/community' className='navbar-item'>Community</Link>
          <Link to='/about' className='navbar-item'>About</Link>
          <Link to='/contact' className='navbar-item'>Contact Us</Link> */
          }
        </ul>
      </div>
    )
  }
}

export default NavBar;