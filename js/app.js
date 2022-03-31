

// ---------------------------------------------- NAVBAR ----------------------------------------------


let btnMenu = document.getElementById('menu-btn');
let menuNavbar = document.getElementById('menu-navbar');

btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('fa-bars');
    btnMenu.classList.toggle('fa-xmark');
    menuNavbar.classList.toggle('active');
})

// ---------------------------------------------- LOGIN - MODAL ----------------------------------------------


let btnLogin = document.getElementById('btn-login');
let modalLogin = document.getElementById('modal-login');
let btnModalClose = document.getElementById('modal-close-btn');
let inputUser = document.getElementById('user-input');
let inputPass = document.getElementById('pass-input');

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


// ---------------------------------------------- PERFIL ----------------------------------------------

// EDIT BTNS
let btnEditPerfil = document.getElementById('btn-edit-perfil');
let btnEditPerfilClose = document.getElementById('btn-edit-perfil-close');
let btnEditPerfilUpgrade = document.getElementById('edit-perfil-btn');

// EDIT MODALS
let modalEditPerfil = document.getElementById('modal-edit-perfil');


// EDIT AEListeners
btnEditPerfil.addEventListener('click', ()=>{
    modalEditPerfil.classList.toggle('modal-ventana-active');
})
btnEditPerfilClose.addEventListener('click',()=> {
    modalEditPerfil.classList.toggle('modal-ventana-active');
    
})

// INPUTS
let inputEditPerfilImg = document.getElementById('edit-perfil-input-img');
let inputEditPerfilName = document.getElementById('edit-perfil-input-name');
let inputEditPerfilTitle = document.getElementById('edit-perfil-input-title');

// Valor inicial de inputs
inputEditPerfilName.value = document.getElementById('perfil-name').innerText;
inputEditPerfilTitle.value = document.getElementById('perfil-title').innerText;

// Funcion upgrade
btnEditPerfilUpgrade.addEventListener('click',()=>{
    
    if(inputEditPerfilImg.value){
        let valorInputImg = String(inputEditPerfilImg.value);
        let lastSlashInputImg = valorInputImg.lastIndexOf('\\');    //Index del ultimo \
        let lastSlashSrcImgActual = String(document.getElementById('perfil-foto').src).lastIndexOf('/');
        let newSrcParteUno = String(document.getElementById('perfil-foto').src).slice(0, lastSlashSrcImgActual + 1);
        let newSrcParteDos = valorInputImg.slice(lastSlashInputImg + 1, valorInputImg.length);
        let newSrc = newSrcParteUno + newSrcParteDos;
        
        document.getElementById('perfil-foto').src = newSrc;
    }
    document.getElementById('perfil-name').innerHTML = inputEditPerfilName.value;
    document.getElementById('perfil-title').innerHTML = inputEditPerfilTitle.value;

    //Cerrar modal al upgradear
    modalEditPerfil.classList.toggle('modal-ventana-active');

})

// ---------------------------------------------- PERFIL ----------------------------------------------

// EDIT BTNS
let btnEditAbout = document.getElementById('btn-edit-about');
let btnEditAboutClose = document.getElementById('btn-edit-about-close');
let btnEditAboutUpgrade = document.getElementById('edit-about-btn');

// EDIT MODALS
let modalEditAbout = document.getElementById('modal-edit-about');


// EDIT AEListeners
btnEditAbout.addEventListener('click', ()=>{
    modalEditAbout.classList.toggle('modal-ventana-active');
})
btnEditAboutClose.addEventListener('click',()=> {
    modalEditAbout.classList.toggle('modal-ventana-active');
    
})

// INPUTS
let inputEditAboutTextarea = document.getElementById('edit-about-textarea');

// Valor inicial de inputs
inputEditAboutTextarea.value = document.getElementById('about-text').innerText;

// Funcion upgrade
btnEditAboutUpgrade.addEventListener('click',()=>{

    document.getElementById('about-text').innerHTML = inputEditAboutTextarea.value;

    //Cerrar modal al upgradear
    modalEditAbout.classList.toggle('modal-ventana-active');

})

// ---------------------------------------------- EXPERIENCIA ----------------------------------------------

let orderExperiencia = () => {
    if(window.innerWidth > 768){
            
        // Cantidad de elementos
        let cantidadElementos = document.getElementById('container-experiencias').childElementCount;
    
        // Array con los elementos 
        let arrElementos = [...document.getElementById('container-experiencias').children]; //El metodo splice borra del original x ende tengo que hacerlo sobre una copia del array original
        
        if(cantidadElementos % 2 === 0){
    
            // El codigo es igual en ambas partes ya que la cantidad es par y el metodo splice() borra la parte que extrae
            let arrUno = arrElementos.splice(0, (cantidadElementos/2));
            let arrDos = arrElementos.splice(0, (cantidadElementos/2));
            
            for(let i = 0; i < arrUno.length; i++){
                arrUno[i].style.order = `${1+(2*i)}`;
                arrDos[i].style.order = `${1+(2*i)+1}`;
            }
        }else{
            let arrUno = arrElementos.splice(0, (cantidadElementos/2));
            let arrDos = arrElementos.splice(1, (cantidadElementos/2));
            console.log(arrElementos.length)
            
            for(let i = 0; i < arrUno.length; i++){
                arrUno[i].style.order = `${1+(2*i)}`;
                arrDos[i].style.order = `${1+(2*i)+1}`;
            }
            arrElementos[0].style.order = `${cantidadElementos + 1}`;
        }
        
    }
};