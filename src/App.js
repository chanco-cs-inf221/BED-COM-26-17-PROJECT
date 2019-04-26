import React, { Component } from 'react';
import Navbar from './/navbar';
import Budget from './budget/Budget';
import Home from './pages/home/Home';
import Contacts from './pages/contact/Contacts';
import About from './pages/About/About';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

//component of all applications
 
class App extends Component {



  render() {
    return (

      // on router tag is where navigation defined
      // on budget that is where budget app properties found 
     <div className="container">
      <Router>
      
        <div className="App">
      
            <div className="navigation">
       
       <ul>
            <li> <NavLink to="/" exact activeStyle={ 
               {color : 'green'} 
               }>Home</NavLink>
           </li>
           <li>
             <NavLink to="/about/" exact activeStyle={
                {color : 'green'} 
                }>About</NavLink>
            </li>
            <li>
             <NavLink to="/Contacts/" exact activeStyle={ 
               {color : 'green'} 
               }>Contacts</NavLink>
            </li>
            <li>
             <NavLink to="/shoppingbudgetapp/" exact activeStyle={ 
               {color : 'green'} 
               }>Budget App</NavLink>
            </li>
        </ul>
      
         </div> 

          


           <Route path= "/" exact strict render={ ()=> {
             return(
               <Home/>
             )
           } } />
           <Route path="/about/" exact strict render={ ()=> {
             return(
               <div>
                   < About />
              </div>
             )
           } } />
           <Route path="/Contacts/" exact strict render={ ()=> {
             return(
               <div>
                 <Contacts/>
               </div>
             )
           } } />
           <Route path="/shoppingbudgetapp/" exact strict render= { ()=> {
             return(
            <div>
              <Navbar/>
            <div className="container my-5">
               <Budget />
            </div>
            </div>
               )
            
           } } />
            
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
