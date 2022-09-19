// menu toggle
const menuToggleButton = document.getElementById('menu');
const smallMenu = document.querySelector('.menu-small-screens');


function navbarToggle() {
    smallMenu.classList.toggle('menu-small-screens-toggle');
}

menuToggleButton.addEventListener('click', navbarToggle);

// -----------------------
// size function
const heightInfo = document.querySelector('.height');
const widthInfo = document.querySelector('.width');

function sizeUpdate() {
    let height = Math.round(visualViewport.height);
    let width = Math.round(visualViewport.width);

    heightInfo.innerHTML = `Your window height is: ${height} pixels`;
    widthInfo.innerHTML = `Your window width is: ${width} pixels`;
}

window.onload = sizeUpdate;
window.addEventListener('resize',sizeUpdate);