class Carrito{

  // Añadir el producto al carrito
  comprarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
      const producto = e.target.parentElement.parentElement;
      // this.leerDatosProductos(producto);
      console.log(producto)
      
    }
  }
} 