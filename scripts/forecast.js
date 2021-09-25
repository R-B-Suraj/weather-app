// js for interacting accuweather api
// developer.accuweather.com



const api_key = 'k5wK6TqHYfpmHfClcFAlqdMYLAqZdAK4' ;



// get weather condition

const getWeather = async (id)=>{
const base_url = 'http://dataservice.accuweather.com/currentconditions/v1/'
const query = `${id}?apikey=${api_key}`;
// id is not start of the query  the apikey is so we put ? there

const response = await fetch(base_url+query);
const data = await response.json();

console.log(data);

return data[0];



};


// get city information

const getCity = async (city)=>{

    const base_url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    // base url of api end point.. we also required query parameters
    // whenever we see ? in url  means we are adding query parameters to the end parameters
    // see the api parameters in the website
    const query = `?apikey=${api_key}&q=${city}`
    // & means another query parameter

    const response = await fetch(base_url+query);
    const data = await response.json();

    console.log(data);
    // many data comes.. 1st one is the closest match

    return data[0];
    // we get a Key = citycode of a location

};


