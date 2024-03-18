import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com/auto-complete/";

const options = {

    // we use here axios so we dont required "method: "GET""
    // method: 'GET',
    // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    // params: { q: 'desp', hl: 'en', gl: 'US' },
    params: { h1: "en", gl: "US"},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


export const fetchDataFromAPI = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.log(error.message);
    }
};



// const options = {
//     method: 'GET',
//     url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//     params: { q: 'desp', hl: 'en', gl: 'US' },
//     headers: {
//         'X-RapidAPI-Key': 'ac57528fd9msh81e3e542feddcfap1469bfjsn8baff5aa4d9a',
//         'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//     }
// };

// export const fetchDataFromAPI = () => {
//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     })
// };


