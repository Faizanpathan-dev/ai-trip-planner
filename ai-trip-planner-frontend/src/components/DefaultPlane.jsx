const DefaultPlan = {
  destination: "Pune",
  startDate: "2026-05-24",
  endDate: "2026-05-26",
  budget: 15000,

  days: [
    {
      dayNumber: 1,
      title: "Arrival and Heritage Walk",
      activities: [
        "Arrive in Pune and check into your hotel.",
        "Visit Shaniwar Wada and explore nearby local markets.",
        "Try Misal Pav or Vada Pav for an evening snack."
      ]
    },
    {
      dayNumber: 2,
      title: "Fort and Nature Day",
      activities: [
        "Take a morning trip to Sinhagad Fort.",
        "Enjoy local food near the fort.",
        "Visit Saras Baug or Parvati Hill in the evening."
      ]
    },
    {
      dayNumber: 3,
      title: "Culture and Departure",
      activities: [
        "Visit Aga Khan Palace.",
        "Explore FC Road or JM Road for shopping.",
        "Check out and depart from Pune."
      ]
    },
    

  ],

  hotelSuggestions: [
    {
      name: "Hotel Aurora Towers",
      area: "Camp, Pune",
      estimatedPricePerNight: 3200,
      reason: "Good location with easy access to popular Pune attractions.",
      bookingTip: "Compare prices on booking websites before confirming.",
      bookingUrl: "https://www.google.com/search?q=book+Hotel+Aurora+Towers+Pune"
    },
    {
      name: "The Central Park Hotel",
      area: "Bund Garden Road, Pune",
      estimatedPricePerNight: 2800,
      reason: "Comfortable stay near central Pune and transport options.",
      bookingTip: "Check recent reviews and cancellation policy.",
      bookingUrl: "https://www.google.com/search?q=book+The+Central+Park+Hotel+Pune"
    }
  ],

  budgetBreakdown: {
    hotel: 6000,
    food: 3000,
    transport: 2500,
    activities: 2000,
    total: 15000
  },

 foodSuggestions: [
    { text: "Try Saoji Chicken Curry, a signature fiery Nagpur dish.", imageKeyword: "Saoji chicken curry" },
    { text: "Have Tarri Poha for breakfast, a Nagpur staple.", imageKeyword: "Tarri Poha breakfast" },
    { text: "Try Santra Barfi made from famous Nagpur oranges.", imageKeyword: "Santra Barfi sweet" }
],
transportSuggestions: [
    { text: "Use auto-rickshaws for short distance travel.", imageKeyword: "auto rickshaw India" },
    { text: "Use Ola or Uber for comfortable city travel.", imageKeyword: "taxi cab city" },
    { text: "Use PMPML buses for budget-friendly travel.", imageKeyword: "city bus India" }
],


  travelTips: [
    "Carry water while sightseeing.",
    "Start early for Sinhagad Fort.",
    "Keep some cash for small shops and local food stalls."
  ]
}

export default DefaultPlan