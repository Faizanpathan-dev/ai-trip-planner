import React, { use, useEffect, useState } from 'react'
import { getGenerateImages } from '../UnsplashServises'

const HotelCard = ({ hotel, destination }) => {

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${hotel.name} ${hotel.area}${destination}`
  )}`



  const [hotelImage, setHotelImage] = useState("")
  useEffect(() => {

    const fetchImage = async () => {
      const hotelFallback = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop" // hotel image fallback
      let  url = await getGenerateImages(`${hotel.name} ${destination}  hotel `)



 if (!url) {
      url = await getGenerateImages(`${destination} luxury hotel`);
    }

    if (!url) {
      url = await getGenerateImages("hotel room");
    }

      
      setHotelImage(url || hotelFallback)
    }
    fetchImage();

  }, [hotel, destination])
  return (
    <div className='hotel-card'>
      <div>
        {hotelImage && <img src={hotelImage} alt="Hotel" style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover" }} />}
      </div>
      <div className='hotel-info'>
        <h4>{hotel.name}</h4>
        <p>{hotel.area}</p>
        <p>{hotel.reason}</p>
        <p className="booking-tip">{hotel.bookingTip}</p>

      </div>

      <div className='hotel-action'>

        <p className='hotel-price'>{hotel.estimatedPricePerNight}/ night</p>
        <a href={hotel.bookingUrl} target='_blank' >Book Hotel</a>
        <br />
        <a href={mapUrl} target='_blank'>Search on Maps</a>
      </div>

    </div>
  )
}

export default HotelCard
