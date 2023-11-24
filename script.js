let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Typed js

var typed = new Typed('#home-title', {
    strings: [
        'Hello <br> Beautiful'
    ],
    typeSpeed: 80,
    startDelay: 500,
  });
  

