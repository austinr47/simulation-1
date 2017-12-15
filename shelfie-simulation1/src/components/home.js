import React, { Component } from 'react';
import '../../src/App.css';
import {Link, Route} from 'react-router-dom';
// import A from './shelf-a';
// import B from './shelf-b';




class Home extends Component {

    render() {
        return (
            // simulation core 54C
            <div>
            <div className='main-header dark-red-bgc'>
            <div className='header-content'>
            {/* simulation core 54E and 54G */}
              <img src="https://github.com/DevMountain/simulation-1/blob/master/assets/logo.png?raw=true" alt="logo" className="header-logo logo"/>
              <span className="header-text white open-sans-bold">
              SHELFIE
              </span>
            </div>
          </div>
            <div className='buttons'>
            <div className='button-container light-red-bgc open-sans-bold white'>
            {/* simulation core 54D */}
              <section className='main-buttons'>
              {/* simulation 1 42E */}
              <Link to='/bins/A' >Shelf A</Link>
              </section>
            </div>
            <div className='button-container light-red-bgc open-sans-bold white'>
              <section className='main-buttons'>
              <Link to='/bins/B'>Shelf B</Link>
              </section>
            </div>
            <div className='button-container light-red-bgc open-sans-bold white'>
              <section className='main-buttons'>
              <Link to='/bins/C'>Shelf C</Link>
              </section>
            </div>
            <div className='button-container light-red-bgc open-sans-bold white'>
              <section className='main-buttons'>
              <Link to='/bins/D'>Shelf D</Link>
              </section>
              {Route}
            </div>
          </div>
          </div>
        )
    }


}


export default Home;