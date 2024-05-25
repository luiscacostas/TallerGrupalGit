//VARIABLES
const arrayUsuarios = [
    {   
        usuario: 'Antonio',
        password: 'holaquetal',
    },
    {
        usario: 'Hector',
        password: 'soyelprofe',
    }
]
const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
const formulario = document.querySelector("#formulario")
const botonEnviar = document.querySelector("#enviar")
const botonRegistrar = document.querySelector("#registrarse")


//EVENTOS

botonEnviar.addEventListener('click', (ev) => {
    ev.preventDefault()
    validarLogin()
})

botonRegistrar.addEventListener('click', (ev) => {
   ev.preventDefault()
   registrarUsuario()
})


//FUNCIONES




const validarLogin = () => {

    const usuario = document.querySelector("#usuario").value
    const password = document.querySelector("#password").value
    arrayLogin = []

    arrayUsuarios.forEach(elementoLogin => {
        arrayLogin.push(elementoLogin.usuario, elementoLogin.password)
    })

    if(usuario === ''){
        alert('Por favor rellena el usuario')
    }else if(!arrayLogin.includes(usuario)){
        alert('Usuario no encontrado: registrate para hacer Login')
    }
    if(password === ''){
        alert('Por favor rellena la contraseña')
    }else if(!arrayLogin.includes(password)){
        alert('¡Contraseña incorrecta!')
    }

    if(arrayLogin.includes(usuario) && arrayLogin.includes(password)){
        alert('LOGEADO')
        formulario.submit()
    }
    console.log(usuario)
    console.log(password)
}

const registrarUsuario = () => {
    const usuario = document.querySelector('#usuario').value
    const password = document.querySelector('#password').value

    if(usuario === ''){
        alert('Por favor rellena el usuario')
    }
    if(password === ''){
        alert('Por favor rellena la contraseña')
    }

    arrayUsuarios.push({usuario, password})
    console.log(arrayUsuarios)

    if(usuario !== '' && password !== ''){
        alert('REGISTRADO')
    }
}