import {getGeolocation} from './getGeolocation.js';
import {langObj} from './langObj.js';
import {unitsObj} from './unitsObj.js';
import {settings} from './settings.js';
import {setCity} from './setCity.js';
import {setAirQualityData} from './air-quality.js';

//console.log(getGeolocation());
//current weather
let city = document.querySelector('.card-header__primary'),
    time = document.querySelector('.card-header__secondary'),
    temp = document.querySelector('.current-weather__temp-value'),
    phrase = document.querySelector('.current-weather__temp-phrase'),
    icon = document.querySelector('.current-weather__temp-img'),
    feels = document.querySelector('.current-weather__feels');
//current conditions
let windSpeed = document.querySelector('.current-conditions__wind-value'),
    windDir = document.querySelector('.current-conditions__wind-dir'),
    humidity = document.querySelector('.current-conditions__humidity-value'),
    pressure = document.querySelector('.current-conditions__pressure-value'),
    dewPoint = document.querySelector('.current-conditions__dewPoint-value'),
    uvIndex = document.querySelector('.current-conditions__uv-value'),
    moonPhase = document.querySelector('.current-conditions__moon-value'),
    cloudiness = document.querySelector('.current-conditions__cloudiness-value'),
    minMax = document.querySelector('.current-conditions__temp-value'),
    sunrise = document.querySelector('.current-conditions__sunrise-text'),
    sunset = document.querySelector('.current-conditions__sunset-text'),
    graphSun = document.querySelector('.current-conditions__graph-secondary');
//today, hourly & daily weather
let hourlyItems = document.querySelectorAll('.hourly-weather__details-item'),
    dailyItems = document.querySelectorAll('.daily-weather__details-item'),
    todayItems = document.querySelectorAll('.today-weather__details-item');

