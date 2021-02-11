const items = document.getElementById('items')
const mydiv = document.getElementById('mydiv').content
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () =>{
  fetchData() 
})

const fetchData = async () =>{
  
  try {
    const res = await fetch('api.json')
    const data = await res.json()
    pintarCards(data)
  } catch (error) {
    
  }
}


const pintarCards =  data => {
  data.forEach(producto => {
    mydiv.querySelector('.titulo_oferta').textContent = producto.titulo_oferta;
    mydiv.querySelector('a').setAttribute('data-id', producto.id);
    mydiv.querySelector('img').setAttribute('src', producto.imagen);
    mydiv.querySelector('.categoria').textContent = producto.categoria;
    mydiv.querySelector('.producto').textContent = producto.producto;
    mydiv.querySelector('.precio').textContent = producto.precio;
    const clone = mydiv.cloneNode(true)
    fragment.appendChild(clone);
  });
  items.appendChild(fragment)
}


