//** EN SECCIÓN EQUIPAMIENTO ++//


function iniciar()
{
  
  enviandoformulario()
}

function saludarConSweet()
 {
   Swal.fire ({
     title: "Formulario enviado con éxito",
     icon: 'Waring',
     confirmButtonText: 'MUCHAS GRACIAS'
   })
 }

 function enviandoformulario()
 {
   const btn = document.getElementById("formulario");
   btn.addEventListener("submit", ()=>saludarConSweet())
 }

 