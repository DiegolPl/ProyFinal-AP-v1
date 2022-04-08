

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

    // NUEVO
    if(inputEditPerfilImg.value === '' || inputEditPerfilName.value === '' || inputEditPerfilTitle.value === ''){
        return alert('No debes dejar campos vacios')
    }
    // NUEVO
    
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

    // NUEVO
    if(document.getElementById('edit-about-textarea').value === ''){
        return alert('No debes dejar campos vacios')
    }
    // NUEVO

    document.getElementById('about-text').innerHTML = inputEditAboutTextarea.value;

    //Cerrar modal al upgradear
    modalEditAbout.classList.toggle('modal-ventana-active');

})

// ---------------------------------------------- EXPERIENCIA ----------------------------------------------

let orderExperiencia = () => {
    if(window.innerWidth > 768){
            
        // Cantidad de elementos
        let cantidadElementos = document.getElementById('container-experiencia').childElementCount;
    
        // Array con los elementos 
        let arrElementos = [...document.getElementById('container-experiencia').children]; //El metodo splice borra del original x ende tengo que hacerlo sobre una copia del array original
        
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
    activarBtnsEditExperiencia();
    activarBtnsEditHys();
    activarBtnsEditProyecto();
}

// ---------------------------------------------- CREAR BOXSECCION (EDUCACION, EXP) ----------------------------------------------

let setBoxSection = function(seccion, idPrimeroIzq, idSegundoIzq, idPrimeroDcha, idSegundoDcha, orderSeccion){
    let containerPadre = document.getElementById(`container-${seccion}`);

    // Contenedor de nuevo elemento
    let boxSeccion = document.createElement('DIV');
    boxSeccion.classList.add('box-seccion');
    containerPadre.prepend(boxSeccion);

    // Contenedor de botones de edit
    let boxEdit = document.createElement('DIV');
    boxEdit.classList.add('box-edit');
    boxEdit.classList.add('box-edit-flex');
    boxSeccion.appendChild(boxEdit);

    // boton edit
    let btnEdit = document.createElement('SPAN');
    btnEdit.classList.add('material-icons');
    btnEdit.classList.add('material-icons-outlined');
    btnEdit.classList.add('btn-edit');
    btnEdit.classList.add(`btn-edit-${seccion}`);
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
    btnDelete.classList.add(`btn-delete-${seccion}`);
    let textoBtnDelete = document.createTextNode('cancel');
    btnDelete.appendChild(textoBtnDelete);
    boxEdit.appendChild(btnDelete);

    // Funcion boton delete
    btnDelete.addEventListener('click', ()=>{
        let boxPadreAEliminar = btnDelete.parentNode.parentNode;
        boxPadreAEliminar.remove();
        if(orderSeccion === 'orderEducacion'){
            orderEducacion();
        }
        if(orderSeccion === 'orderExperiencia'){
            orderExperiencia();
        }
    })

    // Contenedor de lado izquierdo
    let boxLadoIzq = document.createElement('DIV');
    boxLadoIzq.classList.add('box-lado-izq');
    boxSeccion.appendChild(boxLadoIzq);

    // Fecha - PrimeroIzq
    let primeroIzq = document.createElement('H3');
    // let textoFecha = document.createTextNode(`${document.getElementById(`new-input-educacion-fecha`).value}`);
    let textoPrimeroIzq = document.createTextNode(`${document.getElementById(`${idPrimeroIzq}`).value}`);
    primeroIzq.appendChild(textoPrimeroIzq);
    boxLadoIzq.appendChild(primeroIzq);

    // Instituto - SegundoIzq
    let segundoIzq = document.createElement('H4');
    // let textoInstituto = document.createTextNode(`${document.getElementById('new-input-educacion-instituto').value}`);
    let textoSegundoIzq = document.createTextNode(`${document.getElementById(`${idSegundoIzq}`).value}`);
    segundoIzq.appendChild(textoSegundoIzq);
    boxLadoIzq.appendChild(segundoIzq);

    // Contenedor de lado derecho
    let boxLadoDcho = document.createElement('DIV');
    boxLadoDcho.classList.add('box-lado-dcho');
    boxSeccion.appendChild(boxLadoDcho);

    // Titulo - PrimeroDcha
    let primeroDcha = document.createElement('H3');
    // let textoTitulo = document.createTextNode(`${document.getElementById('new-input-educacion-titulo').value}`);
    let textoPrimeroDcha = document.createTextNode(`${document.getElementById(`${idPrimeroDcha}`).value}`);
    primeroDcha.appendChild(textoPrimeroDcha);
    boxLadoDcho.appendChild(primeroDcha);

    // Descripcion - SegundoDcha
    let segundoDcha = document.createElement('H4');
    // let textoDescripcion = document.createTextNode(`${document.getElementById('new-input-educacion-descripcion').value}`);
    let textoSegundoDcha = document.createTextNode(`${document.getElementById(`${idSegundoDcha}`).value}`);
    segundoDcha.appendChild(textoSegundoDcha);
    boxLadoDcho.appendChild(segundoDcha);

    if(orderSeccion === 'orderEducacion'){
        orderEducacion();
    }
    if(orderSeccion === 'orderExperiencia'){
        orderExperiencia();
    }
    document.getElementById(`modal-edit-${seccion}`).classList.toggle('modal-ventana-active');
    // document.getElementById('new-input-educacion-fecha').value = '';
    document.getElementById(`${idPrimeroIzq}`).value = '';
    // document.getElementById('new-input-educacion-instituto').value = '';
    document.getElementById(`${idSegundoIzq}`).value = '';
    // document.getElementById('new-input-educacion-titulo').value = '';
    document.getElementById(`${idPrimeroDcha}`).value = '';
    // document.getElementById('new-input-educacion-descripcion').value = '';
    document.getElementById(`${idSegundoDcha}`).value = '';
}


// ---------------------------------------------- BOTON AGREGAR EXPERIENCIA ----------------------------------------------
let btnAddExperiencia = document.getElementById('btn-experiencia-add');
let btnCloseAddExperiencia = document.getElementById('btn-edit-experiencia-close');
let btnUpgradeExperiencia = document.getElementById('edit-experiencia-btn');

// NUEVO
let btnActivarEditExperiencia = document.getElementById('btn-experiencia-main');
btnActivarEditExperiencia.addEventListener('click',()=>{
    document.getElementById('btn-experiencia-add').classList.toggle('edit-btn-add-block');

    let elementos = document.querySelectorAll('.experiencia .container-seccion .box-seccion')
    for(let i = 0; i < elementos.length; i++){
        elementos[i].children[0].classList.toggle('box-edit-flex')
    }
})
// NUEVO


btnAddExperiencia.addEventListener('click',()=>{
    document.getElementById('modal-edit-experiencia').classList.toggle('modal-ventana-active');
})

btnCloseAddExperiencia.addEventListener('click',()=>{
    document.getElementById('modal-edit-experiencia').classList.toggle('modal-ventana-active');
})

btnUpgradeExperiencia.addEventListener('click',()=>{

    // NUEVO
    if(document.getElementById('new-input-experiencia-fecha').value === '' || document.getElementById('new-input-experiencia-lugar').value === '' || document.getElementById('new-input-experiencia-ocupacion').value === '' || document.getElementById('new-input-experiencia-descripcion').value === ''){
        return alert('No debes dejar campos vacios')
    }
    // NUEVO

    setBoxSection('experiencia','new-input-experiencia-fecha','new-input-experiencia-lugar','new-input-experiencia-ocupacion','new-input-experiencia-descripcion', 'orderExperiencia');
})

// ---------------------------------------------- ACTIVAR BOTONES EDIT EXPERIENCIA ----------------------------------------------

let activarBtnsEditExperiencia = ()=> {
    // ---------------------------------------------- BOTON ELIMINAR EXPERIENCIA ----------------------------------------------

    let arrBtnDeleteExperiencia = document.querySelectorAll('.btn-delete-experiencia');

    for(let i = 0; i < arrBtnDeleteExperiencia.length; i++){
        arrBtnDeleteExperiencia[i].addEventListener('click', ()=>{
            let boxPadreAEliminar = arrBtnDeleteExperiencia[i].parentNode.parentNode;
            boxPadreAEliminar.remove();
            orderExperiencia();
        })
    }

    // ---------------------------------------------- BOTON EDITAR EXPERIENCIA ----------------------------------------------

    let arrBtnEditExperiencia = document.querySelectorAll('.btn-edit-experiencia');

    for(let i = 0; i < arrBtnEditExperiencia.length; i++){
        arrBtnEditExperiencia[i].addEventListener('click', ()=>{

            editElemEducacion(arrBtnEditExperiencia[i]);
            
        })
    }

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
    // let containerPadre = document.getElementById('container-educacion');

    // // Contenedor de nuevo elemento
    // let boxSeccion = document.createElement('DIV');
    // boxSeccion.classList.add('box-seccion');
    // containerPadre.prepend(boxSeccion);

    // // Contenedor de botones de edit
    // let boxEdit = document.createElement('DIV');
    // boxEdit.classList.add('box-edit');
    // boxSeccion.appendChild(boxEdit);

    // // boton edit
    // let btnEdit = document.createElement('SPAN');
    // btnEdit.classList.add('material-icons');
    // btnEdit.classList.add('material-icons-outlined');
    // btnEdit.classList.add('btn-edit');
    // btnEdit.classList.add('btn-edit-educacion');
    // let textoBtnEdit = document.createTextNode('edit');
    // btnEdit.appendChild(textoBtnEdit);
    // boxEdit.appendChild(btnEdit);

    // // Funcion boton edit
    // btnEdit.addEventListener('click',()=>{
    //     editElemEducacion(btnEdit);
    // })

    // // boton delete
    // let btnDelete = document.createElement('SPAN');
    // btnDelete.classList.add('material-icons');
    // btnDelete.classList.add('material-icons-outlined');
    // btnDelete.classList.add('btn-delete');
    // btnDelete.classList.add('btn-delete-educacion');
    // let textoBtnDelete = document.createTextNode('cancel');
    // btnDelete.appendChild(textoBtnDelete);
    // boxEdit.appendChild(btnDelete);

    // // Funcion boton delete
    // btnDelete.addEventListener('click', ()=>{
    //     let boxPadreAEliminar = btnDelete.parentNode.parentNode;
    //     boxPadreAEliminar.remove();
    //     orderEducacion();
    // })

    // // Contenedor de lado izquierdo
    // let boxLadoIzq = document.createElement('DIV');
    // boxLadoIzq.classList.add('box-lado-izq');
    // boxSeccion.appendChild(boxLadoIzq);

    // // Fecha
    // let fecha = document.createElement('H3');
    // let textoFecha = document.createTextNode(`${document.getElementById('new-input-educacion-fecha').value}`);
    // fecha.appendChild(textoFecha);
    // boxLadoIzq.appendChild(fecha);

    // // Instituto
    // let instituto = document.createElement('H4');
    // let textoInstituto = document.createTextNode(`${document.getElementById('new-input-educacion-instituto').value}`);
    // instituto.appendChild(textoInstituto);
    // boxLadoIzq.appendChild(instituto);

    // // Contenedor de lado derecho
    // let boxLadoDcho = document.createElement('DIV');
    // boxLadoDcho.classList.add('box-lado-dcho');
    // boxSeccion.appendChild(boxLadoDcho);

    // // Titulo
    // let titulo = document.createElement('H3');
    // let textoTitulo = document.createTextNode(`${document.getElementById('new-input-educacion-titulo').value}`);
    // titulo.appendChild(textoTitulo);
    // boxLadoDcho.appendChild(titulo);

    // // Descripcion
    // let descripcion = document.createElement('H4');
    // let textoDescripcion = document.createTextNode(`${document.getElementById('new-input-educacion-descripcion').value}`);
    // descripcion.appendChild(textoDescripcion);
    // boxLadoDcho.appendChild(descripcion);

    // orderEducacion();
    // document.getElementById('modal-edit-educacion').classList.toggle('modal-ventana-active');
    // document.getElementById('new-input-educacion-fecha').value = '';
    // document.getElementById('new-input-educacion-instituto').value = '';
    // document.getElementById('new-input-educacion-titulo').value = '';
    // document.getElementById('new-input-educacion-descripcion').value = '';

    // NUEVO
    if(document.getElementById('new-input-educacion-fecha').value === '' || document.getElementById('new-input-educacion-instituto').value === '' || document.getElementById('new-input-educacion-titulo').value === '' || document.getElementById('new-input-educacion-descripcion').value === ''){
        return alert('No debes dejar campos vacios')
    }
    // NUEVO

    setBoxSection('educacion','new-input-educacion-fecha','new-input-educacion-instituto','new-input-educacion-titulo','new-input-educacion-descripcion', 'orderEducacion');

})

