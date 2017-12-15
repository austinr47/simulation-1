import React, { Component } from 'react';
// import {Link, Switch, Route} from 'react-router-dom';



export default class B extends Component {

    render() {
        return (
            <div>
                <div className='main-header dark-red-bgc'>
            <div className='header-content'>
              <img src="https://github.com/DevMountain/simulation-1/blob/master/assets/logo.png?raw=true" alt="logo" className="header-logo logo"/>
              <span class="header-text white open-sans-bold">
              SHELFIE
              </span>
            </div>
          </div>
                <div className='buttons'>
                <div className='button-container light-red-bgc open-sans-bold white'>
                <section className='main-buttons'>
               <h3>Bin 1</h3>
               </section>
               </div>
               <div className='button-container light-red-bgc open-sans-bold white'>
                <section className='main-buttons'>
                <h3>Bin 2</h3>
                </section>
                </div> 
                <div className='button-container light-red-bgc open-sans-bold white'>
                 <section className='main-buttons'>                 
                <h3>Bin 3</h3>                 
                </section>
                </div>
                <div className='button-container light-red-bgc open-sans-bold white'>
                 <section className='main-buttons'>                 
                <h3>Bin 4</h3>                 
                </section>
                </div>
                <div className='button-container light-red-bgc open-sans-bold white'>
                 <section className='main-buttons'>                 
                <h3>Bin 5</h3>                 
                </section>
                </div>
                {/* <Switch>
                    <Route path='/about/history' component={History} />
                    <Route path='/about/contact' component={Contact} />
                    <Route path='/about' render={() => 
                        <div>
                            <h1 className='title'>About WestSide University:</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque condimentum ultrices dignissim. Sed a tempor ligula, vel luctus sapien. Mauris vehicula rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus, erat libero tempor arcu, condimentum facilisis tellus lectus ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat ex. Ut justo neque, varius aliquet erat vel, scelerisque convallis lacus. Mauris semper lorem mauris, sed dignissim eros consectetur nec.</p>
                        </div>                    
                    } />
                </Switch> */}
                </div>
            </div>
        )
    }
    
}