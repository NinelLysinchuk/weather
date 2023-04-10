
let oURLs = {
    'Kyiv' :'https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMoscow'
    ,'London' :'https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon'
    ,'Rome' :'https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin'
};

let eKyiv = document.querySelector('.city_name_kyiv')
 ,eKyivMin = eKyiv.querySelector('.city__min')
,eKyivMax = eKyiv.querySelector('.city__max')

,eLondon = document.querySelector('.city_name_london')
,eLondonMin = eLondon.querySelector('.city__min')
,eLondonMax = eLondon.querySelector('.city__max')

,eRome = document.querySelector('.city_name_rome')
,eRomeMin = eRome.querySelector('.city__min')
,eRomeMax = eRome.querySelector('.city__max')


function showWeather(){
Object.entries(oURLs).forEach(([city, url]) => {
    fetch(url)
        .then(response => response.json())
        .then(data =>{
         console.log(city + ':', data);
         eCity = document.querySelector('.city_name_' + city.toLowerCase())
         eMin = eCity.querySelector('.city__min')
         eMax = eCity.querySelector('.city__max')
           let aMin =  data.daily.temperature_2m_min;
           let aMax =  data.daily.temperature_2m_max;

           eMin.innerHTML = Math.round(aMin[0]) + '°C'
           eMax.innerHTML = Math.round((aMax[0])) + '°C'

        })
        .catch(error => console.error(error));
  });
}

showWeather()

/*

*/
