//este codigo te perimite ver distintas cartas en el html con una sola linea de codigo e incorporando desde javascript.

class Herramientas{
    constructor(id,nombre,marca,detalle,precio,img){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.detalle= detalle;
        this.precio = precio;
        this.img = img;
    }
}

const pico = new Herramientas (1,"Pico","Gherardi","De Acero Forgado",8000,"https://image.made-in-china.com/155f0j00ZpOUTDfKbykH/Agriculture-Tool-Steel-Mattock-Head-P404-Pickaxe.jpg");
const pala = new Herramientas (2,"Pala","Gherardi","De Acero Forgajo",7500,"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/127/623/products/894981-7acbaa455af52d1eeb16110644726447-640-0.jpg");
const machete = new Herramientas (3,"Machete","BELLOTA","colombiano acero profesional",3000,"https://www.gherardi.com.ar/wp-content/uploads/2018/01/Machete-2-270x395.jpg");
const carpidor = new Herramientas (4,"Carpidor","BALDAN","carpidor de arrastre",12000,"https://argentina.agrofystatic.com/media/catalog/product/cache/1/image/850x600/0dc2d03fe217f8c83829496872af24a0/c/a/carpidor-agro-ras-de-6-surcos--Quebrada-Verde-agrofy-0-20211217200422.jpg?usewebp=true");
const hacha = new Herramientas (5,"Hacha","Tramontina","de acero y mango de madera",2400,"https://www.bimat.com.ar/images/W-23181608126706830.jpg");
const maquina = new Herramientas (6,"M.Fumigadora","Jacto","presion a bomba de 16 lt",15000,"https://m.media-amazon.com/images/I/412ZvrJIfRL._SL500_.jpg");
const asadon = new Herramientas (7,"Asadon","Bellota","con mango de madera",1300,"https://img.agriexpo.online/es/images_ag/photo-mg/176021-15474954.webp");
const botas = new Herramientas (8,"Botas","Pampero","Botas negras de Goma T 42",2900,"https://image.made-in-china.com/202f0j10dnSQjRHsyqoB/High-Quality-Working-Industrial-Labor-Safety-PVC-Gum-Rain-Boots.jpg");

const depositoUno = [carpidor,pico,pala,machete,hacha,maquina,asadon,botas];
const conteiner = document.getElementById("cajaUno");

depositoUno.forEach(cosas =>{
    conteiner.innerHTML += `
    <div class="boxJs">
        <div class="card"  ${cosas.id}>
            <img src="${cosas.img}" class="card-img-top" alt="imagen del producto">
            <div class="card-body">
                <h5 class="card-title">${cosas.nombre}</h5>
                <h4 class="card-title">${cosas.marca}</h4>
                <p class="card-text">${cosas.detalle}</p>
                <h3 class="card-text">$${cosas.precio}</h3>
                <button class="btn btn-primary">agregar</button>
            </div>
        </div>
    </div>`
});















class Hogar{
    constructor(id,nombre,detalle,precio,img){
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
        this.img = img; 
    }
}

const tenaza = new Hogar (1,"Tenaza","acero forjado medio corte 22,5 cm",3170,"http://www.sidercon.com/imagenes/8201-572-tenaza-carpintero-200mm-bahco-541-d-200a.jpg");
const pinza = new Hogar (2,"Pinza","de agarre medio cabo naranja reforzado",1250,"https://www.martinezescalada.com.ar/551-extra_large_default/pinza-universal-992801-7.jpg");
const plomadin = new Hogar (3,"Plomada Albañil","peso de 300 gr toth industria nacional",870,"https://www.hierrosmaldonado.com.ar/1557-large_default/plomada-400-gr.jpg");
const cuchara = new Hogar (4,"Cuchara Albañil","acero reforzada punta redonda profesional",650,"https://arcencohogar.vtexassets.com/arquivos/ids/300009-800-800?v=637665764479800000&width=800&height=800&aspect=true");
const balde = new Hogar (5,"Balde","acero galbanizado de 15 lt ultra resistente",2100,"https://www.pronor.com.ar/images/PM-BALCHP1599587895908.jpg");
const nivel = new Hogar (6,"Nivel","nivelador de mano a burbuja color amarillo",860,"https://es.cornilleau.com/4773-large_default/nivel-de-burbuja.jpg");
const martillo = new Hogar(7,"Martillo","maza de acero 1000gr con cabo de madera",1230,"https://assets.tramontina.com.br/upload/tramon/imagens/GAR/40682008PDM001G.jpg");
const tanza = new Hogar (8,"Tanza Albañil","color rojo de 0,80 mm X 100 mts",260,"https://www.pronor.com.ar/images/00000000RC-7553699874RC-75536.jpg");

const Plomeria = [tenaza,pinza,plomadin,cuchara,balde,nivel,martillo,tanza];
const contenedorPlomeria = document.getElementById("cajaDos");

Plomeria.forEach(cosas2 =>{
    contenedorPlomeria.innerHTML +=`
    <div class="boxDos">
        <div class="card"  ${cosas2.id}>
            <img src="${cosas2.img}" class="card-img-top" alt="imagen del producto">
            <div class="card-body">
                <h4 class="card-title">${cosas2.nombre}</h4>
                <p class="card-text">${cosas2.detalle}</p>
                <h3 class="card-text">$${cosas2.precio}</h3>
                <button class="btn btn-primary" id="agregar">agregar</button>
            </div>
        </div>
    </div>`
});


const pedidos = [];
const carrito =document.getElementById("agregar");

carrito.addEventListener(`click`,()=>{
    const producto = [`${cosas2.nombre},${cosas2.precio},${cosas2.id}`];
    pedidos.push(producto);
})