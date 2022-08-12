//este codigo te perimite ver distintas cartas en el html con una sola linea de codigo e incorporando desde javascript.

class Herramientas{
    constructor(marca,modelo,detalle,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.detalle= detalle;
        this.precio = precio;
    }
}
const pico = new Herramientas ("Pico","GHERARDI","De Acero Forgado",8000);
const pala = new Herramientas ("Pala","GHERARDI","De Acero Forgajo",7500);
const machete = new Herramientas ("Machete","BELLOTA","colombiano acero profesional",3000);
const carpidor = new Herramientas ("Carpidor","BALDAN","carpidor de arrastre",12000);
const hacha = new Herramientas ("Hacha de mano","TRAMONTINA","de acero y mango de madera",2400);

const depositoUno = [carpidor,pico,pala,machete,hacha];
const conteiner = document.getElementById("cajaHijo");

depositoUno.forEach(cosas =>{
    conteiner.innerHTML += `
    <div class="boxJs">
        <div>
            <h2>${cosas.marca}</h2>
            <p>marca: ${cosas.modelo}</p>
            <p>${cosas.detalle}</p>
            <p>precio:$${cosas.precio}</p> <br>
            <button class="boton">comprar</button>
        </div>
    </div>`
});

class Hogar{
    constructor(Herramientas,detalle,precio){
        this.Herramientas = Herramientas;
        this.detalle = detalle;
        this.precio = precio;
    }
}

const tenaza = new Hogar ("Tenaza","acero forjado medio corte 22,5 cm",3170);
const pinza = new Hogar ("Pinza","de agarre medio cabo naranja",1250);
const plomadin = new Hogar ("Plomada Albañil","peso de 300 gr toth industria nacional",870);
const cuchara = new Hogar ("Cuchara Albañil","acero reforzada punta redonda profesional",650);
const balde = new Hogar ("Balde","acero galbanizado de 15 lt ultra resistente",2100);

const Plomeria = [tenaza,pinza,plomadin,cuchara,balde];
const contenedorPlomeria = document.getElementById("cajaDos");

Plomeria.forEach(cosas2 =>{
    contenedorPlomeria.innerHTML +=`
    <div class="boxDos">
        <div>
            <h2>${cosas2.Herramientas}</h2>
            <p>${cosas2.detalle}</p>
            <p>precio:$${cosas2.precio}</p> <br>
            <button class="boton">comprar</button>
        </div>
    </div>
    `
});





