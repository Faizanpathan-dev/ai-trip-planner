import React, { useEffect, useState } from 'react'
import DayCard from './DayCard';
import HotelCard from './HotelCard';
import BudgetBreakdown from './BudgetBreakdown';
import SuggetionList from './SuggetionList';
import img from '../assets/bg3.png'
import { getGenerateImages } from '../UnsplashServises';

const TripResult = ({ plan, load }) => {

  const [cityurl, setCityUrl] = useState(null)

  useEffect(() => {

    const fetchImage = async () => {
      const response = await getGenerateImages(plan?.destination)
      setCityUrl(response)
    }
    fetchImage();

  }, [plan])

  const [count, setCount] = useState(60);

  useEffect(() => {
    if (load) {

      setCount(60)

      let timer = setInterval(() => {

        if (load) {
          setCount(prev => {
            if (prev < 1) {
              clearInterval(timer)
              return 0;

            }

            return prev - 1;
          })


        }

      }, 1000)

      return () => clearInterval(timer)



    }

  }, [load])




  if (load) {
    return (
      <div className='empty-result'>
        <h2>✨ AI is working its magic...</h2>
        <div className='spinner'></div>
        <p>Creating your perfect itinerary, finding hotels, and gathering local tips. Please wait!</p>


        <div className='countdown-timer'>
          ⏱️ Ready in approximately <strong>{count}s</strong>
        </div>

      </div>
    );
  }

  if (!plan) {
    return (
      <div className='empty-result'>
        <h2 style={{ fontSize: '40px', marginBottom: '10px' }}>🌍</h2>
        <h2>Ready for an adventure?</h2>
        <p>Fill out your destination, dates, and budget on the left to generate a complete AI-powered trip plan in seconds!</p>
        <div>

        </div>
      </div>
    );
  }


  return (
    <div className='trip-result' >

      <div className='trip-header' >
        {cityurl && <img className="trip-main-image" src={cityurl} alt='cityImage' />}


        <div>
          <h2>  {plan.destination} Trip</h2>
          <p>
            {plan.startDate} to {plan.endDate}

          </p>
          <p>Budget : ₹{plan.budget}</p>


        </div>

      </div>



      <div className='dashboard-grid'>

        <div className='day-wise-section' >

          <h3>Day Wise Plan</h3>

          <div className='itiernary-scroll' >
            {plan.days?.map((e) => {
              return <DayCard key={e.dayNumber} day={e} />
            })
            }
          </div>

        </div>

        <div className='side-column'>
          <div className='hotel-section'>
            <h3>Hotels</h3>

            <div className='hotel-scroll'>
              {plan.hotelSuggestions?.map((hotel, index) => {
                return <HotelCard
                  key={index}
                  hotel={hotel}
                  destination={plan.destination} />
              })}
            </div>

          </div>

        </div>
        <BudgetBreakdown budget={plan.budgetBreakdown} />

      </div>


      <div className='bottom-grid'>
        <SuggetionList item={plan.foodSuggestions} title="Food Sugetions" showImage={true} category="food" 
        defaultImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" />

        <SuggetionList item={plan.transportSuggestions} title="Transport Suggetions" showImage={true} category="transport"
        defaultImage = 
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400"
        />


        <SuggetionList item={plan.travelTips} title="Travel Tips" /></div>
    </div>
  )
}

export default TripResult