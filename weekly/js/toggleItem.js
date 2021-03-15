let toggleButton = document.querySelectorAll('.weekly-weather__primary'),
    toggleArrow = document.querySelector('.weekly-weather__more'),
    data = document.querySelector('.weekly-weather__data');

data.addEventListener('click', (event) => {
    if (!event.target.closest('.weekly-weather__primary')) return false;
    let closestPrimary = event.target.closest('.weekly-weather__primary');
    closestPrimary.nextElementSibling.classList.toggle('active');
    closestPrimary.lastElementChild.classList.toggle('active');
});