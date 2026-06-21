
import React, { useState } from 'react'
import TripForm from '../components/TripForm'
import TripResult from '../components/TripResult'
import DefaultPlan from '../components/DefaultPlane'

import img from '../assets/background.png'

const Home = () => {

  const [plan, setplan] = useState(DefaultPlan) // make defaultplan when we want intial page with plan 

  const [load,setLoad] = useState(false)
  
  return (

    <div  className='home-page'>

       <div className='left-panel' >

        <TripForm setPlan={setplan} load={load} setLoad={setLoad}/>
        <div >

      </div>
      </div>

      <div className='right-panel' >

       <TripResult plan={plan} load={load} setLoad={setLoad} /> 
                
      </div>
      
    </div>

  )
}


export default Home