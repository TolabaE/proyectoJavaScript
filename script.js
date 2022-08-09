

//este codigo lo que hace es pidir datos al usuario en un formulario,donde puedo pedir informacion acerca de cierto vehiculo ,incorporando eventos y arrays y objetos.

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
    let inputName = document.getElementById("inputName").value;
    let inputSurName = document.getElementById("inputSurName").value;
    let inputEmail= document.getElementById("inputEmail").value;
    let inputText = document.getElementById("inputText").value;
    let inputTel = document.getElementById("inputTel").value;

    const consulta = new Datos (inputName,inputSurName,inputEmail,inputText,inputTel);
    consultas.push(consulta);
    console.log(consultas);
});


//este codigo te perimite ver distintas cartas en el html con una sola linea de codigo e incorporando desde javascript.
//este codigo es del trabajo de array pero no puedo sobre escribirlo,por que el primero no se aplica.

/*
class Vehiculos{
    constructor(marca,modelo,velocidad,precio,){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.precio = precio;
    }
}

const bugatti = new Vehiculos ("bugatti","Chiron","407 Km/h",870000);
const mcLaren = new Vehiculos ("McLaren","MP412C","326 Km/h",380000);
const ferrari = new Vehiculos ("Ferrari","GTE","335 Km/h",275000);
const ford = new Vehiculos ("Ford","mustand","350Km/h",550000);

const autosCarrera = [bugatti,mcLaren,ferrari,ford];

const conteiner = document.getElementById("cajaHijo");

autosCarrera.forEach(carros =>{
    conteiner.innerHTML += `
    <div class="boxJs">
        <div>
            <h2>marca:${carros.marca}</h2>
            <p>modelo:${carros.modelo}</p>
            <p>velocidad:${carros.velocidad}</p>
            <p>precio:$${carros.precio}</p> <br>
            <button>comprar</button>
        </div>
    </div>`
})
*/



//este codigo te permite comprar carros ingresando una cantidad de plata,podes comprarlo todos o de a uno.
/*
class Vehiculos{
    constructor(modelo,motor,velocidad,precio,){
        this.modelo = modelo;
        this.motor = motor;
        this.velocidad = velocidad;
        this.precio = precio;
    }
}

const bugatti = new Vehiculos ("bugatti","Chiron","407 Km/h",870000);
const McLaren = new Vehiculos ("McLaren","MP412C","326 Km/h",380000);
const ferrari = new Vehiculos ("ferrari","599 GTE","335 Km/h",275000);
const lamborghini = new Vehiculos ("lamborghini","aventador","350Km/h",550000);

const autosCarrera = [bugatti,McLaren,ferrari,lamborghini];

function compra(plata = 0,precio = 0){
    let vuelto = plata - precio;
    if(vuelto>0){
        console.log(`su compra fue exitosa,le sobra $ ${vuelto}.`);
    }else if(vuelto<0){
        console.log("el dinero ingresado no es suficiente,eliga otro carro mas barato");
    }else{
        console.log("gracias por su compra,puede seguir comprando")
    }
}

let jugador,coche;

do {
    alert("elija un coche para comprar");
    coche = parseFloat(prompt(`selecione la opcion de acuerdo al numero \n 1-bugatti \n 2-McLaren \n 3- ferrari \n 4- lamborghini \n 5-comprar todos los autos \n 6-finalizar compra`));
    if(coche ==1){
        console.table(autosCarrera[0])
        jugador = parseFloat(prompt("ingrese el monto para comprarlo"));
        compra(jugador,bugatti.precio);
    }else if (coche == 2){
        console.table(autosCarrera[1]);
        jugador = parseFloat(prompt("ingrese el monto para comprarlo"));
        compra(jugador,McLaren.precio);
    }else if (coche == 3){
        console.table(autosCarrera[2]);
        jugador = parseFloat(prompt("ingrese el monto para comprarlo"));
        compra(jugador,ferrari.precio);
    }else if (coche == 4){
        console.table(autosCarrera[3]);
        jugador = parseFloat(prompt("ingrese el monto para comprarlo"));
        compra(jugador,lamborghini.precio);
    }else if (coche == 5){
        const sumaTotal = autosCarrera.map(autosarray => autosarray.precio);
        console.log(sumaTotal.reduce((pre,act)=> pre + act,0));
        jugador = parseFloat(prompt("ingrese el monto total para comprar todos"));
        compra(jugador,sumaTotal);
    }
    else if ((coche < 1) || (coche > 6)){
        alert("numero ingresado no valido");
    }else if(coche == 6){
        alert("gracias por su compra");
    }
} while (coche != 6);
*/
