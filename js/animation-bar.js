const hamburger = document.querySelector('.hamburguer')
const nav = document.querySelector('.nav-bar')
const hero = document.getElementById('#hero')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
})


AOS.init();