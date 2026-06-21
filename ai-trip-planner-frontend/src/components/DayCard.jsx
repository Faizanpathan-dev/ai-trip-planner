import React from 'react'

const DayCard = ({day}) => {
  return (
      <div className='day-card'>
          <div className="day-badge">
        <span>Day</span>
        <strong>{day.dayNumber}</strong>
      </div>
          <div className='day-content'>
               <h4>{day.dayNumber}: {day.title}</h4>

          <ul>
              {
                  day.activities?.map((activity,index) =>{
                      return <li key={index}>{activity}</li>
                  })
             }
          </ul>
         </div>
    </div>
  )
}

export default DayCard