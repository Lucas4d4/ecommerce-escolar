import { actualizarContador } from "./ui.js";

const KEY='carrito';

export const agregarCarritoStorage=(producto)=>{
    localStorage.setItem(KEY, JSON.stringify(producto))
}

export const obtenerCarritoStorage=()=>{
   return JSON.parse(localStorage.getItem(KEY))||[];
}

export const vaciarCarritoStorage=()=>{
   localStorage.removeItem(KEY);
}

