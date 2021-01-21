const carro = new Carrito();
 const carrito = document.getElementById('carrito');
 const productos = document.getElementById('items');
 const listaProductos = document.querySelector('#lista-carrito tbody');
 const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
 const procesarPedidos = document.getElementById('procesar-pedido');


cargarEventos();

function cargarEventos(){
  productos.addEventListener('click',(e)=>{carro.comprarProducto(e)})

  carrito.addEventListener('click',(e) =>{carro.eliminarProducto(e)})

  vaciarCarritoBtn.addEventListener('click', (e) =>{carro.vaciarCarrito(e)});

  // document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

  procesarPedidos.addEventListener('click', (e) =>{carro.procesarPedidos(e)});



  


  
}


