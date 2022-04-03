
function saludar ()
{alert ("Gracias por visitar nuestra página, recuerde que nuestros horarios de atención son de 8 a 13hs y 14 a 18hs, teléfono 4683-7070")}
 
let nombre = prompt ("Ingrese por favor su nombre y apellido")
{
    alert ("Bienvenido " + nombre);
    console.log (nombre)
}
 
const claveOk = 1234
 
let clave = parseInt(prompt ("Ingrese su clave"))
 
if ( clave === claveOk)
{alert ("Ingreso Exitoso");
}
else { alert ("ingreso no exitoso");
}
 
 
if  (isNaN(clave)) { alert ("Su clave solo debe ser numérica");}
 
 
let fecha = prompt ("Ingrese qué día de la semana desea solicitar turno")
{ console.log (fecha)}
 
let turnos = parseInt(prompt("Ingrese la cantidad de vehículos que quiera traer"))
 
let disponibles = "20";
 
if (turnos <= disponibles )
{ alert ("¡turno confirmado con éxito! Complete el formulario de contacto y nos estaremos comunicando a la brevedad");}
else { alert (" No quedan turnos para esta semana");}
 
saludar ()
 
//*turnos que quedan disponibles por día*//
 
for (let i = turnos ; i<=disponibles ; i++)
{console.log (i);}
 
 
 
 
const vehiculos = ["ka 2017", "Ranger", "focusiv", "fiesta", "Ecosport", "mondeo", "bronco", "maverik", "territory", "Transit"];
 
vehiculos.forEach((vehiculo)=> { console.log("Vehículo habilitado", vehiculo); })
 
 
let modelo = prompt ("Ingrese el modelo de su vehículo para conocer si disponemos de equipamiento");
 
const indice = vehiculos.indexOf(modelo);
 
if (indice!==-1)
 
{
    alert (`Disponemos de equipamiento y repuestos para su ${vehiculos[indice]}`)  
}
 
else
 
{
    alert ("Su vehículo ya ha sido discontinuado por fábrica y no disponemos de equipamiento")
};
 
 
function Producto (nombre, precio, mo, promo)
 
{
 
    this.nombre= nombre
    this.precio= precio
    this.mo= mo
    this.promo= promo
 
 
}
 
 
const tuercas = new Producto ("Tuercas de seguridad", 9600, 0, false)
const sensores = new Producto ("Sensor de estacionamiento sonoro", 9600, 4200, false)
const camara = new Producto ("camara de retroceso", 10200, 3500, false)
const chapon = new Producto ("chapon protector de carter y caja", 13500, 0, true)
const alarma = new Producto ("Alarma volumétrica", 12500, 2800, false)
 
console.log(tuercas)
console.log(sensores)
console.log(camara)
console.log(chapon)
console.log(alarma)
 
