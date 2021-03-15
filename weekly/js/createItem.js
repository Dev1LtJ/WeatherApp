import {langObj} from '../../js/langObj.js';
import {settings} from './settings.js';

export function createItem () {
    let item = document.createElement('DIV');
    item.className = 'hourly-weather__item';

    let primary = document.createElement('DIV');
    primary.className = 'weekly-weather__primary';

    let day = document.createElement('DIV');
    day.className = 'weekly-weather__day';

    let temp = document.createElement('DIV');
    temp.className = 'weekly-weather__temp';
    let tempDay = document.createElement('DIV');
    tempDay.className = 'weekly-weather__temp-day';
    let tempDiv = document.createElement('DIV');
    temp.append(tempDay);
    temp.append(tempDiv);

    let conditions = document.createElement('DIV');
    conditions.className = 'weekly-weather__conditions';
    let conditionsImg = document.createElement('IMG');
    conditionsImg.setAttribute('alt', 'img');
    let conditionsDescr = document.createElement('DIV');
    conditions.append(conditionsImg);
    conditions.append(conditionsDescr);

    let pop = document.createElement('DIV');
    pop.className = 'weekly-weather__pop';
    let popImg = document.createElement('IMG');
    popImg.setAttribute('src', 'icons/hourly/umbrella.svg');
    popImg.setAttribute('alt', 'pop-img');
    let popDescr = document.createElement('DIV');
    pop.append(popImg);
    pop.append(popDescr);

    let wind = document.createElement('DIV');
    wind.className = 'weekly-weather__wind';
    let windImg = document.createElement('IMG');
    windImg.setAttribute('src', 'icons/currentconditions/wind.svg');
    windImg.setAttribute('alt', 'wind-img');
    let windArrowImg = document.createElement('IMG');
    windArrowImg.setAttribute('src', 'icons/currentconditions/wind-arrow.svg');
    windArrowImg.setAttribute('alt', 'wind-arrow-img');
    let windDescr = document.createElement('DIV');
    wind.append(windImg);
    wind.append(windArrowImg);
    wind.append(windDescr);

    let moreImg = document.createElement('IMG');
    moreImg.className = 'hourly-weather__more';
    moreImg.setAttribute('src', 'icons/hourly/more.svg');
    moreImg.setAttribute('alt', 'more-img');

    primary.append(day);
    primary.append(temp);
    primary.append(conditions);
    primary.append(pop);
    primary.append(wind);
    primary.append(moreImg);


    let secondary = document.createElement('DIV');
    secondary.className = 'weekly-weather__secondary';

    let firstColumn = document.createElement('DIV');
    firstColumn.className = 'weekly-weather__column';

    let sun = document.createElement('DIV');
    sun.className = 'weekly-weather__sun';

    let sunGraph = document.createElement('DIV');
    sunGraph.className = 'weekly-weather__sun-graph';
    let sunGraphPrimary = document.createElement('SVG');
    sunGraphPrimary.className = 'weekly-weather__sun-graph-primary';
    sunGraphPrimary.innerHTML = '<path d="M -13.5 26.5 a 1 1 0 0 0 80 0" style="transform-origin: 40px 40px;"></path>';
    let sunGraphSecondary = document.createElement('SVG');
    sunGraphSecondary.className = 'weekly-weather__sun-graph-secondary';
    sunGraphSecondary.innerHTML = '<circle cx="12" cy="12" r="12" fill="#FFF"></circle><path fill="#F7C044" d="M18.405 17.661a1 1 0 0 1-1.437 1.391l-1.665-1.72a1 1 0 1 1 1.437-1.39l1.665 1.72zm-5.541 2.651a1 1 0 0 1-2 0v-2.366a1 1 0 1 1 2 0v2.366zm-6.718-1.624a1 1 0 0 1-1.357-1.469l1.758-1.624a1 1 0 1 1 1.357 1.47l-1.758 1.623zm-2.753-5.769a1 1 0 1 1 .002-2l2.422.001a1 1 0 0 1-.001 2l-2.423-.001zm1.77-6.115A1 1 0 0 1 6.6 5.414l1.664 1.719a1 1 0 0 1-1.436 1.391l-1.665-1.72zm5.751-3.391a1 1 0 1 1 2 0v2.366a1 1 0 0 1-2 0V3.413zm6.5 1.903a1 1 0 1 1 1.356 1.47l-1.757 1.623a1 1 0 1 1-1.357-1.47l1.758-1.623zm3.005 6.114a1 1 0 0 1-.002 2l-2.422-.001a1 1 0 0 1 .001-2l2.423.001z"></path><ellipse fill="#F7C044" cx="11.85" cy="11.935" rx="3.225" ry="3.256"></ellipse>';
    sunGraph.append(sunGraphPrimary);
    sunGraph.append(sunGraphSecondary);

    let sunData = document.createElement('DIV');
    sunData.className = 'weekly-weather__sun-data';
    let sunrise = document.createElement('DIV');
    sunrise.className = 'weekly-weather__sunrise';
    let sunriseImg = document.createElement('IMG');
    sunriseImg.setAttribute('src', 'icons/currentconditions/sunrise.svg');
    sunriseImg.setAttribute('alt', 'sunrise-img');
    let sunriseText = document.createElement('DIV');
    sunriseText.className = 'weekly-weather__sunrise-text';
    let sunset = document.createElement('DIV');
    sunset.className = 'weekly-weather__sunset';
    let sunsetImg = document.createElement('IMG');
    sunsetImg.setAttribute('src', 'icons/currentconditions/sunset.svg');
    sunsetImg.setAttribute('alt', 'sunset-img');
    let sunsetText = document.createElement('DIV');
    sunsetText.className = 'weekly-weather__sunset-text';
    sunrise.append(sunriseImg);
    sunrise.append(sunriseText);
    sunset.append(sunsetImg);
    sunset.append(sunsetText);
    sunData.append(sunrise);
    sunData.append(sunset);

    sun.append(sunGraph);
    sun.append(sunData);

    let allTemp = document.createElement('DIV');
    allTemp.className = 'weekly-weather__allTemp';

    for (let i = 0; i < 3; i++) {
        let allTempItem = document.createElement('DIV');
        allTempItem.className = 'weekly-weather__allTemp-item';
        let allTempTitle = document.createElement('DIV');
        allTempTitle.className = 'weekly-weather__allTemp-title';
        let allTempValue = document.createElement('DIV');
        allTempValue.className = 'weekly-weather__allTemp-value';
        allTempItem.append(allTempTitle);
        allTempItem.append(allTempValue);
        allTemp.append(allTempItem)
    }

    firstColumn.append(sun);
    firstColumn.append(allTemp);

    let secondColumn = document.createElement('DIV');
    secondColumn.className = 'weekly-weather__column weekly-weather__column_wrap';

    let maxMinDetails = document.createElement('DIV');
    maxMinDetails.className = 'weekly-weather__details';

    item.append(primary);
    item.append(secondary);

    return item;
}