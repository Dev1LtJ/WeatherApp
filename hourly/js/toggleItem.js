let toggleButton = document.querySelectorAll('.hourly-weather__item-primary'),
    toggleArrow = document.querySelector('.hourly-weather__item-more'),
    data = document.querySelector('.hourly-weather__data');

data.addEventListener('click', (event) => {
    if (!event.target.closest('.hourly-weather__item-primary')) return false;
    let closestPrimary = event.target.closest('.hourly-weather__item-primary');
    closestPrimary.nextElementSibling.classList.toggle('active');
    closestPrimary.lastElementChild.classList.toggle('active');
});