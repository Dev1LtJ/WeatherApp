import {settings} from './settings.js';

export async function setCity (city) {
    let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=400da6eb26c3c55fb657e09c050e94bd&lang=${settings.lang}`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        city.textContent = `${responseData.name}, ${responseData.sys.country}`;
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}