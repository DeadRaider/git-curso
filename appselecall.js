const selectorall = document.querySelectorAll('p');
const selectorall1 = document.querySelectorAll('.lista')

const boton = document.getElementById('cambiar');

boton.addEventListener('click',()=>{
    selectorall.forEach((item)=>{
       item.style.backgroundColor = "green"; 
       item.style.color = "white";
       item.style.transform ="rotate(2deg)"
    })

    selectorall1.forEach((item2)=>{
        item2.style.fontWeight = "bold";
    })
})