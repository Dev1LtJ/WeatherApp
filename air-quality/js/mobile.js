import {settings} from '../../js/settings.js';
import {setToLocalStorage} from '../../js/localStorage.js';
import {renderLangDOM, renderThemeDOM} from './renderAQPageDOM.js'
import {setAQPageData} from './setAQPageData.js'

let menuButton = document.querySelector('.hamburger'),
    menu = document.querySelector('.mobile');

let langMenu = document.querySelector('.mobile__lang'),
    unitsMenu = document.querySelector('.mobile__units'),
    themeMenu = document.querySelector('.mobile__theme');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');
});

document.getElementById(`mobile_${settings.lang}`).classList.add('active');
document.getElementById(`mobile_${settings.theme}`).classList.add('active');
document.getElementById(`mobile_${settings.units}`).classList.add('active');

document.addEventListener('DOMContentLoaded', ()=> {
    langMenu.addEventListener('click', (event) => {
        let targetElem = event.target.closest('.mobile__lang-item');
        toggleButton (targetElem, langMenu, 'lang');
        renderLangDOM();
        setAQPageData();
    });

    unitsMenu.addEventListener('click', (event) => {
        let targetElem = event.target.closest('.mobile__units-item');
        toggleButton (targetElem, unitsMenu, 'units');
        setAQPageData();
    });

    themeMenu.addEventListener('click', (event) => {
        let targetElem = event.target.closest('.mobile__theme-item');
        toggleButton (targetElem, themeMenu, 'theme');
        renderThemeDOM();
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) &&
            !menuButton.contains(event.target) &&
            menu.classList.contains('active')) {
            menuButton.classList.toggle('active');
            menu.classList.toggle('active');
        }
    });
});

function toggleButton (targetElem, menu, property) {
    if (targetElem.classList.contains('active')) return false;
    let prevActiveElem = menu.querySelector('.active');
    prevActiveElem.classList.remove('active');
    targetElem.classList.add('active');
    settings[property] = targetElem.id.slice(7);
    setToLocalStorage(settings, 'settings');
}