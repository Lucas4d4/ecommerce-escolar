
import { agregarCarritoStorage, obtenerCarritoStorage, vaciarCarritoStorage } from "./storage.js"
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarCarrito=(producto)=>{
    const carrito=obtenerCarritoStorage();
    carrito.push(producto);
    agregarCarritoStorage(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado al carrito");
}

export const eliminarProducto=(indice)=>{
    const carrito=obtenerCarritoStorage();
    carrito.splice(indice, 1);
    agregarCarritoStorage(carrito);
    actualizarContador(carrito);
}

export const vaciarCarrito=()=>{
    vaciarCarritoStorage();
    actualizarContador([]);
    
}

export const comprarCarrito = () =>{
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Se ha finalizado la compra");
}