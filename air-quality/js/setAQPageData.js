//import {getGeolocation} from './getGeolocation.js';
import {langObj} from '../../js/langObj.js';
import {settings} from './settings.js';
import {setCity} from './setCity.js';
import {createItem} from './createItem.js';

let titleCity = document.querySelector('.air-quality__main .card-header__primary'),
    titleTime = document.querySelector('.air-quality__main .card-header__secondary');

let mainAQTitle = document.querySelector('.air-quality__main-text'),
    mainAQPhrase = document.querySelector('.air-quality__main-phrase'),
    mainAQRing = document.querySelector('.air-quality__main-green-ring'),
    mainAQRadius = mainAQRing.r.baseVal.value,
    mainAQReference = mainAQRadius * 2 * Math.PI,
    mainAQValue = document.querySelector('.air-quality__main-value');
    mainAQRing.style.strokeDasharray = `${mainAQReference} ${mainAQReference}`;

let pollutantsData = document.querySelector('.air-quality__info-wrapper');

export async function setAQPageData() {
    setCity(titleCity);
    let requestURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${settings.lat}&lon=${settings.lon}&appid=400da6eb26c3c55fb657e09c050e94bd`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        clearPreviousData ();
        setResponseTime(responseData);
        setMainCardData(responseData.list[0].main.aqi, mainAQRing, mainAQValue, mainAQTitle, mainAQPhrase, mainAQReference);
        setSecondCardData(responseData);

    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}

function setResponseTime (responseData) {
    titleTime.textContent = `${langObj[settings.lang].asOf}: ${new Intl.DateTimeFormat(settings.lang, {hour: '2-digit', minute: '2-digit'}).format(new Date(responseData.list[0].dt*1000))}`;
}

function clearPreviousData () {
    while (pollutantsData.firstChild) {
        pollutantsData.firstChild.remove();
    }
}

function setSecondCardData (responseData) {
    let dataObj = responseData.list[0].components;
    for (let pollutant in dataObj) {
        let item = createItem();
        item.querySelector('.air-quality__item-title').textContent = `${langObj[settings.lang].aqi.pollutants[pollutant]}`;
        item.querySelector('.air-quality__item-concentration').innerHTML = `${dataObj[pollutant]} ${langObj[settings.lang].aqi.units}`
        pollutantsData.append(item);
        item.querySelector('.air-quality__item-text').textContent = `${langObj[settings.lang].aqi.pollutants.concentration}:`;
        let title = pollutant+'_t'
        item.querySelector('.air-quality__item-logo').innerHTML = `${langObj[settings.lang].aqi.pollutants[title]}`;
        pollutantsData.append(item);
    }
    
}

function setMainCardData(value, ring, number, title, phrase, ringReference) {
    setProgress(value, ring, ringReference);
    setValue(value, number);
    setData (value, title, phrase, ring);
}

function setProgress(value, ring, ringReference) {
    let percents =  value * 20;
    let offset = ringReference - percents / 100 * ringReference;
    ring.style.strokeDashoffset = offset;
}

function setValue(value, number) {
    number.textContent = value;
}

function setData (value, title, phrase, ring) {
    switch (value) {
        case 1:
            title.textContent = `${langObj[settings.lang].aqi.good}`;
            phrase.textContent = `${langObj[settings.lang].aqi.goodPhrase}`;
            ring.style.stroke="#00E838";
            break;
        case 2:
            title.textContent = `${langObj[settings.lang].aqi.fair}`;
            phrase.textContent = `${langObj[settings.lang].aqi.fairPhrase}`;
            ring.style.stroke="#FFFF24";
            break;
        case 3:
            title.textContent = `${langObj[settings.lang].aqi.moderate}`;
            phrase.textContent = `${langObj[settings.lang].aqi.moderatePhrase}`;
            ring.style.stroke="#FF7200";
            break;
        case 4:
            title.textContent = `${langObj[settings.lang].aqi.poor}`;
            phrase.textContent = `${langObj[settings.lang].aqi.poorPhrase}`;
            ring.style.stroke="#FF0000";
            break;
        case 4:
            title.textContent = `${langObj[settings.lang].aqi.veryPoor}`;
            phrase.textContent = `${langObj[settings.lang].aqi.veryPoorPhrase}`;
            ring.style.stroke="#9D3D8C";
            break;
        default:
            break;
    }   
}