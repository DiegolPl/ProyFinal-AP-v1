let btnMenu = document.getElementById('menu-btn');
let menuNavbar = document.getElementById('menu-navbar');

btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('fa-bars');
    btnMenu.classList.toggle('fa-xmark');
    menuNavbar.classList.toggle('active');
})

let btnLogin = document.getElementById('btn-login');
let modalLogin = document.getElementById('modal-login');
let btnModalClose = document.getElementById('modal-close-btn');

btnLogin.addEventListener('click', ()=> {
    modalLogin.classList.toggle('modal-ventana-active');
    btnMenu.classList.remove('fa-xmark');
    menuNavbar.classList.remove('active');
    btnMenu.classList.add('fa-bars');
})

btnModalClose.addEventListener('click',()=> {
    modalLogin.classList.toggle('modal-ventana-active');
    inputUser.value = '';
    inputPass.value = '';
    document.getElementById('label-login-user').classList.remove('label-top');
    document.getElementById('label-login-pass').classList.remove('label-top');
})

let inputUser = document.getElementById('user-input');
let inputPass = document.getElementById('pass-input');

inputUser.addEventListener('keyup',()=>{
    console.log(inputUser.value.length);
    if(inputUser.value.length > 0){
        document.getElementById('label-login-user').classList.add('label-top');
    }else{
        document.getElementById('label-login-user').classList.remove('label-top');
    }
})

inputPass.addEventListener('keyup',()=>{
    console.log(inputPass.value.length);
    if(inputPass.value.length > 0){
        document.getElementById('label-login-pass').classList.add('label-top');
    }else{
        document.getElementById('label-login-pass').classList.remove('label-top');
    }
})

