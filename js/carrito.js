class Carrito{

  // Añadir el producto al carrito
  comprarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
      const producto = e.target.parentElement.parentElement;
      this.leerDatosProductos(producto);
      
     
      
    }
  }

  leerDatosProductos(producto){
    
    const infProducto = {
      imagen : producto.querySelector('img').src,
      titulo : producto.querySelector('.producto').textContent,
      precio : producto.querySelector('.precio').textContent,
      id : producto.querySelector('a').getAttribute('data-id'),
      cantidad : 1,
    }
  
    let productosLS;
    productosLS  = this.obtenerProductosLocalStorage();
    productosLS.forEach(function(productoLS){
      if(productoLS.id === infProducto.id){
        productosLS = productoLS.id;
      }
    });
    if(productosLS === infProducto.id){
      Swal.fire({
        icon: 'warning',
        title:'info',
        text:'El producto ya esta agregado a su carrito',
        timer: 2000, 
        showConfirmButton: false,
      });
    }
    else{
      this.insertarCarrito(infProducto);
    }
    
   
  }
  // ingresar productos al carrito
  insertarCarrito(producto){
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src= "${producto.imagen}" width = 100>
      </td>
      <td>${producto.titulo}</td>
      <td>${producto.precio}</td>
      <td>
        <a href="#" class ="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
       </td>
    `;
    listaProductos.appendChild(row); 
    this.guardarProductosLocalStorage(producto);
  }

    // Eliminar productos de carrito
    eliminarProducto(e){
      e.preventDefault();
      let producto, productoId;
      if(e.target.classList.contains('borrar-producto')){
          e.target.parentElement.parentElement.remove();
          producto = e.target.parentElement.parentElement;
          productoId = producto.querySelector('a').getAttribute('data-id');
      }

    }
    // Vaciar carrito de compras 
    vaciarCarrito(e){
      e.preventDefault();
      while(listaProductos.firstChild){
        listaProductos.removeChild(listaProductos.firstChild);
      }
      this.vaciarLocalStorage();
      return false;
    }

    // Guardar en el local storage
    guardarProductosLocalStorage(producto){
      let productos;
      productos = this.obtenerProductosLocalStorage();
      productos.push(producto);
      localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
      let productoLS;

      if(localStorage.getItem('productos') === null){
        productoLS = [];
      }
      else{
        productoLS = JSON.parse(localStorage.getItem('productos'));
      }
      return productoLS;
    }

      // Eliminar productos del LocalStorage
    eliminarProductoLocalStorage(productoID){
      let productosLS;
      productosLS = this.obtenerProductosLocalStorage();
      productosLS.forEach(function(productoLS, index){
        if(productoLS.id === productoID){
          productoLS.splice(index, 1);
        }
      });

      localStorage.setItem('productos', JSON.stringify(productosLS));

    }

    leerLocalStorage(){
      let productosLS;
      productoLS = this.obtenerProductosLocalStorage();
      productosLS.forEach(function(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>
          <img src= "${producto.imagen}" width = 100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
          <a href="#" class ="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
    `;
      listaProductos.appendChild(row); 
      });
    }

    leerLocalStorageCompra(){
      let productosLS;
      productoLS = this.obtenerProductosLocalStorage();
      productosLS.forEach(function(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>
          <img src= "${producto.imagen}" width = 100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
          input type="number" class="form-control cantidad" min ="1" value =${producto.cantidad}
        </td>
        <td>${producto.precio + producto.cantidad}</td>
        <td>
          <a href="#" class ="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
    `;
      listaCompra.appendChild(row); 
      });
    }

    vaciarLocalStorage(){
      localStorage.clear();
    }

    procesarPedidos(e){
      e.preventDefault();
      if(this.obtenerProductosLocalStorage().length === 0){
        Swal.fire({
          icon: 'error',
          title:'info',
          text:'El Carrito esta vacio, agregar algun producto',
          timer: 2500, 
          showConfirmButton: false,
        });
      }
      else{
      location.href= 'compra.html';

      }
      
    }

}
      
