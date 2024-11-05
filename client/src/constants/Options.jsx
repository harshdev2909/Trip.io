export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole Travels in exploration',
        icon:'✈️',
        peole:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two Travels in exploration',
        icon:'🍷',
        peole:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        peole:'3 to 5 People'
    }
]
export const SelectBudgetOptios=[
    {
        id:1,
        title:"Cheap",
        desc:'stay conscious of costs',
        icon:"💴"
    },
    {
        id:2,
        title:"Moderate",
        desc:'Keep cost on the average side',
        icon:"💰",
    }
    ,
    {
        id:3,
        title:"Luxary",
        desc:'Not worry about Money',
        icon:"💸",
    }
];
export const AI_PROMPT = 'Generate Travel plan for location : {location} for {totalDays} days for {traveler} with a {budget} budget. Give me a hotel options with HotelName , Hotel address , price , hotel image url , geo coordinates , rating , discription  and suggest itineary with placeName, place Details , place image url , geo coordinates , ticket Pricing , rating , Time travel  each of the location for {totalDays} days with each day plan with best time to visit in JSON Format'