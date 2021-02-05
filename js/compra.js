const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');


cargarEventos();
function cargarEventos(){

  document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

  carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});

  compra.calcularTotal();

  procesarCompraBtn.addEventListener('click', procesarCompra);
}

function procesarCompra(e){
  e.preventDefault();

  if(compra.obtenerProductosLocalStorage().length === 0){
    Swal.fire({
      icon: 'error',
      title:'Oops...',
      text:'No hay productos para realizar la operacion',
      timer: 2500, 
      showConfirmButton: false
    }).then(function(){
        window.location = 'index.html';
    })
  }
  else if(cliente.value === '' || correo.value === ''){
    Swal.fire({
      icon: 'error',
      title:'Oops...',
      text:'Ingresar todos los campos',
      timer: 2000, 
      showConfirmButton: false
    })
  }
  else{
      const cargarGif = document.querySelector('#cargando')
      cargarGif.style.display = 'block';
      cargarGif.style.width = '250px';

      const enviado = document.createElement('img');
      enviado.src = 'img/enviado.gif';
      enviado.style.display = 'block';
      enviado.style.width = '150px'

      setTimeout(() => {
        cargarGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado)	
        setTimeout(() => {
          enviado.remove();
          compra.vaciarLocalStorage();
          window.location = 'index.html';
        }, 2000);
      }, 3000);
  }
 

}