// NUEVO
let btnActivarEditEducacion = document.getElementById('btn-educacion-main');
btnActivarEditEducacion.addEventListener('click',()=>{
    document.getElementById('btn-educacion-add').classList.toggle('edit-btn-add-block');

    let elementos = document.querySelectorAll('.educacion .container-seccion .box-seccion')
    for(let i = 0; i < elementos.length; i++){
        elementos[i].children[0].classList.toggle('box-edit-flex')
    }
})
// NUEVO

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

// ---------------------------------------------- H&S SKILLS ----------------------------------------------

let btnAddHys = document.getElementById('btn-hys-add');
let btnCloseAddHys = document.getElementById('btn-edit-hys-close');
let btnUpgradeHys = document.getElementById('edit-hys-btn');

btnAddHys.addEventListener('click',()=>{
    document.getElementById('modal-edit-hys').classList.toggle('modal-ventana-active');
})

btnCloseAddHys.addEventListener('click',()=>{
    document.getElementById('modal-edit-hys').classList.toggle('modal-ventana-active');
})

btnUpgradeHys.addEventListener('click',()=>{

    if(document.getElementById('new-input-hys-porcentaje').value < 0 || document.getElementById('new-input-hys-porcentaje').value > 100){
        return alert('El valor del porcentaje debe ser entre 0 y 100');
    }
    if(document.getElementById('new-input-hys-skill').value === ''){
        return alert('Debes ingresar un nombre de skill valido')
    }

    let containerPadre = document.getElementById('container-hys');

    // Contenedor de nuevo elemento
    let boxSeccion = document.createElement('DIV');
    boxSeccion.classList.add('box-seccion');
    // containerPadre.prepend(boxSeccion);
    containerPadre.appendChild(boxSeccion);

    // Contenedor de botones de edit
    let boxEdit = document.createElement('DIV');
    boxEdit.classList.add('box-edit');
    boxEdit.classList.add('box-edit-flex');
    boxSeccion.appendChild(boxEdit);

    // boton edit
    let btnEdit = document.createElement('SPAN');
    btnEdit.classList.add('material-icons');
    btnEdit.classList.add('material-icons-outlined');
    btnEdit.classList.add('btn-edit');
    btnEdit.classList.add('container-hys');
    let textoBtnEdit = document.createTextNode('edit');
    btnEdit.appendChild(textoBtnEdit);
    boxEdit.appendChild(btnEdit);

    // Funcion boton edit
    btnEdit.addEventListener('click',()=>{
        let boxPadreAEditar = btnEdit.parentNode.parentNode;

        let valorStyle = boxPadreAEditar.children[2].children[0].children[0].getAttribute('style');
        console.log(valorStyle)
        let porcentajeValor = valorStyle.match(/\d+/);

        console.log(porcentajeValor[0])
        let datos = {
            name: boxPadreAEditar.children[1].textContent,
            porcentaje: Number(porcentajeValor)
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
        creadorBoxInputs('name-skill','Skill: ', datos.name);
        creadorBoxInputs('porcentaje-skill','Porcentaje: ', datos.porcentaje);

        // Boton
        let boton = document.createElement('INPUT');
        boton.classList.add('form-login-btn');
        boton.setAttribute('id','name-boton-edit-hys');
        boton.setAttribute('type','button');
        boton.setAttribute('value','Editar');
        formulario.appendChild(boton);

        boton.addEventListener('click',()=>{
            boxPadreAEditar.children[1].innerHTML = document.getElementById('name-input-name-skill').value;
            boxPadreAEditar.children[2].children[0].children[0].style.width = document.getElementById('name-input-porcentaje-skill').value + '%';
            // ventanaModal.classList.remove('modal-ventana-active');
            ventanaModal.remove();
        })
    })

    // boton delete
    let btnDelete = document.createElement('SPAN');
    btnDelete.classList.add('material-icons');
    btnDelete.classList.add('material-icons-outlined');
    btnDelete.classList.add('btn-delete');
    btnDelete.classList.add('btn-delete-hys');
    let textoBtnDelete = document.createTextNode('cancel');
    btnDelete.appendChild(textoBtnDelete);
    boxEdit.appendChild(btnDelete);

    // Funcion boton delete
    btnDelete.addEventListener('click', ()=>{
        let boxPadreAEliminar = btnDelete.parentNode.parentNode;
        boxPadreAEliminar.remove();
    })

    // Titulo de Skill
    let titulo = document.createElement('H3');
    titulo.classList.add('skill-name');
    let textoTitulo = document.createTextNode(`${document.getElementById('new-input-hys-skill').value}`);
    titulo.appendChild(textoTitulo);
    boxSeccion.appendChild(titulo);

    // Skill box
    let skillBox = document.createElement('DIV');
    skillBox.classList.add('skill-box');

    // Skill bar bg
    let skillBarBg = document.createElement('DIV');
    skillBarBg.classList.add('skill-bar-bg');
    
    // Skill bar porcentaje

    let skillBar = document.createElement('DIV');
    skillBar.classList.add('skill-bar');
    skillBar.setAttribute('id',`skill-${document.getElementById('new-input-hys-skill').value}`);
    skillBar.style.width = document.getElementById('new-input-hys-porcentaje').value + '%';
    skillBarBg.appendChild(skillBar);
    skillBox.appendChild(skillBarBg);
    boxSeccion.appendChild(skillBox);

    // Cerrar Ventana Modal
    document.getElementById('modal-edit-hys').classList.toggle('modal-ventana-active');
    document.getElementById('new-input-hys-skill').value = '';
    document.getElementById('new-input-hys-porcentaje').value = '';
})

let activarBtnsEditHys = ()=> {
    // ---------------------------------------------- BOTON ELIMINAR HYS ----------------------------------------------

    let arrBtnDeleteHys = document.querySelectorAll('.btn-delete-hys');

    for(let i = 0; i < arrBtnDeleteHys.length; i++){
        arrBtnDeleteHys[i].addEventListener('click', ()=>{
            let boxPadreAEliminar = arrBtnDeleteHys[i].parentNode.parentNode;
            boxPadreAEliminar.remove();
        })
    }

    // ---------------------------------------------- BOTON EDITAR HYS ----------------------------------------------

    let arrBtnEditHys = document.querySelectorAll('.btn-edit-hys');

        for(let i = 0; i < arrBtnEditHys.length; i++){
            arrBtnEditHys[i].addEventListener('click', ()=>{

            let boxPadreAEditar = arrBtnEditHys[i].parentNode.parentNode;

            let valorStyle = boxPadreAEditar.children[2].children[0].children[0].getAttribute('style');
            let porcentajeValor = valorStyle.match(/\d+/);

            console.log(porcentajeValor[0])
            let datos = {
                name: boxPadreAEditar.children[1].textContent,
                porcentaje: Number(porcentajeValor)
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
            creadorBoxInputs('name-skill','Skill: ', datos.name);
            creadorBoxInputs('porcentaje-skill','Porcentaje: ', datos.porcentaje);

            // Boton
            let boton = document.createElement('INPUT');
            boton.classList.add('form-login-btn');
            boton.setAttribute('id','name-boton-edit-hys');
            boton.setAttribute('type','button');
            boton.setAttribute('value','Editar');
            formulario.appendChild(boton);

            boton.addEventListener('click',()=>{
                boxPadreAEditar.children[1].innerHTML = document.getElementById('name-input-name-skill').value;
                boxPadreAEditar.children[2].children[0].children[0].style.width = document.getElementById('name-input-porcentaje-skill').value + '%';
                // ventanaModal.classList.remove('modal-ventana-active');
                ventanaModal.remove();
            })
            
        })
    }

}

// NUEVO
let btnActivarEditHys = document.getElementById('btn-hys-main');
btnActivarEditHys.addEventListener('click',()=>{
    document.getElementById('btn-hys-add').classList.toggle('edit-btn-add-block');

    let elementos = document.querySelectorAll('.hys .container-seccion .box-seccion')
    for(let i = 0; i < elementos.length; i++){
        elementos[i].children[0].classList.toggle('box-edit-flex')
    }
})
// NUEVO

// ---------------------------------------------- PROYECTOS ----------------------------------------------

let btnAddProyecto = document.getElementById('btn-proyecto-add');
let btnCloseAddProyecto = document.getElementById('btn-edit-proyecto-close');
let btnUpgradeProyecto = document.getElementById('edit-proyecto-btn');

btnAddProyecto.addEventListener('click',()=>{
    document.getElementById('modal-edit-proyecto').classList.toggle('modal-ventana-active');
})

btnCloseAddProyecto.addEventListener('click',()=>{
    document.getElementById('modal-edit-proyecto').classList.toggle('modal-ventana-active');
})

btnUpgradeProyecto.addEventListener('click',()=>{
    // NUEVO
    if(document.getElementById('edit-proyecto-input-titulo').value === '' || document.getElementById('edit-proyecto-input-descripcion').value === '' || document.getElementById('edit-proyecto-input-img').value === ''){
        return alert('No debes dejar campos vacios')
    }
    // NUEVO

    let valorInputImg = String(document.getElementById('edit-proyecto-input-img').value);
    let lastSlashInputImg = valorInputImg.lastIndexOf('\\');    //Index del ultimo \
    // let lastSlashSrcImgActual = String(document.getElementById('perfil-foto').src).lastIndexOf('/');
    // let newSrcParteUno = String(document.getElementById('perfil-foto').src).slice(0, lastSlashSrcImgActual + 1);
    let newSrcParteDos = valorInputImg.slice(lastSlashInputImg + 1, valorInputImg.length);

    // Valor de SRC de la imagen - titulo - descripcion
    // let newSrc = newSrcParteUno + newSrcParteDos; 
    console.log(document.getElementById('edit-proyecto-input-img').value)
    let newSrc = `media/${newSrcParteDos}`; 
    let newTitle = document.getElementById('edit-proyecto-input-titulo').value;
    let newDescripcion = document.getElementById('edit-proyecto-input-descripcion').value;

    // Creamos el nuevo elemento
    // Guardamos el elemento padre general
    let boxSeccion = document.getElementById('container-proyecto');

    // Creamos la caja que lo contiene
    let box = document.createElement('A');
    box.classList.add('card-proyecto');
    // box.setAttribute('href','#');
    boxSeccion.appendChild(box);

    // Contenedor de botones de edit
    let boxEdit = document.createElement('DIV');
    boxEdit.classList.add('box-edit');
    boxEdit.classList.add('box-edit-flex');
    box.appendChild(boxEdit);

    // boton edit
    let btnEdit = document.createElement('SPAN');
    btnEdit.classList.add('material-icons');
    btnEdit.classList.add('material-icons-outlined');
    btnEdit.classList.add('btn-edit');
    btnEdit.classList.add('container-proyecto');
    let textoBtnEdit = document.createTextNode('edit');
    btnEdit.appendChild(textoBtnEdit);
    boxEdit.appendChild(btnEdit);

    // Funcion boton edit
    btnEdit.addEventListener('click',()=>{
        let boxPadreAEditar = btnEdit.parentNode.parentNode;

        let valorSrc = boxPadreAEditar.children[1].children[0].getAttribute('src');
        // let lastSlashInputImg = valorSrc.lastIndexOf('\\');    //Index del ultimo \


        // console.log(valorSrc)
        let datos = {
            srcImagen: valorSrc,
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
        function creadorBoxInputs(id, nameLabel,type,value){

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
            input.setAttribute('type',`${type}`);
            input.setAttribute('value',`${value}`);
            box.appendChild(input);
            
        }
        creadorBoxInputs('src-foto','Imagen: ','file', datos.srcImagen);
        creadorBoxInputs('titulo-proyecto','Titulo: ','text', datos.titulo);
        creadorBoxInputs('descripcion-proyecto','Descripcion: ','text', datos.descripcion);

        // Boton
        let boton = document.createElement('INPUT');
        boton.classList.add('form-login-btn');
        boton.setAttribute('id','name-boton-edit-proyecto');
        boton.setAttribute('type','button');
        boton.setAttribute('value','Editar');
        formulario.appendChild(boton);

        boton.addEventListener('click',()=>{

            let valorInputImg = String(document.getElementById('name-input-src-foto').value);
            if(valorInputImg === ''){
                valorInputImg = valorSrc;
                let indexSlash = valorInputImg.lastIndexOf('\\');

                boxPadreAEditar.children[1].children[0].src = `${valorInputImg.slice(indexSlash + 1, valorInputImg.length)}`;
                boxPadreAEditar.children[2].children[0].innerHTML = document.getElementById('name-input-titulo-proyecto').value;
                boxPadreAEditar.children[2].children[1].innerHTML = document.getElementById('name-input-descripcion-proyecto').value;
                // ventanaModal.classList.remove('modal-ventana-active');
                ventanaModal.remove();
            }else{
                let indexSlash = valorInputImg.lastIndexOf('\\');
    
                boxPadreAEditar.children[1].children[0].src = `media/${valorInputImg.slice(indexSlash + 1, valorInputImg.length)}`;
                boxPadreAEditar.children[2].children[0].innerHTML = document.getElementById('name-input-titulo-proyecto').value;
                boxPadreAEditar.children[2].children[1].innerHTML = document.getElementById('name-input-descripcion-proyecto').value;
                // ventanaModal.classList.remove('modal-ventana-active');
                ventanaModal.remove();
            }
            // console.log(valorInputImg)
            // let getSrc = document.getElementById('name-input-src-foto').getAttribute('src');
        })
    })

    // boton delete
    let btnDelete = document.createElement('SPAN');
    btnDelete.classList.add('material-icons');
    btnDelete.classList.add('material-icons-outlined');
    btnDelete.classList.add('btn-delete');
    btnDelete.classList.add('btn-delete-hys');
    let textoBtnDelete = document.createTextNode('cancel');
    btnDelete.appendChild(textoBtnDelete);
    boxEdit.appendChild(btnDelete);

    // Funcion boton delete
    btnDelete.addEventListener('click', ()=>{
        let boxPadreAEliminar = btnDelete.parentNode.parentNode;
        boxPadreAEliminar.remove();
    })

    // Creamos CARD TOP
    let cardTopBox = document.createElement('DIV');
    cardTopBox.classList.add('card-top');
    box.appendChild(cardTopBox);
    
    let cardTopContent = document.createElement('IMG');
    cardTopContent.classList.add('card-img');
    cardTopContent.setAttribute('src', newSrc);
    cardTopContent.setAttribute('alt', `Imagen representativa de proyecto: ${newTitle}`);
    cardTopBox.appendChild(cardTopContent);

    // Creamos CARD BOTTOM
    let cardBottomBox = document.createElement('DIV');
    cardBottomBox.classList.add('card-bottom');
    box.appendChild(cardBottomBox);

    let cardBottomTitle = document.createElement('H3');
    let cardBottomTitleText = document.createTextNode(newTitle);
    cardBottomTitle.appendChild(cardBottomTitleText);
    cardBottomTitle.classList.add('card-title');
    cardBottomBox.appendChild(cardBottomTitle);
    
    let cardBottomDescripcion = document.createElement('P');
    let cardBottomDescripcionText = document.createTextNode(newDescripcion);
    cardBottomDescripcion.appendChild(cardBottomDescripcionText);
    cardBottomDescripcion.classList.add('card-description');
    cardBottomBox.appendChild(cardBottomDescripcion);

    // Vaciamos los inputs
    document.getElementById('edit-proyecto-input-img').value = '';
    document.getElementById('edit-proyecto-input-titulo').value = '';
    document.getElementById('edit-proyecto-input-descripcion').value = '';

    // Cerramos ventana modal
    document.getElementById('modal-edit-proyecto').classList.toggle('modal-ventana-active');

})



let activarBtnsEditProyecto = ()=> {
    // ---------------------------------------------- BOTON ELIMINAR PROYECTO ----------------------------------------------

    let arrBtnDeleteProyecto = document.querySelectorAll('.btn-delete-proyecto');

    for(let i = 0; i < arrBtnDeleteProyecto.length; i++){
        arrBtnDeleteProyecto[i].addEventListener('click', ()=>{
            let boxPadreAEliminar = arrBtnDeleteProyecto[i].parentNode.parentNode;
            boxPadreAEliminar.remove();
        })
    }

    // ---------------------------------------------- BOTON EDITAR PROYECTO ----------------------------------------------

    let arrBtnEditProyecto = document.querySelectorAll('.btn-edit-proyecto');

        for(let i = 0; i < arrBtnEditProyecto.length; i++){
            arrBtnEditProyecto[i].addEventListener('click', ()=>{
            let boxPadreAEditar = arrBtnEditProyecto[i].parentNode.parentNode;

            let valorSrc = boxPadreAEditar.children[1].children[0].getAttribute('src');
            // let lastSlashInputImg = valorSrc.lastIndexOf('\\');    //Index del ultimo \


            // console.log(valorSrc)
            let datos = {
                srcImagen: valorSrc,
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
            function creadorBoxInputs(id, nameLabel,type,value){

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
                input.setAttribute('type',`${type}`);
                input.setAttribute('value',`${value}`);
                box.appendChild(input);
                
            }
            creadorBoxInputs('src-foto','Imagen: ','file', datos.srcImagen);
            creadorBoxInputs('titulo-proyecto','Titulo: ','text', datos.titulo);
            creadorBoxInputs('descripcion-proyecto','Descripcion: ','text', datos.descripcion);

            // Boton
            let boton = document.createElement('INPUT');
            boton.classList.add('form-login-btn');
            boton.setAttribute('id','name-boton-edit-proyecto');
            boton.setAttribute('type','button');
            boton.setAttribute('value','Editar');
            formulario.appendChild(boton);

            boton.addEventListener('click',()=>{

                let valorInputImg = String(document.getElementById('name-input-src-foto').value);
                if(valorInputImg === ''){
                    valorInputImg = valorSrc;
                    let indexSlash = valorInputImg.lastIndexOf('\\');

                    boxPadreAEditar.children[1].children[0].src = `${valorInputImg.slice(indexSlash + 1, valorInputImg.length)}`;
                    boxPadreAEditar.children[2].children[0].innerHTML = document.getElementById('name-input-titulo-proyecto').value;
                    boxPadreAEditar.children[2].children[1].innerHTML = document.getElementById('name-input-descripcion-proyecto').value;
                    // ventanaModal.classList.remove('modal-ventana-active');
                    ventanaModal.remove();
                }else{
                    let indexSlash = valorInputImg.lastIndexOf('\\');
        
                    boxPadreAEditar.children[1].children[0].src = `media/${valorInputImg.slice(indexSlash + 1, valorInputImg.length)}`;
                    boxPadreAEditar.children[2].children[0].innerHTML = document.getElementById('name-input-titulo-proyecto').value;
                    boxPadreAEditar.children[2].children[1].innerHTML = document.getElementById('name-input-descripcion-proyecto').value;
                    // ventanaModal.classList.remove('modal-ventana-active');
                    ventanaModal.remove();
                }


                document.getElementById('edit-proyecto-input-img').value = '';
                document.getElementById('edit-proyecto-input-titulo').value = '';
                document.getElementById('edit-proyecto-input-descripcion').value = '';
                // ventanaModal.classList.remove('modal-ventana-active');
                ventanaModal.remove();
            })
            
        })
    }

}






let btnActivarEditProyecto = document.getElementById('btn-proyecto-main');
btnActivarEditProyecto.addEventListener('click',()=>{
    document.getElementById('btn-proyecto-add').classList.toggle('edit-btn-add-block');

    let elementos = document.querySelectorAll('.proyecto .container-seccion .card-proyecto')
    for(let i = 0; i < elementos.length; i++){
        elementos[i].children[0].classList.toggle('box-edit-flex')
    }
})