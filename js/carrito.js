let productosCarrito = localStorage.getItem("productosEnCarrito");
productosCarrito = JSON.parse(productosCarrito);

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");
let botonesEliminar = document.querySelectorAll(".eliminarProductoCarrito");
const botonVaciar = document.querySelector("#carritoAccionesVaciar");
const contenedorTotal = document.querySelector("#total");


function cargarProductosCarrito() {
    if (productosCarrito && productosCarrito.length > 0) {



        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
      
        contenedorCarritoProductos.innerHTML= "";
      
        productosCarrito.forEach((producto) => {
          const div = document.createElement("div");
          div.classList.add("carritoProducto");
          div.innerHTML = `
              <img class="carritoProductoImagen" src="${producto.imagen}" alt="${producto.titulo}">
              <div class="carritoProductoTitulo">
                  <small>Título</small>
                  <h3>${producto.titulo}</h3>
              </div>
              <div class="carritoProductoCantidad">
                  <small>Cantidad</small>
                  <p>${producto.cantidad}</p>
              </div>
              <div class="carritoProductoPrecio">
                  <small>Precio</small>
                  <p>${producto.precio}</p>
              </div>
              <div class="carritoProductoSubtotal">
                  <small>Subtotal</small>
                  <p>${producto.precio * producto.cantidad}</p>
              </div>
              <button class="eliminarProductoCarrito" id="${producto.id}" ><i class="bi bi-trash3-fill"></i></button>
              `;
      
              contenedorCarritoProductos.append(div);
        });
      } else {
          contenedorCarritoVacio.classList.remove("disabled");
          contenedorCarritoProductos.classList.add("disabled");
          contenedorCarritoAcciones.classList.add("disabled");
          contenedorCarritoComprado.classList.add("disabled");
      }
      actualizarBotonesEliminar();
}

cargarProductosCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".eliminarProductoCarrito");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click" , eliminarDelCarrito);
    })
}

function eliminarDelCarrito (e) {
    const idBoton = e.currentTarget.id;
    const index = productosCarrito.findIndex(producto => producto.id === idBoton);

    productosCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productosCarrito" , JSON.stringify (productosCarrito))
}

botonVaciar.addEventListener("click" , vaciarCarrito);
function vaciarCarrito() {
    productosCarrito.lenght = 0 ;
    localStorage.setItem("productosCarrito" , JSON.stringify(productosCarrito));
    cargarProductosCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}


