import {langObj} from '../../js/langObj.js';
import {unitsObj} from '../../js/unitsObj.js';
import {settings} from './settings.js';
import {setCity} from './setCity.js';
import {createItem, createDay} from './createItem.js';

let titleCity = document.querySelector('.card-header__primary'),
    titleTime = document.querySelector('.card-header__secondary'),
    weatherData = document.querySelector('.hourly-weather__data');

export async function setHourlyPageData() {
    setCity(titleCity);
    let requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${settings.lat}&lon=${settings.lon}&appid=400da6eb26c3c55fb657e09c050e94bd&units=${settings.units}&lang=${settings.lang}&exclude=minutely,alerts,daily`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        clearPreviousData ();
        setResponseTime(responseData);
        setData(responseData);
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}

function setData (responseData) {
    let dateCash = null;
    responseData.hourly.forEach((hourData)=> {
        let item = createItem();
        let date = new Date(hourData.dt*1000);
        if (date.getDate() != dateCash) {
            dateCash = date.getDate();
            weatherData.append(createDay(date));
        }
        item.querySelector('.hourly-weather__item-time').textContent = `${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(hourData.dt*1000))}`
        item.querySelector('.hourly-weather__item-temp').textContent = `${Math.round(hourData.temp)}°`;
        item.querySelector('.hourly-weather__item-conditions-img').setAttribute('src', `icons/openweathermap/${hourData.weather[0].icon}.svg`);
        item.querySelector('.hourly-weather__item-conditions-descr').textContent = `${hourData.weather[0].description[0].toUpperCase() + hourData.weather[0].description.slice(1)}`;
        item.querySelector('.hourly-weather__item-pop-descr').textContent = `${Math.round(hourData.pop*100)} %`;
        item.querySelector('.hourly-weather__item-wind-arrow-img').style.transform = `rotate(${hourData.wind_deg}deg)`;
        item.querySelector('.hourly-weather__item-wind-descr').textContent = `${hourData.wind_speed} ${unitsObj[settings.units][settings.lang].speed}`;
        item.querySelector('.hourly-weather__item-feels-descr').textContent = `${Math.round(hourData.feels_like)}°`;
        item.querySelector('.hourly-weather__item-pressure-descr').textContent = `${Math.round(hourData.pressure/1.333)} ${langObj[settings.lang].mmHg}`;
        item.querySelector('.hourly-weather__item-humidity-descr').textContent = `${hourData.humidity} %`;
        item.querySelector('.hourly-weather__item-cloudiness-descr').textContent = `${hourData.clouds} %`;
        item.querySelector('.hourly-weather__item-dewPoint-descr').textContent = `${hourData.dew_point}°`;
        item.querySelector('.hourly-weather__item-uv-descr').textContent = `${Math.round(hourData.uvi)} ${langObj[settings.lang].from} 10`;
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