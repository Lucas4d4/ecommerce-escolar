import { obtenerCarritoStorage } from "./storage.js"
import { actualizarContador } from "./ui.js"

export const renderizarContacto = () => {
    const carrito=obtenerCarritoStorage();
    actualizarContador(carrito);
}

document.addEventListener('DOMContentLoaded', () =>{
    renderizarContacto();
});