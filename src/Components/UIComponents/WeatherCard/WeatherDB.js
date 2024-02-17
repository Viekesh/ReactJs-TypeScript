// const weatherData = [
//     {
//         id: 1,
//         city: "WashingtonDC",
//         minTemp: 40,
//         maxTemp: 61,
//         current: 45,
//         condition: "Cloudy with a chance of rain"
//     },
//     {
//         id: 1,
//         city: "Delhi",
//         minTemp: 35,
//         maxTemp: 65,
//         current: 48,
//         condition: "Cloudy with a chance of raim"
//     },
//     {
//         id: 1,
//         city: "Mumbai",
//         minTemp: 42,
//         maxTemp: 66,
//         current: 55,
//         condition: "Cloudy with a chance of raim"
//     },
// ]



// export default city =>
//     Promise.resolve(
//         city
//             ? weatherData.filter(c => c.city === city)[0]
//             : Promise.resolve(weatherData[0])
//     );





const weatherData = [
    {
        city: "New York",
        minTemp: 40,
        maxTemp: 65,
        current: 50,
        conditions: "Cloudy with a chance of rain"
    },
    {
        city: "Los Angeles",
        minTemp: 42,
        maxTemp: 52,
        current: 49,
        conditions: "Clear Sky"
    }
];

export default city =>
    Promise.resolve(
        city
            ? weatherData.filter(c => c.city === city)[0]
            : Promise.resolve(weatherData[0])
    );
