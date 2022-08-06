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
            <p>precio:$${carros.precio}</p>
        </div>
    </div>`
})














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
