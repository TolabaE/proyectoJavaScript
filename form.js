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
if (localStorage.getItem("consultas")) {
    tareas = JSON.parse(localStorage.getItem("consultas"));
} else {
    localStorage.setItem("consultas",JSON.stringify("consultas"));
}

const formContacto = document.getElementById("cajaForm");
const button = document.getElementById("btnPedir");
const cajaDatos = document.getElementById("contenedor-opinion");

formContacto.addEventListener(`submit`,(event)=>{
    event.preventDefault();
    const datIngresado = new FormData(event.target);

    const consulta = new Datos (datIngresado.get("nombre"),datIngresado.get("apellido"),datIngresado.get("email"),datIngresado.get("texto"),datIngresado.get("telefono"));

    consultas.push(consulta);
    localStorage.setItem("consultas",JSON.stringify(consultas));
    formContacto.reset();
});

//este codigo nos permite que el usuario al ingresar su consulta y enviarlo puede visualizarlo 
//al hacer click en ver preguntas frecuentes pueda visualizarla en el DOM.

button.addEventListener(`click`,()=>{
    const datosLocales = JSON.parse(localStorage.getItem(consultas));
    //no me permite obtener los datos del localstorage.
    datosLocales.forEach(consultas => {
        cajaDatos.innerHTML +=`
        <div class="card box" id="datos">
            <div class="card-header">
                <h3 class="card-title">${consultas.nombre}</h3>
                <h4 class="card-title">${consultas.apellido}</h4>
            </div>
            <div class="card-body">
                <h5 class="card-title">${consultas.email}</h5>
                <p class="card-text">${consultas.nota}</p>
                <p class="card-text">${consultas.telefono}</p>
                <button class="btn btn-primary"></button>
            </div>
        </div>`
    });
});