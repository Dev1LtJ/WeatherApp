import {settings} from './settings.js';
import {setToLocalStorage} from '../js/localStorage.js';

export function getGeolocation () {
    navigator.geolocation.getCurrentPosition(getGeolocationSuccess, getGeolocationError, {timeout: 10000});
}

function getGeolocationSuccess (position) {
    let currentLat = position.coords.latitude;
    let currentLon = position.coords.longitude;
    if (settings.lat != currentLat || settings.lon != currentLon) {
        settings.lat = currentLat;
        settings.lon = currentLon;
    }
    setToLocalStorage(settings, 'settings');
}

function getGeolocationError (positionError) {
    console.log(positionError.message);
    console.log(positionError.code)
}