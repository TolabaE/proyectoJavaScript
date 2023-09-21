const conteiner = document.getElementById("cajaUno");
const containerCart = document.getElementById("conteiner-changuito");
const botonVerCarrito = document.getElementById("boton-ver-carrito");
const elTotal = document.getElementById("precioTotal");
const btnClear = document.getElementById('buttonClear');
const btnFinish = document.getElementById('buttonFinish');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 4000,
    },
});

//creo el localstorage con un array vacio.
let changito = JSON.parse(localStorage.getItem('changito')) ?? [];

//hago una consulta mediante una promesa y eso la guardo en una funcion para usarla despues.
const arrayProduct=async()=> {
    const traer = await fetch(`./JSON/datos.json`)
    const datos = await traer.json()
    return datos;
}

//guardo en una funcion la alerta de producto agregado al carrito.
const alertProductAdd = () =>{
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #F16529, #E44D26)",
        },
        onClick: function () {} // Callback after click
    }).showToast();
}

//esta funcion elimina todo del DOM y el localstorage. ya se vaciando o comprando todo.
const deleteAllCart = ()=>{
    containerCart.innerHTML = "";//igual el DOM a un string vacio. se limpian las cards
    localStorage.setItem("changito",JSON.stringify([])) //vuelvo a sobre escribir en el local storage.
    btnClear.innerHTML =`<h3 class="alert-cart-clear">Carrito Vacio</h3>`;
    btnFinish.innerHTML ="";//elimina al Boton de comprar productos
    elTotal.innerHTML =""; //elimina la funcion de precios
}

//esta funcion suma el total de los precios agregados al carrito y los pinta en el DOM.
function actualizarPrecioTotal(dataJson, datastorage) {
    let precioTotal = 0;
    dataJson.forEach(cant => {
        if (datastorage.some(elem => elem.id === cant.id)) {
            let objetoExtraido = datastorage.find(elem => elem.id == cant.id)
            precioTotal += cant.precio*objetoExtraido.cantidad;
            elTotal.innerHTML = `<p>Precio Total: $${precioTotal}</p>`
        }
    })
}

fetch(`./JSON/datos.json`)
.then(response => response.json())
.then(datos => {

    datos.forEach((cosas, indice) => {
        conteiner.innerHTML += `
        <div class="boxJs">
            <div class="card"  id="producto${indice}">
                <img src="${cosas.img}" class="card-img-top" alt="imagen del producto">
                <div class="card-body">
                    <h4 class="card-title">${cosas.nombre}</h4>
                    <p class="card-text">${cosas.marca}</p>
                    <h6 class="card-text">stock:${cosas.stock} unidades</h6>
                    <h3 class="card-text">$${cosas.precio}</h3>
                    <div class="container__box-btn">
                        
                        <button class="btn btn-primary" id="btn-agregar">agregar</button>
                    </div>
                </div>
            </div>
        </div>`
    });

    /*Este codigo recorre cada una de las card del arrays y al presionar el botton agregar,
    agrega un evento, guarda los datos en el localstorage y los muestra en el dom.*/
    datos.forEach((producto, indice) => {
        document.getElementById(`producto${indice}`).children[1].children[4].addEventListener(`click`, () => {

            //este codigo permite ver si el producto existe,le sumo a la cantidad sumando,sino lo crea con cantidad 1
            if (changito.some(elem => elem.id === producto.id)) {
                //traigo el objeto para sumarle la propiedad cantidad.
                let objetCart = changito.find(cart => cart.id === producto.id);
                //si la cantidad del producto agrego es menor al stock entonces lo agrege sino que tire una alerta. 
                if (objetCart.cantidad < producto.stock) {
                    objetCart.cantidad++;
                    //muestra una alerta cuando el producto se agrega al carrito.
                    alertProductAdd();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No hay stock disponible!',
                    })
                }
            } else {
                const agregadoChangito = {
                    id: producto.id,
                    cantidad: 1
                };
                changito.push(agregadoChangito);
                alertProductAdd();
            }
            //guardo los datos en el array del localstorage
            localStorage.setItem("changito", JSON.stringify(changito));
        });
    });
});

