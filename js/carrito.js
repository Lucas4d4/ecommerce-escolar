import { comprarCarrito, eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarritoStorage } from "./storage.js";
import { actualizarContador } from "./ui.js";


export const renderizarCarrito  =   ()  =>  {
    const contador=document.getElementById("contador");
    const contenedorCarrito=document.getElementById("section-list-products");
    const contenedorFactura=document.getElementById("section-total-shop");
    const contenedorVaciar=document.getElementById("content-vaciar");
    let acumuladorPrecio=0;
    let acumuladorPrecioDescuento=0;

    contenedorCarrito.innerHTML="";
    contenedorFactura.innerHTML="";
    contenedorVaciar.innerHTML="";
    
    const carrito=obtenerCarritoStorage();
    
    if(carrito.length===0){
        contenedorVaciar.innerHTML="";
        const tituloCarrito=document.createElement('h1');
        const vacioCarrito=document.createElement('h2');
        const tituloFactura=document.createElement('h2');
        const vacioFactura=document.createElement('h3');
        
        tituloCarrito.textContent="Mi carrito";
        vacioCarrito.textContent="El carrito está vacío 🙁";

        contenedorCarrito.appendChild(tituloCarrito);
        contenedorCarrito.appendChild(vacioCarrito);

        tituloFactura.textContent="Factura compra";
        vacioFactura.textContent="Factura no disponible ⛔";

        contenedorFactura.appendChild(tituloFactura);
        contenedorFactura.appendChild(vacioFactura);

        return;
    }

    carrito.forEach((producto, indice)=>{
        const article=document.createElement('article');
        const imagen=document.createElement('img');
        const contenedorInfo=document.createElement('div');
        const nombre=document.createElement('h3');
        const precio=document.createElement('p');
        const descuento=document.createElement('p');
        const precioDescuento=document.createElement('p');
        const contenedorButton=document.createElement('div');
        const buttonEliminar=document.createElement('button');

        article.classList.add("article-carrito");
        contenedorInfo.classList.add("content-info-products");
        precio.classList.add("text-color-info");
        descuento.classList.add("text-color-info");
        precioDescuento.classList.add("text-dark-general");
        contenedorButton.classList.add("content-button-eliminar");

        imagen.src=`../${producto.imagen}`;
        nombre.textContent=producto.nombre;
        precio.innerHTML=`<strong>Precio por unidad: </strong>${producto.precio}`;
        descuento.innerHTML=`<strong>Descuento: </strong>20% OFF`;
        const convertPrecio=parseFloat(producto.precio);
        const descuentoAplicado=convertPrecio*0.80;
        precioDescuento.innerHTML=`<strong>Precion con descuento: </strong>${descuentoAplicado}`;
        buttonEliminar.innerHTML=`<span><img src=../images/basura.png>Eliminar</span>`;

        acumuladorPrecio+=parseFloat(producto.precio);
        acumuladorPrecioDescuento+=descuentoAplicado;

        buttonEliminar.addEventListener('click', ()=>{
            Swal.fire({
                    title: "¿Estás seguro?",
                    icon: "warning",
                    text:"Vas a eliminar el producto del carrito",
                    showCancelButton: true,
                    confirmButtonColor: "rgb(207, 12, 12)",
                    cancelButtonColor:"rgba(120, 100, 156, 1)",
                    confirmButtonText:"Aceptar",
                    cancelButtonText:"Cancelar"
                    }).then((result)=>{
                        if(result.isConfirmed){
                            Swal.fire({
                                title:"Eliminado",
                                text:"Producto eliminado del carrito.",
                                icon:"success"
                            });
                            eliminarProducto(indice);
                            renderizarCarrito();
                        }
                    });
        });

        article.appendChild(imagen);
        contenedorInfo.appendChild(nombre);
        contenedorInfo.appendChild(precio);
        contenedorInfo.appendChild(descuento);
        contenedorInfo.appendChild(precioDescuento);
        article.appendChild(contenedorInfo);
        contenedorButton.appendChild(buttonEliminar);
        article.appendChild(contenedorButton);

        contenedorCarrito.appendChild(article);
    });

    

    const contenedorSubtotal=document.createElement('div');
    const subtotal=document.createElement('h4');
    const precioSubtotal=document.createElement('p');
    const contenedorDescuento=document.createElement('div');
    const descuentoTotal=document.createElement('h4');
    const descuentoInfoTotal=document.createElement('p');
    const contenedorPrecioTotal=document.createElement('div');
    const precioTotal=document.createElement('h4');
    const precioInfoTotal=document.createElement('p');
    const buttonFinalizar=document.createElement('button');

    const buttonVaciar=document.createElement('button');

    contenedorSubtotal.classList.add("info-list");
    subtotal.classList.add("text-color-info");
    contenedorDescuento.classList.add("info-list");
    descuentoTotal.classList.add("text-color-info");
    contenedorPrecioTotal.classList.add("info-list");
    precioTotal.classList.add("text-dark-general");

    buttonVaciar.classList.add("btn-vaciar-carrito");

    subtotal.textContent="Subtotal";
    descuentoTotal.textContent="Descuento (%)";
    precioTotal.textContent="Total";

    precioSubtotal.textContent=acumuladorPrecio;
    descuentoInfoTotal.textContent="20%";
    precioInfoTotal.textContent=acumuladorPrecioDescuento;
    buttonFinalizar.textContent="Finalizar compra";

    buttonVaciar.textContent="Vaciar carrito 🛒";

    buttonFinalizar.addEventListener('click', () =>{
        comprarCarrito();
        renderizarCarrito();
    });

    buttonVaciar.addEventListener('click', () =>{
        
        Swal.fire({
                    title: "¿Estás seguro?",
                    icon: "warning",
                    text:"Vas a vaciar todo el carrito",
                    showCancelButton: true,
                    confirmButtonColor: "rgb(207, 12, 12)",
                    cancelButtonColor:"rgba(120, 100, 156, 1)",
                    confirmButtonText:"Aceptar",
                    cancelButtonText:"Cancelar"
                    }).then((result)=>{
                        if(result.isConfirmed){
                            Swal.fire({
                                title:"Vaciado",
                                text:"El carrito 🛒 quedó vacío",
                                icon:"success"
                            });
                            vaciarCarrito();
                            renderizarCarrito();
                        }
                    });
    });

    contenedorSubtotal.appendChild(subtotal);
    contenedorSubtotal.appendChild(precioSubtotal);
    contenedorDescuento.appendChild(descuentoTotal);
    contenedorDescuento.appendChild(descuentoInfoTotal);
    contenedorPrecioTotal.appendChild(precioTotal);
    contenedorPrecioTotal.appendChild(precioInfoTotal);

    contenedorFactura.appendChild(contenedorSubtotal);
    contenedorFactura.appendChild(contenedorDescuento);
    contenedorFactura.appendChild(contenedorPrecioTotal);
    contenedorFactura.appendChild(buttonFinalizar);

    contenedorVaciar.appendChild(buttonVaciar);
}



document.addEventListener('DOMContentLoaded', () =>{
    const carrito=obtenerCarritoStorage();
    actualizarContador(carrito);
    renderizarCarrito();
});

