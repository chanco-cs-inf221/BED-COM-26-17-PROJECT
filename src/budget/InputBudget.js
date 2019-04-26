import React, { Component } from 'react';
import { BudgetConsumer } from '../store';



class InputBudget extends Component{

    state = {
        budget : ''
        
    }
       handleInput =(e) =>{
           
           this.setState({ budget: e.target.value});
           
       }
       handleSubmit = (dispatch, e) =>{
           e.preventDefault()
           
           dispatch({
               type: "ADD_BUDGET",
               budget: this.state.budget
           })

 //clear budget input field after submitting
           this.setState({budget: ''});
       }

    render(){
        return(
           
            <BudgetConsumer>
                {value => {
 
                
                const {dispatch} = value
               
                return(
            <div className="card card-body mb-3" >
               <label>Your Budget</label>
               <form className="form-inline">
                <input
                    onChange={this.handleInput}
                    value={this.state.budget}
                    className="form-control mr-2"
                    type="number"
                    name="budget"
                    placeholder="Enter budget amount"
                    
                />
                  
                   <button onClick={this.handleSubmit.bind(this, dispatch)} className="btn btn-dark" btn="block">
                   Submit
                   </button>
               </form>

            </div>
            )
           
                }}
            </BudgetConsumer>
            
        )
    }
}

export default InputBudget;