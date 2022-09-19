const menuButton = document.getElementById('menu');
const smallMenu = document.querySelector('.menu-small-screens');

menuButton.addEventListener('click', function () {
    menuButton.style.transform = "rotate(90deg)";
    smallMenu.style.display = "flex";
    smallMenu.style.backgroundColor = "white";
    return !menuDisplay;
})


// HOW TO USE TOGGLE??