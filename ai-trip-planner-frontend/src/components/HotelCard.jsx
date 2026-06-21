import React, { use, useEffect, useState } from 'react'
import { getGenerateImages } from '../UnsplashServises'

const HotelCard = ({ hotel, destination }) => {

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${hotel.name} ${hotel.area} ${destination}`
  )}`




  const [hotelImage, setHotelImage] = useState("")
  useEffect(() => {

    const fetchImage = async () => {

      const url = await getGenerateImages(`${hotel.name}${destination} hotel room`)
      setHotelImage(url)
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