"use strict"
const formContacto = document.getElementById("cajaForm");
const button = document.getElementById("btnPedir");
const cajaDatos = document.getElementById("contenedor-opinion");


//creo una clase para guardar los datos que recibo del formulario de contacto.
class Datos{
    constructor(nombre,apellido,email,nota,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.nota = nota;
        this.telefono = telefono;
    }
}

//consulto los datos del localstorage,si encuentra devuelvos esos datos,sino devuelve una array vacio.
const consultas =JSON.parse(localStorage.getItem('consultas'))??[];

formContacto.addEventListener(`submit`,(event)=>{
    event.preventDefault();
    const datIngresado = new FormData(event.target);
    const consulta = new Datos (datIngresado.get("nombre"),datIngresado.get("apellido"),datIngresado.get("email"),datIngresado.get("texto"),datIngresado.get("telefono"));
    
    //pushea los datos obtenidos al array del localstorage.
    consultas.push(consulta);
    localStorage.setItem("consultas",JSON.stringify(consultas));
    formContacto.reset();//formatea los datos que tenia el form.
});

//este codigo nos permite que el usuario al ingresar su consulta y enviarlo puede visualizarlo en el DOM 
//al hacer click en ver preguntas frecuentes.
button.addEventListener(`click`,()=>{
    cajaDatos.innerHTML = "";//esto permite que cada vez que se ejecute el evento se limpie lo que habia.
    //permite obtener los datos del localstorage.
    const datosLocales = JSON.parse(localStorage.getItem("consultas"));
    
    datosLocales.forEach((consultas,index) => {
        cajaDatos.innerHTML +=`
        <div class="card box" id="datos${index}">
            <div class="card-header">
                <h4 class="card-title">${consultas.email}</h4>
                <p class="card-text">telefono: ${consultas.telefono}</p>
            </div>
            <div class="card-body">
                <h3>Detalle</h3>
                <p class="card-text">Describa su Consulta: ${consultas.nota}</p>
            </div>
            <button class="btn btn-danger">eliminar consulta</button>
        </div>`
    });

    //este codigo elimina las preguntas del DOM,el array y del localStorage.
    datosLocales.forEach((datos,index) => {
        document.getElementById(`datos${index}`).children[2].addEventListener(`click`,()=>{
            document.getElementById(`datos${index}`).remove();
            consultas.splice(index,1);
            localStorage.setItem("consultas",JSON.stringify(consultas));
        });
    });
});