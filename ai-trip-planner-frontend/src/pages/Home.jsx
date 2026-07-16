
import React, { useState, useEffect } from 'react'
import TripForm from '../components/TripForm'
import TripResult from '../components/TripResult'
import DefaultPlan from '../components/DefaultPlane'
import axios from 'axios'

import img from '../assets/background.png'

const Home = () => {

  const [plan, setplan] = useState(DefaultPlan)

  const [load, setLoad] = useState(false)

  const [history, setHistory] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // useEffect(() => {

  //   const fetchHistory = async () => {

  //     try {

  //       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/ai/history`)

  //       setHistory(res.data)
  //       // console.log(res.data);

  //     }
  //     catch (error) {

  //       console.log(error);


  //     }
  //   }
  //   fetchHistory()

  // }, [])


  const handleHistoryClick = (trip) => {
    const parsedPlan = JSON.parse(trip.planJson)
    setplan(parsedPlan)
  }

  return (

    <div className='home-page'>

      <div className='left-panel'>

        <TripForm setPlan={setplan} load={load} setLoad={setLoad} />

        {/* <div >

          {history.length > 0 && <h3>🕐 Previous Searches </h3>}
          {history?.map((trip) => {
            return <div style={{cursor:'pointer'}} key={trip.id} onClick={()=>handleHistoryClick(trip)}>

              <span>📍 {trip.destination}</span>
              <span>💰 ₹{trip.budget}</span>
              <small>
                {new Date(trip.createdAt).toLocaleDateString()}
              </small>
            </div>
          })}


        </div> */}
      </div>

      <div className='right-panel' >

        <TripResult plan={plan} load={load} setLoad={setLoad} />


      </div>

    </div>

  )
}


export default Home