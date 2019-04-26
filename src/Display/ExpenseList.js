import React, { Component } from 'react';
import { BudgetConsumer } from '../store';



class ExpenseList extends Component{
    render(){
        return(
            <div className="card mt-5">
            <table className="table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                   <BudgetConsumer>
                       {value => {
                       
                        const expenseList = value.expenses.length > 0 ? (
                        value.expenses.map((expense, index)=>{
                          return ( 
                                <tr key={index}>
                                <td>{expense.title}</td>
                                <td>{expense.amount}</td>
                            </tr>
                            ) 
                        })
                        ) : (
                            <tr>
                                <td>No listed expense yet</td>
                            </tr>
                        )
                        return <tbody>{ expenseList }</tbody>
                       }
                     }
                   </BudgetConsumer>
                
            </table>

            </div>
        )
    }
}

export default ExpenseList