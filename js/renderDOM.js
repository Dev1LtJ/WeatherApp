let headerTitle = document.querySelector('.header__descr'),
    headerSearch = document.querySelector('.header__search-input');

let currentConditionsTitle = document.querySelector('.current-conditions .card-header__primary'),
    currentConditionsHumidity = document.querySelector('.current-conditions__humidity-descr'),
    currentConditionsPressure = document.querySelector('.current-conditions__pressure-descr'),
    currentConditionsWind = document.querySelector('.current-conditions__wind-descr'),
    currentWeatherUV = document.querySelector('.current-conditions__uv-descr'),
    currentWeatherDevPoint = document.querySelector('.current-conditions__dewPoint-descr'),
    currentWeatherMoonPhase = document.querySelector('.current-conditions__moon-descr'),
    currentWeatherСloudiness = document.querySelector('.current-conditions__cloudiness-descr'),
    currentWeatherTemp = document.querySelector('.current-conditions__temp-descr');

let todaysWeatherTitle = document.querySelector('.today-weather .card-header__primary'),
    hourlyWeatherTitle = document.querySelector('.hourly-weather .card-header__primary'),
    hourlyWeatherBtn = document.querySelector('.hourly-weather__more'),
    dailyWeatherTitle = document.querySelector('.daily-weather .card-header__primary'),
    dailyWeatherBtn = document.querySelector('.daily-weather__more');

let navToday = document.querySelector('.nav__today'),
    navHourly = document.querySelector('.nav__hourly'),
    navWeek = document.querySelector('.nav__week'),
    navAirQuality = document.querySelector('.nav__air-quality'),
    navMaps = document.querySelector('.nav__maps');

let footerContact = document.querySelector('.footer__contacts-title');

let menuLang = document.querySelector('.menu__title_lang'),
    menuUnitsTitle = document.querySelector('.menu__title_units'),
    menuUnitsMetric = document.getElementById('metric'),
    menuUnitsImperial = document.getElementById('imperial'),
    menuThemeTitle = document.querySelector('.menu__title_theme'),
    menuThemeLight = document.querySelector('#light span'),
    menuThemeDark = document.querySelector('#dark span');

import {langObj} from '../js/langObj.js';
import {settings} from '../js/settings.js';
import {setMainPageData} from './setMainPageData.js';

export function renderAllDOM () {
    renderLangDOM();
    renderThemeDOM();
    setMainPageData();
}

export function renderLangDOM () {
    headerTitle.textContent = langObj[settings.lang].headerTitle;
    headerSearch.placeholder = langObj[settings.lang].headerSearchPlaceholder;
    currentConditionsTitle.textContent = langObj[settings.lang].currentConditionTitle;
    currentConditionsHumidity.textContent = langObj[settings.lang].humidity;
    currentConditionsPressure.textContent = langObj[settings.lang].pressure;
    currentConditionsWind.textContent = langObj[settings.lang].wind;
    currentWeatherUV.textContent = langObj[settings.lang].uv;
    currentWeatherDevPoint.textContent = langObj[settings.lang].dewPoint;
    currentWeatherMoonPhase.textContent = langObj[settings.lang].moon.title;
    currentWeatherСloudiness.textContent = langObj[settings.lang].cloudiness;
    currentWeatherTemp.textContent = langObj[settings.lang].maxmin;
    todaysWeatherTitle.textContent = langObj[settings.lang].todays.title;
    hourlyWeatherTitle.textContent = langObj[settings.lang].hourly;
    hourlyWeatherBtn.textContent = langObj[settings.lang].buttons.hourly;
    dailyWeatherTitle.textContent = langObj[settings.lang].daily;
    dailyWeatherBtn.textContent = langObj[settings.lang].buttons.daily;
    navToday.textContent = langObj[settings.lang].nav.today;
    navHourly.textContent = langObj[settings.lang].nav.hourly;
    navWeek.textContent = langObj[settings.lang].nav.week;
    navAirQuality.textContent = langObj[settings.lang].nav.airQuality;
    navMaps.textContent = langObj[settings.lang].nav.maps;
    footerContact.textContent = langObj[settings.lang].contact;
    menuLang.textContent = langObj[settings.lang].menu.lang;
    menuUnitsTitle.textContent = langObj[settings.lang].menu.units;
    menuUnitsMetric.textContent = langObj[settings.lang].menu.unitsMetric;
    menuUnitsImperial.textContent = langObj[settings.lang].menu.unitsImperial;
    menuThemeTitle.textContent = langObj[settings.lang].menu.themeTitle;
    menuThemeLight.textContent = langObj[settings.lang].menu.themeLight;
    menuThemeDark.textContent = langObj[settings.lang].menu.themeDark;
}

export function renderThemeDOM () {
    document.body.className = settings.theme;
}