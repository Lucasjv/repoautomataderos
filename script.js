BienvenidaConSweet ()

//**APLICANDO LIBRERIAS */



function BienvenidaConSweet()
{

    Swal.fire ({
        title: "Gracias por visitar nuestra página, recuerde que nuestros horarios de atención son de 8 a 13hs y 14 a 18hs, teléfono 4683-7070",
        icon: 'success',
        confirmButtonText: 'ENTENDIDO'
      })

}





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