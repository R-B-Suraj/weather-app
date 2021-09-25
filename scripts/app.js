// code logic dom manipulation


// we need to update image , icon.. for that we need card class
// updating details... we need detail class

const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');



const updateUI = (data)=>{

    console.log(data);
    // check console... we have a WeatherIcon property  1-44.. so we can have 44 numbered images  to match src string for img
    // IsDayTime


    
    const {cityDetail, weather} = data;


    // update details template... name , weather, temperature
    details.innerHTML = `
    <h5 class="my-3">${cityDetail.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;



    // update icon
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);



    // update the night/day and icon images
    let timeSrc = null;

    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    }
    else{
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);







    // remove the d-none class if present
    if(card.classList.contains('d-none'))
     card.classList.remove('d-none');

};














// update the weather

 // return {
    //     cityDetail: cityDetail,
    //     weather: weather
    // };

    // object sorthand notation.....
    // if property name  is same   as   value name... we can write once
    // return {cityDetail,weather};


const updateCity = async (city_name)=>{

    const cityDetail = await getCity(city_name);
    // we wait to get the city code

    const weather = await getWeather(cityDetail.Key);
    // we can use these function of forecast.js  because in html file
    // before this(app.js) file  forecast is already linked.. 
    // so we have access to these

    return {cityDetail,weather};

};










const cityform = document.querySelector('form');

cityform.addEventListener('submit', e =>{
    e.preventDefault();


    // get city data
    const city_name = cityform.city.value.trim();
    // city is the name of the input
    cityform.reset();

    // update the data with new city..
    updateCity(city_name)
    .then(data=>{
        console.log(data);
        
        updateUI(data);

    })
    .catch(err => console.log(err));

});
