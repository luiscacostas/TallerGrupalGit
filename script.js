//validar usuario y contraseña

document.addEventListener('DOMContentLoaded', () => {

// VARIABLES

const listaErrores = document.querySelector('#listaErrores');
const myForm = document.querySelector('#myForm');


const usuariosRegistrados = [
    {
        usuarioRegistrado: 'Emilio',
        contraseñaRegistrada: 'passwordEmilio1',
    },
    {
        usuarioRegistrado: 'Antonio',
        contraseñaRegistrada: 'passwordAntonio2',
    },
    {
        usuarioRegistrado: 'Luis',
        contraseñaRegistrada: 'passwordLuis3',
    }
];

// EVENTOS

myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const usuario = myForm.usuario.value;
    const contraseña = myForm.contraseña.value;
    validarUsuario(usuario, contraseña);
    validarUsuarioRegistrado(usuario, contraseña);
});


// FUNCIONES

const validarUsuario =(usuario, contraseña)=> {
    
    let errores = '';
    
    if (usuario == '') {
        errores += '<li>El Usuario es obligatorio</li>';
    } else if (!/[a-zA-Z\s]{3,}/.test(usuario)) {
        errores += '<li>El Usuario debe contener caracteres alfanuméricos</li>';
    };
    
    if (contraseña == '') {
        errores += '<li>La Contraseña es obligatoria</li>';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(contraseña)) {
        errores += '<li>La Contraseña debe contener al menos una minúsucla, una mayúsucla y un número.</li>';
    };
    
    if (errores != '') {
        listaErrores.innerHTML=errores
    } else {
        listaErrores.innerHTML = '';
        myForm.reset();
    };
};

const validarUsuarioRegistrado = (usuario, contraseña) => {
    const usuarioValido = usuariosRegistrados.some(({usuarioRegistrado, contraseñaRegistrada}) => {
        return usuario === usuarioRegistrado && contraseña === contraseñaRegistrada;
    });

    if (usuarioValido) {
        console.log('Usuario y contraseña válidos');
    } else {
        console.log('Usuario o contraseña incorrectos');
    }
};

});