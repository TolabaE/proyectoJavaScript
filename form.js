//lo que hace este codigo es que el usuario pueda consultar y sus datos ser guardados en el localstorage.

class Datos{
    constructor(nombre,apellido,email,nota,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.nota = nota;
        this.telefono = telefono;
    }
}

const consultas = [];
const formContacto = document.getElementById("cajaForm");

formContacto.addEventListener(`submit`,(event)=>{
    event.preventDefault();
    const datIngresado = new FormData(event.target);

    const consulta = new Datos (datIngresado.get("nombre"),datIngresado.get("apellido"),datIngresado.get("email"),datIngresado.get("texto"),datIngresado.get("telefono"));

    consultas.push(consulta);
    localStorage.setItem("consultas",JSON.stringify(consultas));
    formContacto.reset();
});