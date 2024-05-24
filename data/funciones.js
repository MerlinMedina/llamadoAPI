function traeArticulos() { // Esta función llama a la api con un fetch. y carga el json en una variable
    const llamada = fetch(`https://fakestoreapi.com/products`);//https://fakestoreapi.com/products o https://api.escuelajs.co/api/v1/products
    
    llamada
        .then(res => res.json())
        .then(responseJson => renderArticulo(responseJson))
        .catch(error => dibujarError(error))
        
}

function traeArticulos2() { // Esta función llama a otra api con un fetch. y carga el json en la misma variable
    const llamada = fetch(`https://api.escuelajs.co/api/v1/products`);
    
    llamada
        .then(res => res.json())
        .then(responseJson => renderArticulo2(responseJson))
        .catch(error => dibujarError(error))
        
}

function renderArticulo(res) { // Esta función recorre el json que está cargado en la variable y crea las filas con la información del json
    const articulos = res;
    let rows = '';
    for(let item of articulos) {
        rows += `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td>${item.description}</td>
            <td>${item.category}</td>
            <td>
              <img src="${item.image}" alt="" class="img-fluid"  onclick="articuloIndex()>
            </td>
            <td>${item.rating.rate}</td>
            <td>${item.rating.count}</td>
        </tr>
        `
    }
    // document.getElementById("tbody").innerHTML = rows;
    document.querySelector('#usersRows').innerHTML = rows;
}

function renderArticulo2(res) { // Esta función recorre el segundo json y crea las filas con la información
    const articulos = res;
    let rows = '';
    for(let item of articulos) {
        rows += `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td>${item.description}</td>
            <td>${item.category.name}</td>
            <td>
              <img src="${item.category.image}" alt="" class="img-fluid">
            </td>
            <td>${item.rate}</td>
            <td>${item.count}</td>
        </tr>
        `
    }
    // document.getElementById("tbody").innerHTML = rows;
    document.querySelector('#usersRows').innerHTML = rows;
}

function dibujarError(error) { // Este es el mensaje de error de la profe. no lo pude hacer andar.
    console.log(error);
    const alerta = `<div class="alert alert-danger" role="alert">
    ${error.toString()}
    </div>`;
    document.getElementById('msj').innerHTML = alerta;
}