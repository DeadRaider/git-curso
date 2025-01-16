const imagen = document.getElementById('imagenes');

document.addEventListener('keydown', (evento)=>{
    if(evento.key === 'd'){
        imagen.setAttribute('src', 'allstaroja.jpg');
    }else if(evento.key === 'f'){
        imagen.setAttribute('src', 'allstarnegra.jpg');
    }
})