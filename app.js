const menuToggleButton = document.getElementById('menu');
const smallMenu = document.querySelector('.menu-small-screens'); 

function navbarToggle() {
    smallMenu.classList.toggle('menu-small-screens-toggle');
}

menuToggleButton.addEventListener('click',navbarToggle);