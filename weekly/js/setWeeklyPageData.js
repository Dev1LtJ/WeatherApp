//import {getGeolocation} from './getGeolocation.js';
import {langObj} from '../../js/langObj.js';
import {unitsObj} from '../../js/unitsObj.js';
import {settings} from './settings.js';
import {setCity} from './setCity.js';
//import {createItem} from './createItem.js';

let titleCity = document.querySelector('.card-header__primary'),
    titleTime = document.querySelector('.card-header__secondary'),
    weatherData = document.querySelector('.weekly-weather__data');

export async function setWeeklyPageData() {
    setCity(titleCity);
    let requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=53.90249633789063&lon=27.56148147583008&appid=400da6eb26c3c55fb657e09c050e94bd&units=${settings.units}&lang=${settings.lang}&exclude=minutely,alerts,daily`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        //clearPreviousData ();
        //setResponseTime(responseData);
        //setData(responseData);
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}

function setData (responseData) {
    responseData.hourly.forEach((hourData)=> {
        let item = createItem();
        item.firstElementChild.children[0].textContent = `${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(hourData.dt*1000))}`
        item.firstElementChild.children[1].textContent = `${Math.round(hourData.temp)}°`;
        item.firstElementChild.children[2].firstElementChild.setAttribute('src', `icons/openweathermap/${hourData.weather[0].icon}.svg`);
        item.firstElementChild.children[2].lastElementChild.textContent = `${hourData.weather[0].description[0].toUpperCase() + hourData.weather[0].description.slice(1)}`;
        item.firstElementChild.children[3].lastElementChild.textContent = `${Math.round(hourData.pop*100)} %`;
        item.firstElementChild.children[4].children[1].style.transform = `rotate(${hourData.wind_deg}deg)`;
        item.firstElementChild.children[4].children[2].textContent = `${hourData.wind_speed} ${unitsObj[settings.units][settings.lang].speed}`;

        item.lastElementChild.children[0].lastElementChild.lastElementChild.textContent = `${Math.round(hourData.feels_like)}°`;
        item.lastElementChild.children[1].lastElementChild.lastElementChild.textContent = `${Math.round(hourData.pressure/1.333)} ${langObj[settings.lang].mmHg}`;
        item.lastElementChild.children[2].lastElementChild.lastElementChild.textContent = `${hourData.humidity} %`;
        item.lastElementChild.children[3].lastElementChild.lastElementChild.textContent = `${hourData.clouds} %`;
        item.lastElementChild.children[4].lastElementChild.lastElementChild.textContent = `${hourData.dew_point}°`;
        item.lastElementChild.children[5].lastElementChild.lastElementChild.textContent = `${Math.round(hourData.uvi)} ${langObj[settings.lang].from} 10`;
        weatherData.append(item);
    });
}

function setResponseTime (responseData) {
    titleTime.textContent = `${langObj[settings.lang].asOf}: ${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(responseData.current.dt*1000))}`;
}

function clearPreviousData () {
    while (weatherData.firstChild) {
        weatherData.firstChild.remove();
    }
}