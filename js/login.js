function login(){
    let userValue = document.getElementById('user-input').value;
    let passValue = document.getElementById('pass-input').value;
    if(userValue === 'DiegoPdl92' && passValue === 'P4ss4LoginTemp!'){
        let iconosEdit = document.querySelectorAll('.material-icons-outlined');
        for(let icono of iconosEdit){
            icono.classList.add('d-block');
        }
        modalLogin.classList.toggle('modal-ventana-active');
        inputUser.value = '';
        inputPass.value = '';
        document.getElementById('label-login-user').classList.remove('label-top');
        document.getElementById('label-login-pass').classList.remove('label-top');

        document.getElementById('btn-login').classList.toggle('d-none');
        document.getElementById('btn-logout').classList.toggle('d-none');
        document.getElementById('btn-logout').classList.toggle('d-block');

    }else{
        alert('Usuario o password incorrectas');
    }
}

document.getElementById('btn-logout').addEventListener('click',()=>{
    logout();
    document.getElementById('btn-login').classList.toggle('d-none');
    document.getElementById('btn-logout').classList.toggle('d-none');
    document.getElementById('btn-logout').classList.toggle('d-block');

})

function logout(){
    document.getElementById('icono-user').classList.add('fa-user');
    document.getElementById('icono-user').classList.remove('fa-right-from-bracket');
    let iconosEdit = document.querySelectorAll('.material-icons-outlined');
    for(let icono of iconosEdit){
        icono.classList.remove('d-block');
    }
}