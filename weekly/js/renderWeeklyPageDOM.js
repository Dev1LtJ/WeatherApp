import {langObj} from '../../js/langObj.js';
import {settings} from '../../js/settings.js';
import {setWeeklyPageData} from './setWeeklyPageData.js';

let headerTitle = document.querySelector('.header__descr'),
    headerSearch = document.querySelector('.header__search-input');

let navToday = document.querySelector('.nav__today'),
    navHourly = document.querySelector('.nav__hourly'),
    navWeek = document.querySelector('.nav__week'),
    navAirQuality = document.querySelector('.nav__air-quality');

let footerContact = document.querySelector('.footer__contacts-title');

let menuLang = document.querySelector('.menu__title_lang'),
    menuUnitsTitle = document.querySelector('.menu__title_units'),
    menuUnitsMetric = document.getElementById('metric'),
    menuUnitsImperial = document.getElementById('imperial'),
    menuThemeTitle = document.querySelector('.menu__title_theme'),
    menuThemeLight = document.querySelector('#light span'),
    menuThemeDark = document.querySelector('#dark span');

let twoWeeksButton = document.querySelector('.weekly-weather__button');

let mobileNavToday = document.querySelector('.mobile__today'),
    mobileNavHourly = document.querySelector('.mobile__hourly'),
    mobileNavWeek = document.querySelector('.mobile__week'),
    mobileNavAirQuality = document.querySelector('.mobile__air-quality'),
    mobileHeaderSearch = document.querySelector('.mobile__search-input'),
    mobileMenuUnitsMetric = document.getElementById('mobile_metric'),
    mobileMenuUnitsImperial = document.getElementById('mobile_imperial'),
    mobileMenuThemeLight = document.querySelector('#mobile_light span'),
    mobileMenuThemeDark = document.querySelector('#mobile_dark span');

export function renderAllDOM () {
    renderLangDOM();
    renderThemeDOM();
    setWeeklyPageData();
}

export function renderLangDOM () {
    headerTitle.textContent = langObj[settings.lang].headerTitle;
    headerSearch.placeholder = langObj[settings.lang].headerSearchPlaceholder;
    navToday.textContent = langObj[settings.lang].nav.today;
    navHourly.textContent = langObj[settings.lang].nav.hourly;
    navWeek.textContent = langObj[settings.lang].nav.week;
    navAirQuality.textContent = langObj[settings.lang].nav.airQuality;
    footerContact.textContent = langObj[settings.lang].contact;
    menuLang.textContent = langObj[settings.lang].menu.lang;
    menuUnitsTitle.textContent = langObj[settings.lang].menu.units;
    menuUnitsMetric.textContent = langObj[settings.lang].menu.unitsMetric;
    menuUnitsImperial.textContent = langObj[settings.lang].menu.unitsImperial;
    menuThemeTitle.textContent = langObj[settings.lang].menu.themeTitle;
    menuThemeLight.textContent = langObj[settings.lang].menu.themeLight;
    menuThemeDark.textContent = langObj[settings.lang].menu.themeDark;
    
    twoWeeksButton.textContent = langObj[settings.lang].nav.hourly;

    mobileNavToday.textContent = langObj[settings.lang].nav.today;
    mobileNavHourly.textContent = langObj[settings.lang].nav.hourly;
    mobileNavWeek.textContent = langObj[settings.lang].nav.week;
    mobileNavAirQuality.textContent = langObj[settings.lang].nav.airQuality;
    mobileHeaderSearch.placeholder = langObj[settings.lang].headerSearchPlaceholder;
    mobileMenuUnitsMetric.textContent = langObj[settings.lang].menu.unitsMetric;
    mobileMenuUnitsImperial.textContent = langObj[settings.lang].menu.unitsImperial;
    mobileMenuThemeLight.textContent = langObj[settings.lang].menu.themeLight;
    mobileMenuThemeDark.textContent = langObj[settings.lang].menu.themeDark;
}

export function renderThemeDOM () {
    document.body.className = settings.theme;
}