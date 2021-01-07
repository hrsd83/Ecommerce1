const carro = new Carrito();
 carrito = document.getElementById('carrito');
 productos = document.getElementById('items');
 listaProductos = document.querySelector('#lista-carrito tbody');


cargarEventos();
function cargarEventos(){
  productos.addEventListener('click', (e)=>{carro.comprarProducto(e)})
}

