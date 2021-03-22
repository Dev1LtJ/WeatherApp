let search = document.querySelector('.header__search-input');

search.addEventListener('keydown', async (event)=> {
    if (event.key === 'Enter') {
        if(!search.value) return false; //Подсветить плейсхолдер
        let isResult = await checkInput (search.value);
        if (isResult.length === 0) return false; //Подсветить плейсхолдер
        //Если все ОК - Поиск
    }
    
})

async function checkInput (inputedCity) {
    let requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${inputedCity}&limit=5&appid=400da6eb26c3c55fb657e09c050e94bd`;
    let response = await fetch(requestURL);
    if (response.ok) {
        let responseData = await response.json();
        return responseData;
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}