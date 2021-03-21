let scrollBtn = document.querySelector('.pageup'),
    pageTop = document.querySelector('.screen');

window.addEventListener('scroll', ()=> {
    window.pageYOffset > 1000 ? scrollBtn.classList.remove('fade') : scrollBtn.classList.add('fade');
});

window.addEventListener('click', (event)=> {
    if (!event.target.closest('.pageup')) return false;
    pageTop.scrollIntoView({ behavior: 'smooth' });
});