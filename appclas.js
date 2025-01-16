const lista1 = document.getElementsByClassName('lista');

const boton = document.getElementById('cambiar');

boton.addEventListener('click',()=>{
    /*lista1[2].textContent = "Sapo";
    lista1[2].style.color = "blue";*/

    for(let i =0; i<lista1.length; i++){
        lista1[i].style.color = "orange";
    }
})