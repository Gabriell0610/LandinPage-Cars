const hamburger = document.querySelector('.hamburguer')
const nav = document.querySelector('.nav-bar')
const hero = document.getElementById('#hero')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
})


AOS.init();


let count =1
document.getElementById('radio1').checked = true;

setInterval(function() {
    nextImage()
}, 5000)


function nextImage() {
    count++
    if(count > 6) {
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;
}

