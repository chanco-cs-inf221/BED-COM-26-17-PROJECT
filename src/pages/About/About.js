import React, { Component } from 'react';
import './About.css';
class  About extends Component {
    render(){
        return(
            <div className="container">
                <div className="head">
                    <h2 className="title"> JAMBO SHOPPING BUDGET TRACKER APP</h2>  
                </div>
             <div> 
                <p>
                <h3 className="subtitle">THE FUNCTIONALITY OF MY APP</h3>
                <ol>
                    <li>Enter the budget first and submit</li>
                    <li>Then followed by expenses and amount then add</li>
                    <li>If add an item the field will be clear the add another until all you want to purchase</li>
                    <li>You will the remaining amount money on balance</li>
                </ol>
                </p>
                </div> 
            </div>    
           
        )
    }
}
export default About; 