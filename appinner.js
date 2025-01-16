const contenedor = document.getElementById('ListaPadre');

const api = document.getElementById('innerhtml');

api.addEventListener('click', ()=>{
    contenedor.innerHTML = `
        <h2>Contenido de animales</h2>
<p>Lista de animales</p>

<table border="1px" CELLSPACING = 0>
    <tr>
        <th>Codigo</th>
        <th>Nombre</th>
        <th>Color</th>
    </tr>
    <tr>
        <td>01</td>
        <td>Perro</td>
        <td>Negro</td>
    </tr>
    <tr>
        <td>02</td> 
        <td>Gato</td> 
        <td>Verde</td> 
    <tr>
        <td>03</td>
        <td>zorro</td>
        <td>rojo</td>
    </tr>
</table>
`;
})