import {setToLocalStorage,
    getFromLocalStorage} from '../js/localStorage.js';
let settings = {};

if (getFromLocalStorage('settings')) {
    settings = getFromLocalStorage('settings');
} else {
    settings = {
        lang: 'ru',
        theme: 'light',
        units: 'metric'
    };
    setToLocalStorage(settings, 'settings');
}

export {settings};