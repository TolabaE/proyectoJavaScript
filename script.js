//este codigo te perimite ver distintas cartas en el html con una sola linea de codigo e incorporando desde javascript.

class Herramientas{
    constructor(stock,nombre,marca,precio,img){
        this.stock = stock;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.img = img;
    }
}

const pico = new Herramientas (25,"Pico","Gherardi",8000,"https://image.made-in-china.com/155f0j00ZpOUTDfKbykH/Agriculture-Tool-Steel-Mattock-Head-P404-Pickaxe.jpg");
const pala = new Herramientas (20,"Pala","Gherardi",7500,"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/127/623/products/894981-7acbaa455af52d1eeb16110644726447-640-0.jpg");
const machete = new Herramientas (10,"Machete","Bellota",3000,"https://www.gherardi.com.ar/wp-content/uploads/2018/01/Machete-2-270x395.jpg");
const carpidor = new Herramientas (12,"Carpidor","Baldan",12000,"http://jhartwich.com.uy/media/catalog/products/images/CZ_620.png");
const hacha = new Herramientas (15,"Hacha","Tramontina",2400,"https://www.bimat.com.ar/images/W-23181608126706830.jpg");
const maquina = new Herramientas (10,"Fumigadora","Jacto",15000,"https://m.media-amazon.com/images/I/412ZvrJIfRL._SL500_.jpg");
const asadon = new Herramientas (20,"Asadon","Bellota",1300,"https://img.agriexpo.online/es/images_ag/photo-mg/176021-15474954.webp");
const botas = new Herramientas (15,"Botas","Pampero",2900,"https://image.made-in-china.com/202f0j10dnSQjRHsyqoB/High-Quality-Working-Industrial-Labor-Safety-PVC-Gum-Rain-Boots.jpg");
const horquilla = new Herramientas (20,"Horquilla","Tramontina",2350,"https://www.fielex.com.uy/content/images/thumbs/0080895_horquilla-cmango-120cm-4-dientes-tramontina_600.jpeg");
const rastrillo = new Herramientas (25,"Rastrillo","Gherardi",1450,"http://www.chayto.com.ar/fotos/rastrillo-chayto.jpg");
const carreta = new Herramientas (5,"Carretilla","Baldan",25000,"https://arcencohogar.vtexassets.com/arquivos/ids/269801/1002766.jpg?v=637651551889900000");
const cortador = new Herramientas (8,"Motoguadaña","Stihl FS 420",55000,"https://nogalpark.com/archivos/recortes/motoguadana-stihl-fs-450-nogalpark.jpg");

const depositoUno = [carpidor,pico,pala,machete,hacha,maquina,asadon,botas,horquilla,rastrillo,carreta,cortador];
const conteiner = document.getElementById("cajaUno");

depositoUno.forEach((cosas,indice) =>{
    conteiner.innerHTML += `
    <div class="boxJs">
        <div class="card"  id="producto${indice}">
            <img src="${cosas.img}" class="card-img-top" alt="imagen del producto">
            <div class="card-body">
                <h4 class="card-title">${cosas.nombre}</h4>
                <p class="card-text">${cosas.marca}</p>
                <h6 class="card-text">stock:${cosas.stock} unidades</h6>
                <h3 class="card-text">$${cosas.precio}</h3>
                <button class="btn btn-primary" id="btn-agregar">agregar</button>
            </div>
        </div>
    </div>`
});

const conteinerChanguito = document.getElementById("conteiner-changuito");
const botonVerCarrito = document.getElementById("boton-ver-carrito");
const changito = [];

if (localStorage.getItem("changito")) {
    JSON.parse(localStorage.getItem("changito"));
}else{
    localStorage.setItem("changito",JSON.stringify("changito"))
}

