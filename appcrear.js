const crear = document.getElementById('ListaPadre');

const boton = document.getElementById('cambiar');

boton.addEventListener('click', ()=>{
    const crearItem = document.createElement('li');
    crearItem.textContent = "Gallina";
    crear.appendChild(crearItem);

    const notificacion = document.createElement('div');

    notificacion.textContent = "Elemento agragado con exito"; 

    notificacion.style.position = "fixed";
    notificacion.style.backgroundColor = "red";
    notificacion.style.color = "white";
    notificacion.style.padding = "10px";
    
    notificacion.style.top = "50%";
    notificacion.style.left = "30%";
    notificacion.style.frontSize = "20px"

    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.remove();
    }, 30000);
})

eliminar.addEventListener('click', ()=>{
    const ultimo = crear.lastElementChild;

    if(ultimo){
        crear.removeChild(ultimo);
    }else{
        alert("No existe elemento");
    }
})
//[]'{}<>'