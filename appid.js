const div = document.getElementById('midiv');

const boton = document.getElementById('cambiar');

let con = 1;
boton.addEventListener('click', ()=>{

 if(con == 1){
    div.textContent = "Se modifica el contenido";
    div.style.color = "red";
    con =2;
    } else if(con == 2){
        div.textContent = "Curso de programacion";
    div.style.color = "black";
    con =1;
    }
})