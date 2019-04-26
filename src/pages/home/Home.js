import React, { Component } from 'react';
import moment from 'moment';
import './home.css';
//create Home Component
class Home extends Component {
   //constructor of properties of clocks
    constructor(props){
        super(props);
        //format of date and clock month day year and hour minutes and seconds
        this.format='MMMM Do YYYY,h:mm:ss';
        this.state={
            now: moment().format(this.format)
        };
    }
    //time intervals
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                now:moment().format(this.format)
            })
        })
    }
    
    render(){
        
        return(
            //where what is seen in the page foung like this.state.now  will show time format
            <div>
                
                <h2 className="name">JAMBO CHIDZIWISANO BED/COM/26/17</h2>
             
                <div className="Clock">
                
                 {this.state.now }

                </div>
            <p>
                This is application that helps you to do budget with the money you have before purchasing items
            </p>
            </div>
            
        )
    }
}
export default Home; 