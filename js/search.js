import {langObj} from './langObj.js';
import {settings} from './settings.js';
import {setMainPageData} from '../js/setMainPageData.js';
import {setToLocalStorage} from './localStorage.js';

let search = document.querySelector('.header__search-input'),
    searchResults = document.querySelector('.header__search-results');

let mobileSearch = document.querySelector('.mobile__search-input'),
    mobileSearchResults = document.querySelector('.mobile__search-results');

search.addEventListener('input', debounce(()=> setData(search, searchResults, 'header'), 1000));
mobileSearch.addEventListener('input', debounce(()=> setData(mobileSearch, mobileSearchResults, 'mobile'), 1000));

document.addEventListener('click', (event) => {
    if(!event.target.closest('.header__search')) {
        clearPreviousData(searchResults);
        search.value = '';
    } else if (!event.target.closest('.mobile__search')) {
        clearPreviousData(mobileSearchResults);
        mobileSearch.value = '';
    }
});

searchResults.addEventListener('click', (event)=> {
    if (!event.target.classList.contains('header__search-result')) return false;
    settings.lat = event.target.dataset.lat;
    settings.lon = event.target.dataset.lon;
    setToLocalStorage(settings, 'settings');
    setMainPageData();
    clearPreviousData(searchResults);
    search.value = '';
});

mobileSearchResults.addEventListener('click', (event)=> {
    if (!event.target.classList.contains('mobile__search-result')) return false;
    settings.lat = event.target.dataset.lat;
    settings.lon = event.target.dataset.lon;
    setToLocalStorage(settings, 'settings');
    setMainPageData();
    clearPreviousData(mobileSearchResults);
    mobileSearch.value = '';
});

//+
async function clearPreviousData (searchContainer) {
    while (searchContainer.firstChild) {
        searchContainer.firstChild.remove();
    }
    searchContainer.style.display = 'none';
}
//+
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
//+
async function setData (search, searchContainer, version) {
    if(!search.value){
        clearPreviousData (searchContainer);
        return false;
    }
    let isResult = await checkInput (search.value);
    await clearPreviousData (searchContainer);
    if (isResult.length === 0){
        createEmptyElement(version, searchContainer);
    } else {
        await clearPreviousData (searchContainer);
        createResponseCities (isResult, version, searchContainer);
    }
}
//+
async function checkInput (inputedCity) {
    let requestURL = `https://api.openweathermap.org/geo/1.0/direct?q=${inputedCity}&limit=10&appid=400da6eb26c3c55fb657e09c050e94bd`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        return responseData;
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}
//+
function createEmptyElement(version, searchContainer) {
    let elem = document.createElement('div');
    elem.className = `${version}__search-result`;
    elem.textContent = `${langObj[settings.lang].errorMessages.noResults}`;
    searchContainer.append(elem);
    searchContainer.style.display = 'block';
}
//+
function createResponseCities (responseData, version, searchContainer) {
    responseData.forEach((item) => {
        let elem = document.createElement('div');
        elem.className = `${version}__search-result`;
        elem.setAttribute('data-lat', item.lat);
        elem.setAttribute('data-lon', item.lon);
        checkLangAvailibility(item, settings.lang) ? 
            elem.textContent = `${item.local_names[settings.lang]}, ${item.country}` :
            elem.textContent = `${item.local_names.feature_name}, ${item.country}`;
        searchContainer.append(elem);
    });
    searchContainer.style.display = 'block';
}
//+
function checkLangAvailibility (item, lang) {
    if (!item.local_names[lang]) return false;
    return true;
}