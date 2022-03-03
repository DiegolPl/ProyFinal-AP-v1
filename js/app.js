let btnMenu = document.getElementById('menu-btn');
let menuNavbar = document.getElementById('menu-navbar');

btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('fa-bars');
    btnMenu.classList.toggle('fa-xmark');
    menuNavbar.classList.toggle('active');
})