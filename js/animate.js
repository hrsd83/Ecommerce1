// MODO DARK 
function toggleDarkLight() {
  var body = document.getElementById('body');
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  


}

// ANIMACION DE TARJETAS  
function myTarjetas() {
  const tarjetas = document.getElementById('items')
  tarjetas.classList.add('magictime', 'slideDownReturn')
 
}
setInterval(myTarjetas, 500);

// ANIMACION DEL CARRITO DE COMPRAS
function moverCarrito() {
  const carritoMover = document.getElementById('img-carrito')
  carritoMover.classList.add('magictime', 'swap')
 
}
setInterval(moverCarrito, 1000);

