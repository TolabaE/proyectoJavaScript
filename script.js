const conteiner = document.getElementById("cajaUno");
const conteinerChanguito = document.getElementById("conteiner-changuito");
const botonVerCarrito = document.getElementById("boton-ver-carrito");

const changito = [];
if (localStorage.getItem("changito")) {
    JSON.parse(localStorage.getItem("changito"));
}else{
    localStorage.setItem("changito",JSON.stringify("changito"))
};

fetch(`./JSON/datos.json`)
.then(response => response.json())
.then (datos =>{
    
    datos.forEach((cosas,indice) =>{
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

    /*Este codigo recorre cada una de las card del arrays y al presionar el botton agregar,
    agrega un evento, guarda los datos en el localstorage y los muestra en el dom.*/
    datos.forEach((producto,indice) =>{
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
            changito.push(producto);
            //guardo los datos en el localstorage
            localStorage.setItem("changito",JSON.stringify(changito));
        });
    });  
});

//pido los datos del localstorage,
const pedirDatos = JSON.parse(localStorage.getItem("changito"));

botonVerCarrito.addEventListener(`click`,()=>{
    //los muestra en el DOM.
    pedirDatos.forEach((guardado,indice,id) =>{
        conteinerChanguito.innerHTML += `
        <div class="cardHijo" id="producto${id}">
            <thead> 
                <tr>
                    <th scope="col">Orden de compra</th>
                    <th scope="col">imagen</th>
                    <th scope="col">nombre</th>
                    <th scope="col">precio</th>
                    <th scope="col">pago</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">  N° ${indice}</th>
                    <td><img style="max-width: 50px;" src="${guardado.img}"  alt=""></td>
                    <td>${guardado.nombre}</td>
                    <td>$${guardado.precio}</td>
                    <td><button class="btn btn-info">comprar</button></td>
                </tr>
            </tbody>   
        </div>
        `
    });

});