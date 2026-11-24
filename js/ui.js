export const mostrarMensaje = (texto) =>{
        Swal.fire({
        title: `¡Éxito!`,
        icon: "success",
        text:`${texto}`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: `
        Aceptar
        `,
        });
    

}

export const actualizarContador=(carrito)=>{
    const contador=document.getElementById("contador");
    contador.textContent=carrito.length || 0;
    
}