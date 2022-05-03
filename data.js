//** EN SECCIÓN EQUIPAMIENTO ++//


const datos = JSON.parse(localStorage.getItem("MI_CARRITO"));
miCarrito= new Carrito ([]);

if (!miCarrito) {

miCarrito = new Carrito([]);

}

else {
  miCarrito= new Carrito (datos);

}



console.log(miCarrito.productos.reduce((acc, element)=>acc+=element.precio,0));






function init(){

  mostrarMenu();
  escribirMensaje();
}



function mostrarMenu()
{
 categorias.forEach((categoria)=>{
   const myBtn = document.createElement("button");
   myBtn.setAttribute("class", "styledBtn");
   myBtn.innerHTML=categoria.nombre;
   myBtn.addEventListener("click", ()=>mostrarProductos(categoria));
   document.getElementById("misproductos").appendChild(myBtn);
 })
}

function escribirMensaje()
{
const nodoMensaje = document.createElement("p");
nodoMensaje.setAttribute("id", "mainMessage");
nodoMensaje.innerHTML= "Por favor, selecciona una categoría para continuar:";
document.getElementById("nodoMensaje").appendChild(nodoMensaje);
}


function mostrarProductos(categoria)
{


document.querySelector("#mainMessage").innerHTML=`<h3>Productos en Categoría: ${categoria.nombre}</h3>`
const productosFiltrados = filtrarProductos(categoria.id);

let contenedor = document.getElementById("mainContainer");
if(contenedor===null)
{
  contenedor = document.createElement("div");
  contenedor.setAttribute("id", "mainContainer");
  document.body.appendChild(contenedor);
}

let nodoProductos = document.getElementById("productos");
if(nodoProductos===null)
{
  nodoProductos = document.createElement("div");
  nodoProductos.setAttribute("id", "productos");
  contenedor.appendChild(nodoProductos);
}
else 
{
  nodoProductos.innerHTML="";
}



let cadena ='';
productosFiltrados.forEach((element)=>{
  cadena+=getProductInfo(element);
  nodoProductos.innerHTML=cadena;
});

mostrarCarrito();



}

function filtrarProductos(idCategoria)
{

  return productos.filter(producto=>producto.categoria===idCategoria);

}


function getProductInfo(product)
{
return `<div class="productWrapper">
      <div class="mainProductInfo">
     
       
        </div>
        <div class="productInfo">
          ${product.nombre}<br>
          $${product.precio}
        </div>
        </div>
        <div class="productBtn">
          ${getProductButton(product)}
        </div>
        </div>`


}

function getProductButton(product)
{
  if(product.stock>0)
  {
    return `<button class="styledBtn" onclick="agregarAlCarrito(${product.id})">Agregar al Carrito</button>`
  }
  else{
    return `<button class="notBuyBtn">No hay stock</button>`;
  }
}

function agregarAlCarrito(productoOk)
{
let products = productos.map(el=>el.id);
let index = products.findIndex(el=>el===productoOk);
let product = productos[index];
miCarrito.addProducto(product);

actualizarCarrito()

}

function actualizarCarrito()
{
let contenedor = document.getElementById("carrito");
contenedor.innerHTML="";
let prods = miCarrito.productos;

let nuevoContenedor=document.createElement("div");

nuevoContenedor.setAttribute("style", "display:flex;flex-direction:column");

prods.forEach(producto=>{
  let nodoLi = document.createElement("div");
  nodoLi.innerHTML=`${producto.nombre} - ${producto.precio}<br>`
  nuevoContenedor.appendChild(nodoLi)
  
})

contenedor.appendChild(nuevoContenedor);

miCarrito.guardar();

}

function mostrarCarrito()
{
let contenedor = document.getElementById("mainContainer");
let nodoCarrito = document.getElementById("carrito");
if(nodoCarrito===null)
{
  nodoCarrito = document.createElement("div");
  nodoCarrito.setAttribute("id", "carrito");
  nodoCarrito.innerHTML="<h3>Su Carrito:</h3>";
  contenedor.appendChild(nodoCarrito);
}
actualizarCarrito();


}



//**api */

fetch ("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
.then((resp)=> resp.json())
.then((data) => {
    console.log(data);
    console.log("Valor compra ", data[1].casa.compra);
    console.log("Valor venta ", data[1].casa.venta)


    mostrarDolar (data)
    
})

function mostrarDolar (data)
{

    const nodoDolar = document.querySelector("#dolares") 


    data.forEach(element => {
    const contenedor = document.createElement("li")

    contenedor.innerHTML =  `<h3>"Valor Compra ", ${element.casa.compra}</h3> 
 
   <h3>"Valor Venta ",${ element.casa.venta}</h3> ` 

nodoDolar.appendChild(contenedor);

});

}
