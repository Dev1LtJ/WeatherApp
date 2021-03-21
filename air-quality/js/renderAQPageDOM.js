import {langObj} from '../../js/langObj.js';
import {settings} from './settings.js';
import {setAQPageData} from './setAQPageData.js';

let headerTitle = document.querySelector('.header__descr'),
    headerSearch = document.querySelector('.header__search-input');

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

let todayButton = document.querySelector('.air-quality__button'),
    AQTitle = document.querySelector('.air-quality__main-title'),
    levelsTitle = document.querySelector('.air-quality__levels-title'),
    goodLevel = document.querySelector('.air-quality__good-title'),
    fairLevel = document.querySelector('.air-quality__fair-title'),
    moderateLevel = document.querySelector('.air-quality__moderate-title'),
    poorLevel = document.querySelector('.air-quality__poor-title'),
    veryPoorLevel = document.querySelector('.air-quality__veryPoor-title'),
    allPollutants = document.querySelector('.air-quality__info .card-header__primary');

let mobileNavToday = document.querySelector('.mobile__today'),
    mobileNavHourly = document.querySelector('.mobile__hourly'),
    mobileNavWeek = document.querySelector('.mobile__week'),
    mobileNavAirQuality = document.querySelector('.mobile__air-quality'),
    mobileNavMaps = document.querySelector('.mobile__maps'),
    mobileHeaderSearch = document.querySelector('.mobile__search-input'),
    mobileMenuUnitsMetric = document.getElementById('mobile_metric'),
    mobileMenuUnitsImperial = document.getElementById('mobile_imperial'),
    mobileMenuThemeLight = document.querySelector('#mobile_light span'),
    mobileMenuThemeDark = document.querySelector('#mobile_dark span');

export function renderAllDOM () {
    renderLangDOM();
    renderThemeDOM();
    setAQPageData();
}

export function renderLangDOM () {
    headerTitle.textContent = langObj[settings.lang].headerTitle;
    headerSearch.placeholder = langObj[settings.lang].headerSearchPlaceholder;
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
    
    todayButton.textContent = langObj[settings.lang].buttons.today;
    allPollutants.textContent = langObj[settings.lang].aqi.allPollutants;
    AQTitle.textContent = langObj[settings.lang].aqi.title;
    levelsTitle.textContent = langObj[settings.lang].aqi.level;
    goodLevel.textContent = `1 - ${langObj[settings.lang].aqi.good}`;
    fairLevel.textContent = `2 - ${langObj[settings.lang].aqi.fair}`;
    moderateLevel.textContent = `3 - ${langObj[settings.lang].aqi.moderate}`;
    poorLevel.textContent = `4 - ${langObj[settings.lang].aqi.poor}`;
    veryPoorLevel.textContent = `5 - ${langObj[settings.lang].aqi.veryPoor}`;

    mobileNavToday.textContent = langObj[settings.lang].nav.today;
    mobileNavHourly.textContent = langObj[settings.lang].nav.hourly;
    mobileNavWeek.textContent = langObj[settings.lang].nav.week;
    mobileNavAirQuality.textContent = langObj[settings.lang].nav.airQuality;
    mobileNavMaps.textContent = langObj[settings.lang].nav.maps;
    mobileHeaderSearch.placeholder = langObj[settings.lang].headerSearchPlaceholder;
    mobileMenuUnitsMetric.textContent = langObj[settings.lang].menu.unitsMetric;
    mobileMenuUnitsImperial.textContent = langObj[settings.lang].menu.unitsImperial;
    mobileMenuThemeLight.textContent = langObj[settings.lang].menu.themeLight;
    mobileMenuThemeDark.textContent = langObj[settings.lang].menu.themeDark;
}

export function renderThemeDOM () {
    document.body.className = settings.theme;
}