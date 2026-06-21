import React, { useState } from 'react'
import axios from "axios"

const TripForm = ({ setPlan ,load, setLoad}) => {
    
    const [form, setForm] = useState({
        destination: "" ,
        startDate: "" ,
        endDate: "" ,
        budget: "" ,
    
    })

    

    let[err,setErr] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();

        setPlan(null)
        setLoad(true)
        setErr("")

        try {

            let response = await axios.post("http://localhost:8080/api/ai/plan", {
                destination: form.destination,
                startDate: form.startDate,
                endDate: form.endDate,
                budget: Number(form.budget)

            })


setPlan(response.data)

        }
        catch (err) {
            setErr(err.response?.data?.message || "Failed to generate trip plan")
        } finally {
            setLoad(false)
        }


    }

    let handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
  return (
      <div className='form-card'>
          <h1 >Ai Trip Planner</h1>
          <p >Plan your trip with AI in seconds.</p>
          <form onSubmit={handleSubmit}>
              
              <label >Destination</label>
              <input type='text' placeholder='Destination' name="destination" value={form.destination} onChange={handleChange} />

            <label>Start Date</label>
          <input type='date' placeholder='startDate' name="startDate" value={form.startDate} onChange={handleChange} />
          
             <label htmlFor="">End Date</label> 
          <input type="date" placeholder="endDate" name="endDate" value={form.endDate} onChange={handleChange} />

              <label htmlFor="">Budget</label>
          <input type='number' placeholder='Budget' name="budget" value={form.budget} onChange={handleChange} />
              <button disabled={load} type='submit' > {load ? "Generating..." : "Generate trip"} </button>
                  
          </form>

          {err && <p className='error-message'>{err}</p>}

      </div>
      
  )
}

export default TripForm