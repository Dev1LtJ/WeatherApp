import {langObj} from '../../js/langObj.js';
import {settings} from '../../js/settings.js';

export function createItem () {
    let item = document.createElement('DIV');
    item.className = 'hourly-weather__item';

    let primary = document.createElement('DIV');
    primary.className = 'hourly-weather__item-primary';

    let time = document.createElement('DIV');
    time.className = 'hourly-weather__item-time';
    let temp = document.createElement('DIV');
    temp.className = 'hourly-weather__item-temp';

    let conditions = document.createElement('DIV');
    conditions.className = 'hourly-weather__item-conditions';
    let conditionsImg = document.createElement('IMG');
    conditionsImg.className = 'hourly-weather__item-conditions-img';
    conditionsImg.setAttribute('alt', 'img');
    let conditionsDescr = document.createElement('DIV');
    conditionsDescr.className = 'hourly-weather__item-conditions-descr';
    conditions.append(conditionsImg);
    conditions.append(conditionsDescr);

    let pop = document.createElement('DIV');
    pop.className = 'hourly-weather__item-pop';
    let popImg = document.createElement('IMG');
    popImg.setAttribute('src', 'icons/hourly/umbrella.svg');
    popImg.setAttribute('alt', 'pop-img');
    let popDescr = document.createElement('DIV');
    popDescr.className = 'hourly-weather__item-pop-descr';
    pop.append(popImg);
    pop.append(popDescr);

    let wind = document.createElement('DIV');
    wind.className = 'hourly-weather__item-wind';
    let windImg = document.createElement('IMG');
    windImg.setAttribute('src', 'icons/currentconditions/wind.svg');
    windImg.setAttribute('alt', 'wind-img');
    let windArrowImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    windArrowImg.setAttribute('class', 'hourly-weather__item-wind-arrow-img');
    windArrowImg.setAttribute('viewBox', '0 0 24 24');
    windArrowImg.setAttribute('width', '24');
    windArrowImg.setAttribute('height', '24');
    windArrowImg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    windArrowImg.innerHTML = '<path stroke="#2B2B2B" fill="none" d="M18.467 4.482l-5.738 5.738a1.005 1.005 0 0 1-1.417 0L5.575 4.482l6.446 16.44 6.446-16.44z"></path>';
    let windDescr = document.createElement('DIV');
    windDescr.className = 'hourly-weather__item-wind-descr';
    wind.append(windImg);
    wind.append(windArrowImg);
    wind.append(windDescr);

    let moreImg = document.createElement('IMG');
    moreImg.className = 'hourly-weather__item-more';
    moreImg.setAttribute('src', 'icons/hourly/more.svg');
    moreImg.setAttribute('alt', 'more-img');

    primary.append(time);
    primary.append(temp);
    primary.append(conditions);
    primary.append(pop);
    primary.append(wind);
    primary.append(moreImg);


    let secondary = document.createElement('DIV');
    secondary.className = 'hourly-weather__item-secondary';

    let feels = document.createElement('DIV');
    feels.className = 'hourly-weather__item-feels';
    let feelsImg = document.createElement('IMG');
    feelsImg.setAttribute('src', 'icons/currentconditions/temp.svg');
    feelsImg.setAttribute('alt', 'feels-like-img');
    let feelsColumn = document.createElement('DIV');
    feelsColumn.className = 'hourly-weather__item-feels-column';
    let feelsTitle = document.createElement('DIV');
    feelsTitle.className = 'hourly-weather__item-feels-title';
    feelsTitle.textContent = `${langObj[settings.lang].feelsLike}`;
    let feelsDescr = document.createElement('DIV');
    feelsDescr.className = 'hourly-weather__item-feels-descr';
    feelsColumn.append(feelsTitle);
    feelsColumn.append(feelsDescr);
    feels.append(feelsImg);
    feels.append(feelsColumn);

    let pressure = document.createElement('DIV');
    pressure.className = 'hourly-weather__item-pressure';
    let pressureImg = document.createElement('IMG');
    pressureImg.setAttribute('src', 'icons/currentconditions/pressure.svg');
    pressureImg.setAttribute('alt', 'pressure-img');
    let pressureColumn = document.createElement('DIV');
    pressureColumn.className = 'hourly-weather__item-pressure-column';
    let pressureTitle = document.createElement('DIV');
    pressureTitle.className = 'hourly-weather__item-pressure-title';
    pressureTitle.textContent = `${langObj[settings.lang].pressure}`;
    let pressureDescr = document.createElement('DIV');
    pressureDescr.className = 'hourly-weather__item-pressure-descr';
    pressureColumn.append(pressureTitle);
    pressureColumn.append(pressureDescr);
    pressure.append(pressureImg);
    pressure.append(pressureColumn);

    let humidity = document.createElement('DIV');
    humidity.className = 'hourly-weather__item-humidity';
    let humidityImg = document.createElement('IMG');
    humidityImg.setAttribute('src', 'icons/currentconditions/humidity.svg');
    humidityImg.setAttribute('alt', 'humidity-img');
    let humidityColumn = document.createElement('DIV');
    humidityColumn.className = 'hourly-weather__item-humidity-column';
    let humidityTitle = document.createElement('DIV');
    humidityTitle.className = 'hourly-weather__item-humidity-title';
    humidityTitle.textContent = `${langObj[settings.lang].humidity}`;
    let humidityDescr = document.createElement('DIV');
    humidityDescr.className = 'hourly-weather__item-humidity-descr';
    humidityColumn.append(humidityTitle);
    humidityColumn.append(humidityDescr);
    humidity.append(humidityImg);
    humidity.append(humidityColumn);

    let cloudiness = document.createElement('DIV');
    cloudiness.className = 'hourly-weather__item-cloudiness';
    let cloudinessImg = document.createElement('IMG');
    cloudinessImg.setAttribute('src', 'icons/currentconditions/cloudiness.svg');
    cloudinessImg.setAttribute('alt', 'cloudiness-img');
    let cloudinessColumn = document.createElement('DIV');
    cloudinessColumn.className = 'hourly-weather__item-cloudiness-column';
    let cloudinessTitle = document.createElement('DIV');
    cloudinessTitle.className = 'hourly-weather__item-cloudiness-title';
    cloudinessTitle.textContent = `${langObj[settings.lang].cloudiness}`;
    let cloudinessDescr = document.createElement('DIV');
    cloudinessDescr.className = 'hourly-weather__item-cloudiness-descr';
    cloudinessColumn.append(cloudinessTitle);
    cloudinessColumn.append(cloudinessDescr);
    cloudiness.append(cloudinessImg);
    cloudiness.append(cloudinessColumn);

    let dewPoint = document.createElement('DIV');
    dewPoint.className = 'hourly-weather__item-dewPoint';
    let dewPointImg = document.createElement('IMG');
    dewPointImg.setAttribute('src', 'icons/currentconditions/dew-point.svg');
    dewPointImg.setAttribute('alt', 'dewPoint-img');
    let dewPointColumn = document.createElement('DIV');
    dewPointColumn.className = 'hourly-weather__item-dewPoint-column';
    let dewPointTitle = document.createElement('DIV');
    dewPointTitle.className = 'hourly-weather__item-dewPoint-title';
    dewPointTitle.textContent = `${langObj[settings.lang].dewPoint}`;
    let dewPointDescr = document.createElement('DIV');
    dewPointDescr.className = 'hourly-weather__item-dewPoint-descr';
    dewPointColumn.append(dewPointTitle);
    dewPointColumn.append(dewPointDescr);
    dewPoint.append(dewPointImg);
    dewPoint.append(dewPointColumn);

    let uv = document.createElement('DIV');
    uv.className = 'hourly-weather__item-uv';
    let uvImg = document.createElement('IMG');
    uvImg.setAttribute('src', 'icons/currentconditions/uv.svg');
    uvImg.setAttribute('alt', 'uv-img');
    let uvColumn = document.createElement('DIV');
    uvColumn.className = 'hourly-weather__item-uv-column';
    let uvTitle = document.createElement('DIV');
    uvTitle.className = 'hourly-weather__item-uv-title';
    uvTitle.textContent = `${langObj[settings.lang].uv}`;
    let uvDescr = document.createElement('DIV');
    uvDescr.className = 'hourly-weather__item-uv-descr';
    uvColumn.append(uvTitle);
    uvColumn.append(uvDescr);
    uv.append(uvImg);
    uv.append(uvColumn);

    secondary.append(feels);
    secondary.append(pressure);
    secondary.append(humidity);
    secondary.append(cloudiness);
    secondary.append(dewPoint);
    secondary.append(uv);


    item.append(primary);
    item.append(secondary);

    return item;
}

export function createDay (date) {
    let dateElem = document.createElement('DIV');
    dateElem.className = 'hourly-weather__day';
    dateElem.textContent = `${new Intl.DateTimeFormat(settings.lang, {weekday: 'long', day: '2-digit', month: 'long'}).format(date)}`;
    return dateElem;
}