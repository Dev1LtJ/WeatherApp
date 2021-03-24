let menuButton = document.querySelector('.header__selector'),
    menu = document.querySelector('.menu'),
    unitLogo = document.querySelector('.header__selector-unit'),
    langLogo = document.querySelector('.header__selector-lang'),
    arrowLogo = document.querySelector('.header__selector-arrow');

let langMenu = document.querySelector('.menu__lang'),
    unitsMenu = document.querySelector('.menu__units'),
    themeMenu = document.querySelector('.menu__theme');

//initial settings
import {settings} from '../../js/settings.js';
import {setToLocalStorage} from '../../js/localStorage.js';
import {renderLangDOM, renderThemeDOM} from './renderAQPageDOM.js'
import {setAQPageData} from './setAQPageData.js'

document.getElementById(settings.lang).classList.add('active');
document.getElementById(settings.theme).classList.add('active');
document.getElementById(settings.units).classList.add('active');
langLogo.setAttribute('src', `icons/header/${settings.lang}.svg`);
unitLogo.textContent = `${settings.units[0].toUpperCase()}`;

//logic
menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        arrowLogo.style.transform = 'rotate(180deg)';
    } else {
        arrowLogo.style.transform = 'rotate(0deg)';
    }
});

document.addEventListener('DOMContentLoaded', ()=> {
    langMenu.addEventListener('click', (event) => {
        let targetElem = event.target.closest('.menu__lang-item');
        toggleButton (targetElem, langMenu, 'lang');
        renderLangDOM();
        setAQPageData();
        langLogo.setAttribute('src', `icons/header/${settings.lang}.svg`);
    });

    unitsMenu.addEventListener('click', (event) => {
        let targetElem = event.target.closest('.menu__units-item');
        toggleButton (targetElem, unitsMenu, 'units');
        unitLogo.textContent = `${settings.units[0].toUpperCase()}`;
        setAQPageData();
    });

    themeMenu.addEventListener('click', (event) => {
        let targetElem = event.target.closest('.menu__theme-item');
        toggleButton (targetElem, themeMenu, 'theme');
        renderThemeDOM();
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) &&
            !menuButton.contains(event.target) &&
            menu.classList.contains('active')) {
            menu.classList.toggle('active');
            arrowLogo.style.transform = 'rotate(0deg)';
        }
    });
});

function toggleButton (targetElem, menu, property) {
    if (targetElem.classList.contains('active')) return false;
    let prevActiveElem = menu.querySelector('.active');
    prevActiveElem.classList.remove('active');
    targetElem.classList.add('active');
    settings[property] = targetElem.id;
    setToLocalStorage(settings, 'settings');
}