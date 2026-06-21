import React from 'react'

const BudgetBreakdown = ({ budget }) => {
    if (!budget) {
    return null;
  }
  let getpercentage=(amount) => {
    
    return Math.round((amount/budget.total)*100)
  }
  return (
      <div className='budget-section'>
          <h3>Budget Breakdown</h3>
      <div className="budget-list">
        
        <div className="budget-row">
          <span>Hotel</span>
          <strong>₹{budget.hotel}</strong>

          <div className='bgline'>
            <div className='line' style={{ width:`${getpercentage(budget.hotel)}%`}}></div>  
          </div>
        </div>

        <div className="budget-row">
          <span>Food</span>
          <strong>₹{budget.food}</strong>
           <div className='bgline'>
            <div className='line' style={{ width:`${getpercentage(budget.food)}%`}}></div>  
          </div>
        </div>

        <div className="budget-row">
          <span>Transport</span>
          <strong>₹{budget.transport}</strong>
           <div className='bgline'>
            <div className='line' style={{ width:`${getpercentage(budget.transport)}%`}}></div>  
          </div>
        </div>

        <div className="budget-row">
          <span>Activities</span>
          <strong>₹{budget.activities}</strong>
           <div className='bgline'>
            <div className='line' style={{ width:`${getpercentage(budget.activities)}%`}}></div>  
          </div>
        </div>

        <div className="budget-row budget-total">
          <span>Total</span>
          <strong>₹{budget.total}</strong>
           <div className='bgline'>
            <div className='line' style={{ width:`${getpercentage(budget.total)}%`}}></div>  
          </div>
        </div>

          </div>
         
        
         
      </div>

      
  )
}

export default BudgetBreakdown