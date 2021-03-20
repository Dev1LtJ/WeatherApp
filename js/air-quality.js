import {langObj} from './langObj.js';
import {settings} from './settings.js';

let ring = document.querySelector('.air-quality__green-ring'),
    radius = ring.r.baseVal.value,
    ringReference = radius * 2 * Math.PI,
    number = document.querySelector('.air-quality__progress-text'),
    title = document.querySelector('.air-quality__phrase-title'),
    phrase = document.querySelector('.air-quality__phrase-descr');

ring.style.strokeDasharray = `${ringReference} ${ringReference}`;

export async function setAirQualityData () {
    let requestURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=53.90249633789063&lon=27.56148147583008&appid=400da6eb26c3c55fb657e09c050e94bd`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        let value = responseData.list[0].main.aqi;
        setProgress(value, ring);
        setValue(value, number);
        setData(value, title, phrase, ring);
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}

function setProgress(value, ring) {
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
