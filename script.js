//**APLICANDO LIBRERIAS */

function consweet()
{
    confirmarConSweet()
    negarConSweet()

}


function confirmarConSweet()
{

    Swal.fire ({
        title: "Ingreso exitoso",
        icon: 'success',
        confirmButtonText: 'MUCHAS GRACIAS'
      })

}

function negarConSweet()
{
    Swal.fire ({
        title: "Vuelva a intentarlo",
        icon: 'error',
        confirmButtonText: 'MUCHAS GRACIAS'
      })
}


function saludar ()
{alert ("Gracias por visitar nuestra página, recuerde que nuestros horarios de atención son de 8 a 13hs y 14 a 18hs, teléfono 4683-7070")}
 
let nombre = prompt ("Ingrese por favor su nombre y apellido")
{
    alert ("Bienvenido " + nombre);
    console.log (nombre)
}
 

//*definiendo clave *//

const claveOk = 1234

//**OPTIMIZANDO CÓDIGO *//
 
let clave = parseInt(prompt ("Ingrese su clave"))
 
 clave === claveOk ? confirmarConSweet() : negarConSweet();
 
if  (isNaN(clave)) { alert ("Su clave solo debe ser numérica");}


//** DÍA DE TURNO Y CANTIDAD DE VEHÍCULOS**//

 
 
let fecha = prompt ("Ingrese qué día de la semana desea solicitar turno")
{ console.log (fecha)}
 
let turnos = parseInt(prompt("Ingrese la cantidad de vehículos que quiera traer"))

//**OPTIMIZANDO CÓDIGO *//
 
let disponibles = "20";
 
turnos <= disponibles ? 
alert ("¡turno confirmado con éxito! Complete el formulario de contacto y nos estaremos comunicando a la brevedad") : alert (" No quedan turnos para esta semana");
 
saludar ()


 
//*turnos que quedan disponibles por día*//
 
for (let i = turnos ; i<=disponibles ; i++)
{console.log (i);}
 
 
//**Vehículos que trabajamos* *//
 
 
const vehiculos = ["ka 2017", "Ranger", "focusiv", "fiesta", "Ecosport", "mondeo", "bronco", "maverik", "territory", "Transit", "Kuga"];
 
vehiculos.forEach((vehiculo)=> { console.log("Vehículo habilitado", vehiculo); })
 
 
let modelo = prompt ("Ingrese el modelo de su vehículo para conocer si disponemos de equipamiento");
 

//**OPTIMIZANDO CÓDIGO *//

const indice = vehiculos.indexOf(modelo);
 

 
indice !==-1 ? alert (`Disponemos de equipamiento y repuestos para su ${vehiculos[indice]}`)  :  alert ("Su vehículo ya ha sido discontinuado por fábrica y no disponemos de equipamiento");


//*API*//

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