//llamo a la funcion que contiene al arreglo de productos con un fetch.
arrayProduct()
.then(products=>{

    botonVerCarrito.addEventListener('click',()=>{
        //traigo los datos almacenados en el local Storage.
        let dataStorage = JSON.parse(localStorage.getItem("changito"));
        if (dataStorage.length == 0) {
            btnClear.innerHTML =`<h3 class="alert-cart-clear">Carrito Vacio</h3>`;
            btnFinish.innerHTML ="";//elimina al Boton de comprar productos
        }else{
            containerCart.innerHTML = "";//esto hace que cada vez que consulto al carrito,lo que habia se borre y escriba de nuevo.
            btnClear.innerHTML =`<button class="btn btn-danger">Vaciar Carrito</button>`;
            products.forEach(element => {
                //hago una comparacion de datos,si el id del carrito coincide con algun del array de productos 
                if(dataStorage.some(cart=>cart.id == element.id)){
                    //obtengo la cantidad de veces que se agrego el producto.
                    const objCarrito = dataStorage.find(ele=>ele.id == element.id);  
                    containerCart.innerHTML += `
                    <div class="container-cart" id="producto${element.id}">
                        <div class="container-image">
                            <img src="${element.img}" class="image-style" alt="imagen del producto">
                        </div>
                        <div class="container-text">
                            <h5>producto:${element.nombre}</h5>
                            <p>$${element.precio}</p>
                            <p>cantidad: ${objCarrito.cantidad}</p>
                            <button class="btn btn-danger">Eliminar</button>
                        </div>
                    </div>`;
                    //este boton permite finalizar la compra.
                    btnFinish.innerHTML = `<button class="btn btn-primary">Finalizar Compra</button>`;
                    actualizarPrecioTotal(products,dataStorage);
                }
            });

            products.forEach(element=>{
                //si el id del objeto guardado en el local storage es igual al id del producto,ejecute lo siguiente.
                if (dataStorage.some(item=>item.id == element.id)) {
                    //busco el indice del boton de cada objeto en el carrito
                    const indexButton = document.getElementById(`producto${element.id}`).children[1].children[3];
                    //este evento permite eliminar un objeto del carrito ya sea del DOM y del localStorage.
                    indexButton.addEventListener('click',()=>{
                        document.getElementById(`producto${element.id}`).remove();//elimino  la card del DOM.
                        //busco el objeto en el arreglo.
                        let objectIndex = dataStorage.find(elem => elem.id == element.id);
                        const deleteProduct = dataStorage[objectIndex];//obtengo el indice en el carrito.
                        dataStorage.splice(deleteProduct,1);//elimino del array el producto
                        localStorage.setItem("changito",JSON.stringify(dataStorage));
                        actualizarPrecioTotal(products,dataStorage);//esta funcion actualiza el precio.
                        //si el localStorage esta vacio que limpie el precio total, boton comprar y agrege la alerta del carrito vacio.
                        if (dataStorage.length === 0) {
                            elTotal.innerHTML = "";
                            btnFinish.innerHTML = "";
                            btnClear.innerHTML =`<h3 class="alert-cart-clear">Carrito Vacio</h3>`;
                        }
                    })
                    //este evento elimina todos los productos del local storage.
                    btnClear.children[0].addEventListener('click',()=>{
                        deleteAllCart();
                    })
                    //este boton finaliza la compra vaciando el carrito y eliminando del local storage.
                    btnFinish.children[0].addEventListener('click',()=>{
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Compra Finalizada',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        deleteAllCart();
                    });
                };
            });
        };
    });
});

{/* <div class="container-btn">
    <button class="btn btn1 btn-danger">-</button>
    <span>0</span>
    <button class="btn btn2 btn-danger">+</button>
</div> */}