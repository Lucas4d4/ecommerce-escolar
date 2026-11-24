import { agregarCarrito } from "./funcionesCarrito.js";
import { obtenerCarritoStorage } from "./storage.js";
import { actualizarContador } from "./ui.js";

export const renderizarProductos=()=>{
    const contenedorSection=document.getElementById("section-productos");
    const contador=document.getElementById("contador");

    fetch('./data/productos.json')
    .then(response=>{
        if(!response.ok){
            throw new Error(`HTTP error! Status:${response.status}`);
        }
        return response.json();
    })
    .then(data=>{
        data.forEach((producto)=>{
            const article=document.createElement('article');
            const imagen=document.createElement('img');
            const nombre=document.createElement('h2');
            const articleInfo=document.createElement('div');
            const descripcion=document.createElement('p');
            const precio=document.createElement('p');
            const buttonAgregar=document.createElement('button');
            const imgCarritoButton=document.createElement('img');
            const infoButton=document.createElement('span');
            
            article.classList.add("article-productos", "bg-color-secondary");
            imagen.alt=`Imagen de ${producto.nombre}`;
            articleInfo.classList.add("article-productos-descrip");
            imgCarritoButton.alt="Imagen de carrito en button";
            buttonAgregar.classList.add("btn-carrito");

            imagen.src=`./${producto.imagen}`;
            nombre.textContent=producto.nombre;
            descripcion.textContent=producto.descripcion;
            precio.innerHTML=`<strong>Precio: $</strong>${producto.precio}`;
            imgCarritoButton.src="./images/carrito-boton.png";
            infoButton.textContent="Agregar al carrito";

            buttonAgregar.appendChild(imgCarritoButton);
            buttonAgregar.appendChild(infoButton);
            articleInfo.appendChild(descripcion);

            buttonAgregar.addEventListener('click', ()=>{
                agregarCarrito(producto);
            })

            article.appendChild(imagen);
            article.appendChild(nombre);
            article.appendChild(articleInfo);
            article.appendChild(precio);
            article.appendChild(buttonAgregar);

            contenedorSection.appendChild(article);

        }) 
    })
    .catch(error=>{
        console.error("Error en la comunicación", error);
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    const carrito=obtenerCarritoStorage();
    actualizarContador(carrito);
    renderizarProductos();
})