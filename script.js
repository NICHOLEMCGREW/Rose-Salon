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
  

// scroll to down 
document.addEventListener('DOMContentLoaded', function () {
    // Get the link element
    const scrollDownLink = document.querySelector('.scroll-to-down');

    // Add click event listener to the link
    scrollDownLink.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target section you want to scroll to (replace 'your-section-id' with the actual ID of the target section)
      const targetSection = document.getElementById('your-section-id');

      // Scroll smoothly to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });