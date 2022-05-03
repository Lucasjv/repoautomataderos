//** EN SECCIÓN CONTACTO ++//

//**APLICANDO LIBRERIAS */


function iniciar()
{
  
  enviandoformulario()
  cancelandoformulario()
  tosti()
}

function saludarConSweet()
 {
   Swal.fire ({
     title: "Formulario enviado con éxito",
     icon: 'success',
     confirmButtonText: 'MUCHAS GRACIAS'
   })
 }

 function enviandoformulario()
 {
   let btn = document.getElementById("btnon");
   btn.addEventListener("click", ()=>saludarConSweet())
 }


 function CancelarConSweet()
 {
   Swal.fire ({
     title: "Vuelva a cargar los datos",
     icon: 'Warning',
     confirmButtonText: 'MUCHAS GRACIAS'
   })
 }

 function cancelandoformulario()
 {
   let btn = document.getElementById("btnreset");
   btn.addEventListener("click", ()=>CancelarConSweet())
}


function tosti()

{

  let btn = document.getElementById("btnreset");
  
   btn.addEventListener("click", ()=> {
     
    Toastify({

    text: "Botón inhabilitado",
    
    duration: 3000,
    
    }).showToast();
     })
    }