/*Este codigo recorre cada una de las card del arrays y al presionar el botton agregar,
agrega un evento, guarda los datos en el localstorage y los muestra en el dom.*/
depositoUno.forEach((producto,indice) =>{
    document.getElementById(`producto${indice}`).children[1].children[4].addEventListener(`click`,()=>{

        //muestra una alerta al presionar el boton agregar carrito.
        Toastify({
            text: "Producto agregado al carrito",
            duration: 5000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F16529, #E44D26)",
            },
            onClick: function(){} // Callback after click
        }).showToast();

        //agarra los datos del producto y los almacena en una nueva arrays.
        const agregados = new Herramientas(producto.stock,producto.nombre,producto.precio,producto.img);
        changito.push(agregados);
        //guardo los datos en el localstorage
        localStorage.setItem("changito",JSON.stringify(changito));
    });
});

//pido los datos del localstorage,
const pedirDatos = JSON.parse(localStorage.getItem("changito"));

botonVerCarrito.addEventListener(`click`,()=>{
    //los muestra en el DOM.
    pedirDatos.forEach((guardado,indice) =>{
        conteinerChanguito.innerHTML += `
        <div class="card" id="numero${indice}>
            <div class="card-header">
                ${guardado.precio}
            </div>
            <div class="card-body">
                <h5 class="card-title">${guardado.marca}</h5>
                <p class="card-text">${guardado.detalle}</p>
                <a href="#" class="btn btn-primary">comprar</a>
            </div>
        </div>
        `
    });
});

//Este codigo nos permite ingresar productos desde javaScript y visualizarlo en el DOM.
class Hogar{
    constructor(nombre,detalle,precio,img){
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
        this.img = img; 
    }
}

const tenaza = new Hogar ("Tenaza","acero forjado medio corte 22,5 cm",3170,"http://www.sidercon.com/imagenes/8201-572-tenaza-carpintero-200mm-bahco-541-d-200a.jpg");
const pinza = new Hogar ("Pinza","de agarre medio cabo naranja reforzado",1250,"https://www.martinezescalada.com.ar/551-extra_large_default/pinza-universal-992801-7.jpg");
const plomadin = new Hogar ("Plomada Albañil","peso de 300 gr toth industria nacional",870,"https://www.hierrosmaldonado.com.ar/1557-large_default/plomada-400-gr.jpg");
const cuchara = new Hogar ("Cuchara Albañil","acero reforzada punta redonda profesional",650,"https://arcencohogar.vtexassets.com/arquivos/ids/300009-800-800?v=637665764479800000&width=800&height=800&aspect=true");
const balde = new Hogar ("Balde","acero galbanizado de 15 lt ultra resistente",2100,"https://www.pronor.com.ar/images/PM-BALCHP1599587895908.jpg");
const nivel = new Hogar ("Nivel","nivelador de mano a burbuja color amarillo",860,"https://es.cornilleau.com/4773-large_default/nivel-de-burbuja.jpg");
const martillo = new Hogar("Martillo","maza de acero 1000gr con cabo de madera",1230,"https://assets.tramontina.com.br/upload/tramon/imagens/GAR/40682008PDM001G.jpg");
const tanza = new Hogar ("Tanza Albañil","color rojo de 0,80 mm X 100 mts",260,"https://www.pronor.com.ar/images/00000000RC-7553699874RC-75536.jpg");

const Plomeria = [tenaza,pinza,plomadin,cuchara,balde,nivel,martillo,tanza];

const contenedorPlomeria = document.getElementById("cajaDos");

Plomeria.forEach((cosas2,numero) =>{
    contenedorPlomeria.innerHTML +=`
    <div class="boxDos">
        <div class="card"  id="elemento${numero}">
            <img src="${cosas2.img}" class="card-img-top" alt="imagen del producto">
            <div class="card-body">
                <h4 class="card-title">${cosas2.nombre}</h4>
                <p class="card-text">${cosas2.detalle}</p>
                <h3 class="card-text">$${cosas2.precio}</h3>
                <button class="btn btn-primary">agregar</button>
            </div>
        </div>
    </div>`
});

Plomeria.forEach((productos,numero)=>{
    //este codigo permite que al hacer click en agregar,sale una alerta 
    document.getElementById(`elemento${numero}`).children[1].children[3].addEventListener(`click`,()=>{
        Toastify({
            text: "Producto agregado al carrito",
            duration: 5000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F16529, #E44D26)",
            },
            onClick: function(){} // Callback after click
        }).showToast();        
    });
});

