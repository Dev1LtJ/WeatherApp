import {langObj} from './langObj.js';
import {settings} from './settings.js';
import {setMainPageData} from '../js/setMainPageData.js';
import {setToLocalStorage} from './localStorage.js';

let search = document.querySelector('.header__search-input');
let searchResults = document.querySelector('.header__search-results');

search.addEventListener('input', debounce(setData, 1000));
search.addEventListener('click', (event) => {
    console.log(event.target);

});

// searchResults.addEventListener('click', (event)=> {
//     if (!event.target.classList.contains('header__search-result')) return false;
//     settings.lat = event.target.dataset.lat;
//     settings.lon = event.target.dataset.lon;
//     setToLocalStorage(settings, 'settings');
//     setMainPageData();
//     clearPreviousData ();
//     search.value = '';
// });

async function clearPreviousData () {
    while (searchResults.firstChild) {
        searchResults.firstChild.remove();
    }
    searchResults.style.display = 'none';
}

function debounce(func, time) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && (this.lastCall-previousCall) <= time) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(()=> func(args), time);
    }
}

async function setData () {
    if(!search.value){
        clearPreviousData ();
        return false;
    }
    let isResult = await checkInput (search.value);
    await clearPreviousData ();
    if (isResult.length === 0){
        createEmptyElement();
    } else {
        await clearPreviousData ();
        createResponseCities (isResult);
    }
}

async function checkInput (inputedCity) {
    let requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${inputedCity}&limit=10&appid=400da6eb26c3c55fb657e09c050e94bd`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        return responseData;
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}
function createEmptyElement() {
    let elem = document.createElement('div');
    elem.className = 'header__search-result';
    elem.textContent = `${langObj[settings.lang].errorMessages.noResults}`;
    searchResults.append(elem);
    searchResults.style.display = 'block';
}

function createResponseCities (responseData) {
    responseData.forEach((item) => {
        let elem = document.createElement('div');
        elem.className = 'header__search-result';
        elem.setAttribute('data-lat', item.lat);
        elem.setAttribute('data-lon', item.lon);
        checkLangAvailibility(item, settings.lang) ? 
            elem.textContent = `${item.local_names[settings.lang]}, ${item.country}` :
            elem.textContent = `${item.local_names.feature_name}, ${item.country}`;
        searchResults.append(elem);
    });
    searchResults.style.display = 'block';
}

function checkLangAvailibility (item, lang) {
    if (!item.local_names[lang]) return false;
    return true;
}

