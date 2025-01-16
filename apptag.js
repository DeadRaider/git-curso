const etiqueta = document.getElementsByTagName('p');

const boton = document.getElementById('cambiar');

boton.addEventListener('click', ()=>{
    for(let i= 0; i<etiqueta.length; i++){
        etiqueta[i].style.background = "blue";
        etiqueta[i].style.color = "white";
        etiqueta[i].style.transition = "all 3s ease-in";
        etiqueta[i].style.fontSize = "25px";
    }
})