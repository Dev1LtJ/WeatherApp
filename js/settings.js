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
    const geoLocation = getGeolocation();
    if (!geoLocation) {
        settings.lat = 53.89;
        settings.lon = 27.56;
    }
    setToLocalStorage(settings, 'settings');
}

export {settings};