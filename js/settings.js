import {setToLocalStorage,
    getFromLocalStorage} from './localStorage.js';
import {getGeolocation} from './getGeolocation.js';

let settings = {};

if (getFromLocalStorage('settings')) {
    settings = getFromLocalStorage('settings');
} else {
    settings = {
        lang: 'ru',
        theme: 'light',
        units: 'metric',
    };
    setToLocalStorage(settings, 'settings');
    getGeolocation();
}

export {settings};