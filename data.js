miCarrito= new Carrito([]);



function init(){
    escribirBienvenida();
    mostrarMenu();
    escribirMensaje();
}

function escribirBienvenida()
{
  const myH2 = document.createElement("h2");
  myH2.innerHTML="TIENDA DE EQUIPAMIENTO OFICIAL";
  document.body.appendChild(myH2);

}

function mostrarMenu()
{
   categorias.forEach((categoria)=>{
     const myBtn = document.createElement("button");
     myBtn.setAttribute("class", "styledBtn");
     myBtn.innerHTML=categoria.nombre;
     myBtn.addEventListener("click", ()=>mostrarProductos(categoria.id));
     let misproductos = document.getElementById("misproductos")
     misproductos.appendChild(myBtn);
   })
}

function escribirMensaje()
{
  const nodoMensaje = document.createElement("p");
  nodoMensaje.innerHTML= "Por favor, selecciona tu vehículo para continuar:";

let elnodo = document.getElementById("elnodo")
elnodo.appendChild(nodoMensaje);

}

function mostrarProductos(idCategoria)
{
    

  const productosFiltrados = filtrarProductos(idCategoria);
  let cadena ='';
  productosFiltrados.forEach((element)=>{
    cadena+=`<div>
    Equipamiento: ${element.nombre}<br>
    Precio : ${element.precio}<br>

    </div>
    <div class="productBtn">
    ${getProductButton(productos)}
  </div>`

    document.querySelector("#Productos").innerHTML=cadena;
});



}

function filtrarProductos(idCategoria)
{

    return productos.filter(producto=>producto.categoria===idCategoria);

}

function getProductButton(productos)
{
    if(productos.stock<0)
    {
      return `<button class="styledBtn" onclick="agregarAlCarrito">Agregar al Carrito</button>`
    }

    else{
      return `<button class="notBuyBtn">No disponible</button>`;
 
    }

    console.log(productos)
}

