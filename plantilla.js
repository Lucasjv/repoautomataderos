/////*EN SECCIÓN HTML EQUIPAMIENTO *///


plantilla ()
function plantilla()
{
    let name = prompt ("ingresa tu nombre de usuario")
    const contenedor = document.getElementById("carritoname")

    contenedor.innerText = ` Bienvenido ${name} al carrito de compras`
}

localStorage.setItem("Mi_llave", plantilla)

const accesorios = [

    { nombre:"Tuercas de seguridad", precio: "$10250" },
    { nombre:"Sensor de estacionamiento sonoro", precio: "$13500" },
    { nombre:"cámara de retroceso", precio: "$10250" },
    { nombre:"chapon protector de carter y caja", precio: "$11200" },
    { nombre:"alarma volumétrica", precio: "$10250" },

];

for (const accesorio of accesorios) {

let newcontenedor = document.createElement ("div");

newcontenedor.innerHTML= `<h3> Producto: ${accesorio.nombre} </h3>
<p> $: ${accesorio.precio} </p>
`;

const equipament = document.getElementById("shop")

equipament.append(newcontenedor);


}