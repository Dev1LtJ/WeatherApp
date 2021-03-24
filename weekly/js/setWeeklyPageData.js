import {langObj} from '../../js/langObj.js';
import {unitsObj} from '../../js/unitsObj.js';
import {settings} from '../../js/settings.js';
import {setCity} from '../../js/setCity.js';
import {createItem} from './createItem.js';

let titleCity = document.querySelector('.card-header__primary'),
    titleTime = document.querySelector('.card-header__secondary'),
    weatherData = document.querySelector('.weekly-weather__data');

export async function setWeeklyPageData() {
    setCity(titleCity);
    let requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${settings.lat}&lon=${settings.lon}&appid=400da6eb26c3c55fb657e09c050e94bd&units=${settings.units}&lang=${settings.lang}&exclude=minutely,alerts,hourly`;
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
    responseData.daily.forEach((dailyData)=> {
        let item = createItem();
        item.querySelector('.weekly-weather__day').textContent = `${new Intl.DateTimeFormat(settings.lang, {weekday: 'short', day: '2-digit'}).format(new Date(dailyData.dt*1000))}`;
        item.querySelector('.weekly-weather__temp-day').textContent = `${Math.round(dailyData.temp.day)}°`;
        item.querySelector('.weekly-weather__temp-night').textContent = `/${Math.round(dailyData.temp.night)}°`;
        item.querySelector('.weekly-weather__conditions-img').setAttribute('src', `icons/openweathermap/${dailyData.weather[0].icon}.svg`);
        item.querySelector('.weekly-weather__conditions-descr').textContent = `${dailyData.weather[0].description[0].toUpperCase() + dailyData.weather[0].description.slice(1)}`;
        item.querySelector('.weekly-weather__pop-descr').textContent = `${Math.round(dailyData.pop*100)} %`;
        item.querySelector('.weekly-weather__wind-arrow').style.transform = `rotate(${dailyData.wind_deg}deg)`;
        item.querySelector('.weekly-weather__wind-descr').textContent = `${dailyData.wind_speed} ${unitsObj[settings.units][settings.lang].speed}`;
        item.querySelector('.weekly-weather__sunrise-text').textContent = `${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(dailyData.sunrise*1000))}`;
        item.querySelector('.weekly-weather__sunset-text').textContent = `${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(dailyData.sunset*1000))}`;
        item.querySelector('.morning-value').textContent = `${Math.round(dailyData.temp.morn)}°`;
        item.querySelector('.day-value').textContent = `${Math.round(dailyData.temp.day)}°`;
        item.querySelector('.evening-value').textContent = `${Math.round(dailyData.temp.eve)}°`;
        item.querySelector('.night-value').textContent = `${Math.round(dailyData.temp.night)}°`;
        item.querySelector('.maxmin').textContent = `${Math.round(dailyData.temp.max)}°/${Math.round(dailyData.temp.min)}°`;
        item.querySelector('.humidity').textContent = `${dailyData.humidity} %`;
        item.querySelector('.pressure').textContent = `${Math.round(dailyData.pressure/1.333)} ${langObj[settings.lang].mmHg}`;
        item.querySelector('.cloudiness').textContent = `${dailyData.clouds} %`;
        item.querySelector('.uv').textContent = `${Math.round(dailyData.uvi)} ${langObj[settings.lang].from} 10`;
        item.querySelector('.dewPoint').textContent = `${dailyData.dew_point}°`;
        item.querySelector('.moonphase').textContent = `${langObj[settings.lang].moon[moonphase(new Date(dailyData.dt*1000))]}`;
        
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