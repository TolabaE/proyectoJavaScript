const conteiner = document.getElementById("cajaUno");
const conteinerChanguito = document.getElementById("conteiner-changuito");
const botonVerCarrito = document.getElementById("boton-ver-carrito");

const changito = JSON.parse(localStorage.getItem('changito'))??[];

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
    if(pedirDatos.length == 0){
        Swal.fire({
            title: 'carrito vacio',
            text: 'no tenes productos agregados..¡segui comprando!',
            imageUrl: 'https://s3-vultec-pe.s3-us-west-2.amazonaws.com/media/uploads/froala_editor/images/carritovacio.png',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
    }else{
        //muestra en el DOM los productos agregados al carrito.
        pedirDatos.forEach((guardado,index) =>{
            conteinerChanguito.innerHTML += `
            <div class="card text-dark bg-primary mb-3" style="max-width:450px;" id="producto${index}" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${guardado.img}" class="img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">producto: ${guardado.nombre}</h5>
                            <p class="card-text">$ ${guardado.precio}</p>
                            <button class="btn btn-info">comprar</button>
                            <button class="btn btn-danger">eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
        
        //este codigo permite comprar productos del carrito 
        pedirDatos.forEach((producto,index)=>{
            document.getElementById(`producto${index}`).children[0].children[1].children[0].children[2].addEventListener(`click`,()=>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Compra realizada',
                    showConfirmButton: false,
                    timer: 1500
                });
                document.getElementById(`producto${index}`).remove();
                changito.splice(index,1);
                localStorage.setItem("changito",JSON.stringify(changito));
            })
            document.getElementById(`producto${index}`).children[0].children[1].children[0].children[3].addEventListener(`click`,()=>{
                document.getElementById(`producto${index}`).remove();
                changito.splice(index,1);
                localStorage.setItem("changito",JSON.stringify(changito));
            });
        });
    };
});