export async function setMainPageData () {
    setCity(city);
    setAirQualityData();
    let requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=53.90249633789063&lon=27.56148147583008&appid=400da6eb26c3c55fb657e09c050e94bd&units=${settings.units}&lang=${settings.lang}&exclude=minutely,alerts`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        setCurrentWeather (responseData);
        setTodayWeather (responseData);
        setCurrentConditions (responseData);
        setHourlyWeather (responseData);
        setDailyWeather (responseData);
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}

function setCurrentWeather (responseData) {
    time.textContent = `${langObj[settings.lang].asOf}: ${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(responseData.current.dt*1000))}`;
    temp.textContent = `${Math.round(responseData.current.temp)}°`;
    phrase.textContent = `${responseData.current.weather[0].description[0].toUpperCase() + responseData.current.weather[0].description.slice(1)}`;
    icon.setAttribute('src', `icons/openweathermap/${responseData.current.weather[0].icon}.svg`);
    feels.textContent = `${langObj[settings.lang].feelsLike}: ${Math.round(responseData.current.feels_like)}°`;
}

function setCurrentConditions (responseData) {
    windSpeed.textContent = `${responseData.current.wind_speed} ${unitsObj[settings.units][settings.lang].speed}`;
    windDir.style.transform = `rotate(${responseData.current.wind_deg}deg)`;
    humidity.textContent = `${responseData.current.humidity} %`;
    pressure.textContent = `${Math.round(responseData.current.pressure/1.333)} ${langObj[settings.lang].mmHg}`;
    cloudiness.textContent = `${responseData.current.clouds} %`;
    dewPoint.textContent = `${responseData.current.dew_point}°`;
    uvIndex.textContent = `${Math.round(responseData.current.uvi)} ${langObj[settings.lang].from} 10`;
    moonPhase.textContent = `${langObj[settings.lang].moon[moonphase(new Date(responseData.current.dt*1000))]}`;
    minMax.textContent = `${Math.round(responseData.daily[0].temp.max)}°/${Math.round(responseData.daily[0].temp.min)}°`;
    sunrise.textContent = `${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(responseData.daily[0].sunrise*1000))}`;
    sunset.textContent = `${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(responseData.daily[0].sunset*1000))}`;
    moveSun (responseData);
}

function setHourlyWeather (responseData) {
    let i = 1;
    hourlyItems.forEach((item) => {
        item.children[0].textContent = `${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(responseData.hourly[i].dt*1000))}`;
        item.children[1].textContent = `${Math.round(responseData.hourly[i].temp)}°`;
        item.children[2].setAttribute('src', `icons/openweathermap/${responseData.hourly[i].weather[0].icon}.svg`);
        item.children[3].lastElementChild.textContent = `${Math.round(responseData.hourly[i].pop*100)} %`;
        i++;
    });
    i = 1;
}

function setDailyWeather (responseData) {
    let i = 1;
    dailyItems.forEach((item) => {
        item.children[0].textContent = `${new Intl.DateTimeFormat(settings.lang, {weekday: 'short', day: '2-digit'}).format(new Date(responseData.daily[i].dt*1000))}`;
        item.children[1].textContent = `${Math.round(responseData.daily[i].temp.day)}°`;
        item.children[2].textContent = `${Math.round(responseData.daily[i].temp.night)}°`;
        item.children[3].setAttribute('src', `icons/openweathermap/${responseData.daily[i].weather[0].icon}.svg`);
        item.children[4].lastElementChild.textContent = `${Math.round(responseData.daily[i].pop*100)} %`;
        i++;
    });
    i = 1;
}

function setTodayWeather (responseData) {
    let firstHourData = (new Date (responseData.hourly[0].dt*1000)).getHours();
    let dayTimeIndex = getDayTime(firstHourData);
    let i = 0;
    todayItems.forEach((item, index)=> {
        if (index === dayTimeIndex) {
            item.children[0].style = 'font-weight: 400';
        }
        if (index < dayTimeIndex) {
            item.children[2].setAttribute('src', `icons/na.svg`);
            item.children[3].lastElementChild.textContent = '--';
        } else {
            item.children[2].setAttribute('src', `icons/openweathermap/${responseData.hourly[i].weather[0].icon}.svg`);
            item.children[3].lastElementChild.textContent = `${Math.round(responseData.hourly[i].pop*100)} %`;
            i = i + 6;
        }
    });
    todayItems.forEach((item, index) => {
        switch (index) {
            case 0:
                item.children[0].textContent = `${langObj[settings.lang].todays.morning}`;
                item.children[1].textContent = `${Math.round(responseData.daily[0].temp.morn)}°`;
                break;
            case 1:
                item.children[0].textContent = `${langObj[settings.lang].todays.afternoon}`;
                item.children[1].textContent = `${Math.round(responseData.daily[0].temp.day)}°`;
                break;
            case 2:
                item.children[0].textContent = `${langObj[settings.lang].todays.evening}`;
                item.children[1].textContent = `${Math.round(responseData.daily[0].temp.eve)}°`;
                break;
            case 3:
                item.children[0].textContent = `${langObj[settings.lang].todays.night}`;
                item.children[1].textContent = `${Math.round(responseData.daily[0].temp.night)}°`;
                break;
            default:
                break;
        }
    });
}

function getDayTime (time) {
    if (time >= 0 && time < 6) {
        return 3;
    } else if (time >= 6 && time < 12) {
        return 0;
    } else if (time >= 12 && time < 18) {
        return 1;
    } else {
        return 2;
    }
}

function moonphase(requestDate) {

    let d = requestDate,
        year = d.getFullYear(),
        month = d.getMonth(),
        date = d.getDate(),
        c,e,jd,b,diff;

    if (month < 3) {
        year--;
        month += 12;
    }

    month++;

    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + date - 694039.09;
    jd /= 29.5305882;
    b = parseInt(jd);
    jd -= b;
    b = Math.round(jd * 8);

    diff = jd*10;
    diff = +diff.toFixed(2);

    if (b >= 8 ) {
        b = 0;
    }

    switch (b) {
        case 0:
            return "newmoon";
            break;
        case 1:
            return "waxingcrescent";
            break;
        case 2:
            return "firstquarter";
            break;
        case 3:
            return "waxinggibbous";
            break;
        case 4:
            return "fullmoon";
            break;
        case 5:
            return "waninggibbous";
            break;
        case 6:
            return "thirdquarter";
            break;
        case 7:
            return "waningcrescent";
            break;
        default:
            console.log('Error');
    }
};

function moveSun (responseData) {
    let x = responseData.daily[0].sunrise*1000; //initial time
    let y = responseData.daily[0].sunset*1000;
    let currentTime = new Date();
    if (currentTime > y) {
        graphSun.hidden = true;
        return false;
    } else {
        graphSun.hidden = false;
        let dayLight = y - x;
        let percentsOfDayLight = ((currentTime - x)/dayLight).toFixed(2);
        let halfcircumference = Math.PI*40;
        let L = halfcircumference*percentsOfDayLight;
        let alfa = L/40;
        graphSun.style.left = 40-40*Math.cos(alfa);
        graphSun.style.bottom = 40*Math.sin(alfa);
    }
}