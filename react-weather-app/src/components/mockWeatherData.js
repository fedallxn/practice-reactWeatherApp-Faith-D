//needed to ad id's so it was easier for react to map over, also changed it to an array instead of an object
const weatherData = [ 
    {
        id: 1,
        name: "New York",
        summary: "Sunny, 25°C",
        details: "Clear skies throughout the day with mild temperatures."
    },
    {
        id: 2,
        name: "London",
        summary: "Cloudy, 18°C",
        details: "Overcast with occasional light rain in the afternoon."
    },
    { 
        id: 3,
        name: "Tokyo",
        summary: "Rainy, 22°C",
        details: "Continuous rain expected throughout the day."
    }
];

export default weatherData;