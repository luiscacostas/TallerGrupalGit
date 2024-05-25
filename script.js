const formulario = document.querySelector('#formulario')

let usuario = [
    {
    id: 1,
    nombre: 'Luis Carlos',
    password: '123456789'
    },
    {
        id: 2,
        nombre: 'Jose Antonio',
        password: '00000000'
    },
    {
        id: 3,
        nombre: 'Jose Antonio',
        password: 'abcdefg'
    }
];
const expreReg = {
    usuario: /^[a-zA-Z0-9.,':!?-]+$/,
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
    
}

formulario.addEventListener('submit',(ev)=>{
    ev.preventDefault();
})



