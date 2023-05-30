const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky',window.scrollY > 80)
});

let menu = document.querySelector('#menu-icons');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll  = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})