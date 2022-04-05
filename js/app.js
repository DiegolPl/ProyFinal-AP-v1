

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

// ---------------------------------------------- ABOUT ----------------------------------------------

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

// ---------------------------------------------- EDUCACION ----------------------------------------------

let orderEducacion = () => {
    if(window.innerWidth > 768){
            
        // Cantidad de elementos
        let cantidadElementos = document.getElementById('container-educacion').childElementCount;
        // console.log(cantidadElementos)
        // Array con los elementos 
        let arrElementos = [...document.getElementById('container-educacion').children]; //El metodo splice borra del original x ende tengo que hacerlo sobre una copia del array original
        
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
}

// ---------------------------------------------- ACTIVAR ORDENES ----------------------------------------------

let upgradeAll = () => {
    orderEducacion();
    orderExperiencia();
    activarBtnsEditEducacion();
}


// ---------------------------------------------- BOTON AGREGAR EDUCACION ----------------------------------------------

let btnAddEducacion = document.getElementById('btn-educacion-add');
let btnCloseAddEducacion = document.getElementById('btn-edit-educacion-close');
let btnUpgradeEducacion = document.getElementById('edit-educacion-btn');

btnAddEducacion.addEventListener('click',()=>{
    document.getElementById('modal-edit-educacion').classList.toggle('modal-ventana-active');
})

btnCloseAddEducacion.addEventListener('click',()=>{
    document.getElementById('modal-edit-educacion').classList.toggle('modal-ventana-active');
})

btnUpgradeEducacion.addEventListener('click',()=>{
    let containerPadre = document.getElementById('container-educacion');

    // Contenedor de nuevo elemento
    let boxSeccion = document.createElement('DIV');
    boxSeccion.classList.add('box-seccion');
    containerPadre.prepend(boxSeccion);

    // Contenedor de botones de edit
    let boxEdit = document.createElement('DIV');
    boxEdit.classList.add('box-edit');
    boxSeccion.appendChild(boxEdit);

    // boton edit
    let btnEdit = document.createElement('SPAN');
    btnEdit.classList.add('material-icons');
    btnEdit.classList.add('material-icons-outlined');
    btnEdit.classList.add('btn-edit');
    btnEdit.classList.add('btn-edit-educacion');
    let textoBtnEdit = document.createTextNode('edit');
    btnEdit.appendChild(textoBtnEdit);
    boxEdit.appendChild(btnEdit);

    // Funcion boton edit
    btnEdit.addEventListener('click',()=>{
        editElemEducacion(btnEdit);
    })

    // boton delete
    let btnDelete = document.createElement('SPAN');
    btnDelete.classList.add('material-icons');
    btnDelete.classList.add('material-icons-outlined');
    btnDelete.classList.add('btn-delete');
    btnDelete.classList.add('btn-delete-educacion');
    let textoBtnDelete = document.createTextNode('cancel');
    btnDelete.appendChild(textoBtnDelete);
    boxEdit.appendChild(btnDelete);

    // Funcion boton delete
    btnDelete.addEventListener('click', ()=>{
        let boxPadreAEliminar = btnDelete.parentNode.parentNode;
        boxPadreAEliminar.remove();
        orderEducacion();
    })

    // Contenedor de lado izquierdo
    let boxLadoIzq = document.createElement('DIV');
    boxLadoIzq.classList.add('box-lado-izq');
    boxSeccion.appendChild(boxLadoIzq);

    // Fecha
    let fecha = document.createElement('H3');
    let textoFecha = document.createTextNode(`${document.getElementById('new-input-educacion-fecha').value}`);
    fecha.appendChild(textoFecha);
    boxLadoIzq.appendChild(fecha);

    // Instituto
    let instituto = document.createElement('H4');
    let textoInstituto = document.createTextNode(`${document.getElementById('new-input-educacion-instituto').value}`);
    instituto.appendChild(textoInstituto);
    boxLadoIzq.appendChild(instituto);

    // Contenedor de lado derecho
    let boxLadoDcho = document.createElement('DIV');
    boxLadoDcho.classList.add('box-lado-dcho');
    boxSeccion.appendChild(boxLadoDcho);

    // Titulo
    let titulo = document.createElement('H3');
    let textoTitulo = document.createTextNode(`${document.getElementById('new-input-educacion-titulo').value}`);
    titulo.appendChild(textoTitulo);
    boxLadoDcho.appendChild(titulo);

    // Descripcion
    let descripcion = document.createElement('H4');
    let textoDescripcion = document.createTextNode(`${document.getElementById('new-input-educacion-descripcion').value}`);
    descripcion.appendChild(textoDescripcion);
    boxLadoDcho.appendChild(descripcion);

    orderEducacion();
    // activarBtnsEditEducacion();
    document.getElementById('modal-edit-educacion').classList.toggle('modal-ventana-active');
    document.getElementById('new-input-educacion-fecha').value = '';
    document.getElementById('new-input-educacion-instituto').value = '';
    document.getElementById('new-input-educacion-titulo').value = '';
    document.getElementById('new-input-educacion-descripcion').value = '';

})

// ---------------------------------------------- FUNCION BOTON EDITAR ----------------------------------------------

let editElemEducacion = function(el){
    // let boxPadreAEditar = arrBtnEditEducacion[i].parentNode.parentNode;
    let boxPadreAEditar = el.parentNode.parentNode;
        let datos = {
            fecha: boxPadreAEditar.children[1].children[0].textContent,
            instituto: boxPadreAEditar.children[1].children[1].textContent,
            titulo: boxPadreAEditar.children[2].children[0].textContent,
            descripcion: boxPadreAEditar.children[2].children[1].textContent
        }

        // Creo la ventana modal
        let ventanaModal = document.createElement('DIV');
        ventanaModal.classList.add('modal-ventana');
        ventanaModal.classList.add('modal-ventana-active');
        document.getElementsByTagName('body')[0].appendChild(ventanaModal);       

        // Creo el formulario de edicion
        let formulario = document.createElement('FORM');
        formulario.classList.add('form-login');
        formulario.classList.add('form-edit');
        ventanaModal.appendChild(formulario);

        // Creacion de titulo
        let titulo = document.createElement('H2');
        titulo.classList.add('form-login-title')
        let textoTitulo = document.createTextNode('Modo edicion!');
        titulo.appendChild(textoTitulo);
        formulario.appendChild(titulo);

        // Creacion de boton close
        let btnCerrar = document.createElement('I');
        btnCerrar.classList.add('fa-solid');
        btnCerrar.classList.add('fa-xmark');
        btnCerrar.classList.add('modal-close-btn');
        formulario.appendChild(btnCerrar);

        // Evento boton close
        btnCerrar.addEventListener('click', ()=>{
            ventanaModal.classList.remove('modal-ventana-active');
            ventanaModal.remove();
        })

        // Creacion de box y sus inputs
        function creadorBoxInputs(id, nameLabel,value){

            // Box container
            let box = document.createElement('DIV');
            box.classList.add('modal-box');   
            box.classList.add('user-box');   
            box.classList.add('modal-box-edit');
            formulario.appendChild(box);
            
            // Label
            let label = document.createElement('LABEL');
            label.classList.add('label-modal');
            label.setAttribute('for',`name-input-${id}`);
            label.setAttribute('id',`name-label-${id}`);
            let textoLabel = document.createTextNode(`${nameLabel}`);
            label.appendChild(textoLabel);
            box.appendChild(label);

            // Input
            let input = document.createElement('INPUT');
            input.classList.add('input-modal');
            input.setAttribute('id',`name-input-${id}`);
            input.setAttribute('type',`text`);
            input.setAttribute('value',`${value}`);
            box.appendChild(input);
            
        }
        creadorBoxInputs('fecha-educ','Fecha: ', datos.fecha);
        creadorBoxInputs('instituto','Instituto: ', datos.instituto);
        creadorBoxInputs('titulo','Titulo: ', datos.titulo);
        creadorBoxInputs('descripcion','Descripcion: ', datos.descripcion);

        // Boton
        let boton = document.createElement('INPUT');
        boton.classList.add('form-login-btn');
        boton.setAttribute('id',`name-boton-edit-educacion`);
        boton.setAttribute('type',`button`);
        boton.setAttribute('value',`Editar`);
        formulario.appendChild(boton);

        boton.addEventListener('click',()=>{
            boxPadreAEditar.children[1].children[0].innerHTML = document.getElementById('name-input-fecha-educ').value;
            boxPadreAEditar.children[1].children[1].innerHTML = document.getElementById('name-input-instituto').value;
            boxPadreAEditar.children[2].children[0].innerHTML = document.getElementById('name-input-titulo').value;
            boxPadreAEditar.children[2].children[1].innerHTML = document.getElementById('name-input-descripcion').value;
            // ventanaModal.classList.remove('modal-ventana-active');
            ventanaModal.remove();
        })
}


// ---------------------------------------------- ACTIVAR BOTONES EDIT EDUCACION ----------------------------------------------

let activarBtnsEditEducacion = ()=> {
    // ---------------------------------------------- BOTON ELIMINAR EDUCACION ----------------------------------------------

    let arrBtnDeleteEducacion = document.querySelectorAll('.btn-delete-educacion');

    for(let i = 0; i < arrBtnDeleteEducacion.length; i++){
        arrBtnDeleteEducacion[i].addEventListener('click', ()=>{
            let boxPadreAEliminar = arrBtnDeleteEducacion[i].parentNode.parentNode;
            boxPadreAEliminar.remove();
            orderEducacion();
        })
    }

    // ---------------------------------------------- BOTON EDITAR EDUCACION ----------------------------------------------

    let arrBtnEditEducacion = document.querySelectorAll('.btn-edit-educacion');

    for(let i = 0; i < arrBtnEditEducacion.length; i++){
        arrBtnEditEducacion[i].addEventListener('click', ()=>{

            editElemEducacion(arrBtnEditEducacion[i]);
            
        })
    }

}