export function getGeolocation () {
    navigator.geolocation.getCurrentPosition(getGeolocationSuccess, getGeolocationError, {timeout: 10000});
}

function getGeolocationSuccess (position) {
    console.log ({
        lat : position.coords.latitude,
        long : position.coords.longitude,
        timeStamp : position.timestamp,
    });
}

function getGeolocationError (positionError) {
    console.log(positionError.message);
    console.log(positionError.code)
}
//getGeolocation ();
//обработать ошибки определения геолокации