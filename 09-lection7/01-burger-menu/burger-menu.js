const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
        if (menu) {
            menu.setAttribute('data-open', '');
            menuOpen.style.display = "none";
            menuClose.style.display = "block";
        }
    });
}

if (menuClose) {
    menuClose.addEventListener('click', function() {
        if (menu) {
            menu.removeAttribute('data-open');
            menuClose.style.display = "none";
            menuOpen.style.display = "block";
        }
    });
}
