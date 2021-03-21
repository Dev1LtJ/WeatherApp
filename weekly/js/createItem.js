import {langObj} from '../../js/langObj.js';
import {settings} from './settings.js';

export function createItem () {
    let item = document.createElement('DIV');
    item.className = 'weekly-weather__item';

    let primary = document.createElement('DIV');
    primary.className = 'weekly-weather__primary';

    let day = document.createElement('DIV');
    day.className = 'weekly-weather__day';

    let temp = document.createElement('DIV');
    temp.className = 'weekly-weather__temp';
    let tempDay = document.createElement('DIV');
    tempDay.className = 'weekly-weather__temp-day';
    let tempNight = document.createElement('DIV');
    tempNight.className = 'weekly-weather__temp-night';
    temp.append(tempDay);
    temp.append(tempNight);

    let conditions = document.createElement('DIV');
    conditions.className = 'weekly-weather__conditions';
    let conditionsImg = document.createElement('IMG');
    conditionsImg.className = 'weekly-weather__conditions-img';
    conditionsImg.setAttribute('alt', 'img');
    let conditionsDescr = document.createElement('DIV');
    conditionsDescr.className = 'weekly-weather__conditions-descr';
    conditions.append(conditionsImg);
    conditions.append(conditionsDescr);

    let pop = document.createElement('DIV');
    pop.className = 'weekly-weather__pop';
    let popImg = document.createElement('IMG');
    popImg.setAttribute('src', 'icons/hourly/umbrella.svg');
    popImg.setAttribute('alt', 'pop-img');
    let popDescr = document.createElement('DIV');
    popDescr.className = 'weekly-weather__pop-descr';
    pop.append(popImg);
    pop.append(popDescr);

    let wind = document.createElement('DIV');
    wind.className = 'weekly-weather__wind';
    let windImg = document.createElement('IMG');
    windImg.setAttribute('src', 'icons/currentconditions/wind.svg');
    windImg.setAttribute('alt', 'wind-img');

    let windArrowImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    windArrowImg.setAttribute('class', 'weekly-weather__wind-arrow');
    windArrowImg.setAttribute('viewBox', '0 0 24 24');
    windArrowImg.setAttribute('width', '24');
    windArrowImg.setAttribute('height', '24');
    windArrowImg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    windArrowImg.innerHTML = '<path stroke="#2B2B2B" fill="none" d="M18.467 4.482l-5.738 5.738a1.005 1.005 0 0 1-1.417 0L5.575 4.482l6.446 16.44 6.446-16.44z"></path>';
    
    let windDescr = document.createElement('DIV');
    windDescr.className = 'weekly-weather__wind-descr';
    wind.append(windImg);
    wind.append(windArrowImg);
    wind.append(windDescr);

    let moreImg = document.createElement('IMG');
    moreImg.className = 'weekly-weather__more';
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
    let sunGraphPrimary = document.createElement('IMG');
    sunGraphPrimary.className = 'weekly-weather__sun-graph-primary';
    sunGraphPrimary.setAttribute('src', 'icons/currentconditions/arc.svg');
    sunGraphPrimary.setAttribute('alt', 'arc-img');
    let sunGraphSecondary = document.createElement('IMG');
    sunGraphSecondary.className = 'weekly-weather__sun-graph-secondary';
    sunGraphSecondary.setAttribute('src', 'icons/currentconditions/sun.svg');
    sunGraphSecondary.setAttribute('alt', 'sun-img');
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
    //morn
    let allTempItemMorn = document.createElement('DIV');
    allTempItemMorn.className = 'weekly-weather__allTemp-item';
    let allTempMornTitle = document.createElement('DIV');
    allTempMornTitle.className = 'weekly-weather__allTemp-title morning-title';
    allTempMornTitle.textContent = `${langObj[settings.lang].todays.morning}`;
    let allTempMornValue = document.createElement('DIV');
    allTempMornValue.className = 'weekly-weather__allTemp-value morning-value';
    allTempItemMorn.append(allTempMornTitle);
    allTempItemMorn.append(allTempMornValue);
    //day
    let allTempItemDay = document.createElement('DIV');
    allTempItemDay.className = 'weekly-weather__allTemp-item';
    let allTempDayTitle = document.createElement('DIV');
    allTempDayTitle.className = 'weekly-weather__allTemp-title day-title';
    allTempDayTitle.textContent = `${langObj[settings.lang].todays.afternoon}`;
    let allTempDayValue = document.createElement('DIV');
    allTempDayValue.className = 'weekly-weather__allTemp-value day-value';
    allTempItemDay.append(allTempDayTitle);
    allTempItemDay.append(allTempDayValue);
    //evening
    let allTempItemEve = document.createElement('DIV');
    allTempItemEve.className = 'weekly-weather__allTemp-item';
    let allTempEveTitle = document.createElement('DIV');
    allTempEveTitle.className = 'weekly-weather__allTemp-title evening-title';
    allTempEveTitle.textContent = `${langObj[settings.lang].todays.evening}`;
    let allTempEveValue = document.createElement('DIV');
    allTempEveValue.className = 'weekly-weather__allTemp-value evening-value';
    allTempItemEve.append(allTempEveTitle);
    allTempItemEve.append(allTempEveValue);
    //nigth
    let allTempItemNight = document.createElement('DIV');
    allTempItemNight.className = 'weekly-weather__allTemp-item';
    let allTempNightTitle = document.createElement('DIV');
    allTempNightTitle.className = 'weekly-weather__allTemp-title night-title';
    allTempNightTitle.textContent = `${langObj[settings.lang].todays.night}`;
    let allTempNightValue = document.createElement('DIV');
    allTempNightValue.className = 'weekly-weather__allTemp-value night-value';
    allTempItemNight.append(allTempNightTitle);
    allTempItemNight.append(allTempNightValue);
    
    allTemp.append(allTempItemMorn);
    allTemp.append(allTempItemDay);
    allTemp.append(allTempItemEve);
    allTemp.append(allTempItemNight);

    firstColumn.append(sun);
    firstColumn.append(allTemp);

    let secondColumn = document.createElement('DIV');
    secondColumn.className = 'weekly-weather__column weekly-weather__column_wrap';
    //MaxMin
    let maxMinDetails = document.createElement('DIV');
    maxMinDetails.className = 'weekly-weather__details';
    let maxMinWrapper = document.createElement('DIV');
    maxMinWrapper.className = 'weekly-weather__details-wrapper';
    let maxMinImg = document.createElement('IMG');
    maxMinImg.className = 'weekly-weather__details-img';
    maxMinImg.setAttribute('src', 'icons/currentconditions/temp.svg');
    maxMinImg.setAttribute('alt', 'temp-img');
    let maxMinDescr = document.createElement('DIV');
    maxMinDescr.className = 'weekly-weather__details-descr';
    maxMinDescr.textContent = `${langObj[settings.lang].maxmin}`;
    maxMinWrapper.append(maxMinImg);
    maxMinWrapper.append(maxMinDescr);
    let maxMinValue = document.createElement('DIV');
    maxMinValue.className = 'weekly-weather__details-value maxmin';
    maxMinDetails.append(maxMinWrapper);
    maxMinDetails.append(maxMinValue);
    //Humidity
    let humidityDetails = document.createElement('DIV');
    humidityDetails.className = 'weekly-weather__details';
    let humidityWrapper = document.createElement('DIV');
    humidityWrapper.className = 'weekly-weather__details-wrapper';
    let humidityImg = document.createElement('IMG');
    humidityImg.className = 'weekly-weather__details-img';
    humidityImg.setAttribute('src', 'icons/currentconditions/humidity.svg');
    humidityImg.setAttribute('alt', 'humidity-img');
    let humidityDescr = document.createElement('DIV');
    humidityDescr.className = 'weekly-weather__details-descr';
    humidityDescr.textContent = `${langObj[settings.lang].humidity}`;
    humidityWrapper.append(humidityImg);
    humidityWrapper.append(humidityDescr);
    let humidityValue = document.createElement('DIV');
    humidityValue.className = 'weekly-weather__details-value humidity';
    humidityDetails.append(humidityWrapper);
    humidityDetails.append(humidityValue);
    //Pressure
    let pressureDetails = document.createElement('DIV');
    pressureDetails.className = 'weekly-weather__details';
    let pressureWrapper = document.createElement('DIV');
    pressureWrapper.className = 'weekly-weather__details-wrapper';
    let pressureImg = document.createElement('IMG');
    pressureImg.className = 'weekly-weather__details-img';
    pressureImg.setAttribute('src', 'icons/currentconditions/pressure.svg');
    pressureImg.setAttribute('alt', 'pressure-img');
    let pressureDescr = document.createElement('DIV');
    pressureDescr.className = 'weekly-weather__details-descr';
    pressureDescr.textContent = `${langObj[settings.lang].pressure}`;
    pressureWrapper.append(pressureImg);
    pressureWrapper.append(pressureDescr);
    let pressureValue = document.createElement('DIV');
    pressureValue.className = 'weekly-weather__details-value pressure';
    pressureDetails.append(pressureWrapper);
    pressureDetails.append(pressureValue);
    //Cloudiness
    let cloudinessDetails = document.createElement('DIV');
    cloudinessDetails.className = 'weekly-weather__details';
    let cloudinessWrapper = document.createElement('DIV');
    cloudinessWrapper.className = 'weekly-weather__details-wrapper';
    let cloudinessImg = document.createElement('IMG');
    cloudinessImg.className = 'weekly-weather__details-img';
    cloudinessImg.setAttribute('src', 'icons/currentconditions/cloudiness.svg');
    cloudinessImg.setAttribute('alt', 'cloudiness-img');
    let cloudinessDescr = document.createElement('DIV');
    cloudinessDescr.className = 'weekly-weather__details-descr';
    cloudinessDescr.textContent = `${langObj[settings.lang].cloudiness}`;
    cloudinessWrapper.append(cloudinessImg);
    cloudinessWrapper.append(cloudinessDescr);
    let cloudinessValue = document.createElement('DIV');
    cloudinessValue.className = 'weekly-weather__details-value cloudiness';
    cloudinessDetails.append(cloudinessWrapper);
    cloudinessDetails.append(cloudinessValue);
    //UV
    let uvDetails = document.createElement('DIV');
    uvDetails.className = 'weekly-weather__details';
    let uvWrapper = document.createElement('DIV');
    uvWrapper.className = 'weekly-weather__details-wrapper';
    let uvImg = document.createElement('IMG');
    uvImg.className = 'weekly-weather__details-img';
    uvImg.setAttribute('src', 'icons/currentconditions/uv.svg');
    uvImg.setAttribute('alt', 'uv-img');
    let uvDescr = document.createElement('DIV');
    uvDescr.className = 'weekly-weather__details-descr';
    uvDescr.textContent = `${langObj[settings.lang].uv}`;
    uvWrapper.append(uvImg);
    uvWrapper.append(uvDescr);
    let uvValue = document.createElement('DIV');
    uvValue.className = 'weekly-weather__details-value uv';
    uvDetails.append(uvWrapper);
    uvDetails.append(uvValue);
    //Dew Point
    let dewPointDetails = document.createElement('DIV');
    dewPointDetails.className = 'weekly-weather__details';
    let dewPointWrapper = document.createElement('DIV');
    dewPointWrapper.className = 'weekly-weather__details-wrapper';
    let dewPointImg = document.createElement('IMG');
    dewPointImg.className = 'weekly-weather__details-img';
    dewPointImg.setAttribute('src', 'icons/currentconditions/dew-point.svg');
    dewPointImg.setAttribute('alt', 'dew-point-img');
    let dewPointDescr = document.createElement('DIV');
    dewPointDescr.className = 'weekly-weather__details-descr';
    dewPointDescr.textContent = `${langObj[settings.lang].dewPoint}`;
    dewPointWrapper.append(dewPointImg);
    dewPointWrapper.append(dewPointDescr);
    let dewPointValue = document.createElement('DIV');
    dewPointValue.className = 'weekly-weather__details-value dewPoint';
    dewPointDetails.append(dewPointWrapper);
    dewPointDetails.append(dewPointValue);
    //Moon Phase
    let moonPhaseDetails = document.createElement('DIV');
    moonPhaseDetails.className = 'weekly-weather__details';
    let moonPhaseWrapper = document.createElement('DIV');
    moonPhaseWrapper.className = 'weekly-weather__details-wrapper';
    let moonPhaseImg = document.createElement('IMG');
    moonPhaseImg.className = 'weekly-weather__details-img';
    moonPhaseImg.setAttribute('src', 'icons/currentconditions/moon.svg');
    moonPhaseImg.setAttribute('alt', 'moonphase-img');
    let moonPhaseDescr = document.createElement('DIV');
    moonPhaseDescr.className = 'weekly-weather__details-descr';
    moonPhaseDescr.textContent = `${langObj[settings.lang].moon.title}`;
    moonPhaseWrapper.append(moonPhaseImg);
    moonPhaseWrapper.append(moonPhaseDescr);
    let moonPhaseValue = document.createElement('DIV');
    moonPhaseValue.className = 'weekly-weather__details-value moonphase';
    moonPhaseDetails.append(moonPhaseWrapper);
    moonPhaseDetails.append(moonPhaseValue);

    secondColumn.append(maxMinDetails);
    secondColumn.append(humidityDetails);
    secondColumn.append(pressureDetails);
    secondColumn.append(cloudinessDetails);
    secondColumn.append(uvDetails);
    secondColumn.append(dewPointDetails);
    secondColumn.append(moonPhaseDetails);

    secondary.append(firstColumn);
    secondary.append(secondColumn);

    item.append(primary);
    item.append(secondary);

    return item;
}