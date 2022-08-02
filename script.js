

class Vehiculos{
    constructor(modelo,motor,velocidad,precio,){
        this.modelo = modelo;
        this.motor = motor;
        this.velocidad = velocidad;
        this.precio = precio;
    }
}


const bugatti = new Vehiculos ("bugatti","Chiron","407 Km/h",2700000);
const McLaren = new Vehiculos ("McLaren","MP412C","326 Km/h",300000);
const ferrari = new Vehiculos ("ferrari","599 GTE","335 Km/h",675000);
const lamborghini = new Vehiculos ("lamborghini","aventador","350Km/h",400000);

const autosCarrera = [lamborghini,ferrari,McLaren,bugatti];

let jugador,coche;
do {
    alert("elija un coche para comprar");
    coche = parseFloat(prompt(`selecione la opcion de acuerdo al numero \n 1-bugatti \n 2-McLaren \n 3- ferrari \n 4- lamborghini \n 5-finalizar compra`));
    if(coche ==1){
        console.table(autosCarrera[0]);
    }else if (coche ==2){
        console.table(autosCarrera[1]);
    }else if (coche ==3){
        console.table(autosCarrera[2]);
    }else if (coche == 4){
        console.table(autosCarrera[3]);
    }else if (coche != 1,2,3,4,5){
        alert("numero ingresado no valido");
    }
} while (coche == 1,2,3,4,5);












































/* 
function Persona1 (nombre,apellido,edad,altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
    this.saludar = () => console.log(`${this.nombre} te esta saludando.`);
}
*/ 

/*
function comprar(plata){
    plata == coche
    console.log(`compraste el siguiente ${coche}`)
}*/


/*const cristianoRonaldo ={
    nombre : "Cristiano",
    apellido: "Ronaldo",
    edad: 32,
    altura:2.00,
}
class Vehiculos{
    constructor(marca,modelo,velocidad,peso){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.peso = peso;
    }
}

const auto1 = new Vehiculos ("bugatti","Chiron","407 Km/h",2700);
const auto2 = new Vehiculos ("McLaren","MP412C","326 Km/h",1350);
const auto3 = new Vehiculos ("ferrari","599 GTE","335 Km/h",1750);
const auto4 = new Vehiculos ("lamborgini","aventador","350Km/h",1200);

const cochera = [];
let agregar;
let suma
do {
    alert("ingrese un auto a su cochera sin que sobrepase los 400' kg")
    agregar = prompt(`selecione la opcion de acuerdo al numero \n 1- auto1 \n 2- auto2 \n 3- auto3 \n 4- auto4 \n 5- finaizar`)

}while ((agregar !== 1) & (agregar !== 2) & (agregar !== 3)& (agregar !== 4))
switch (agregar) {
    case 1:
        if(cochera<=4000){
            suma = cochera.push(auto1)
            console.log(suma);
        }
        break;
    case 2:
        if (suma <= 4000){
            suma = cochera.push(auto2)
            console.log(suma);
        }
        break;
    case 3:
        if (suma <= 4000){
            suma = cochera.push(auto3)
            console.log(suma);
        }
        break;
}
*/