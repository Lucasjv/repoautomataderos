

  const nodobtn = document.querySelector("#btnon")

  nodobtn.addEventListener("click", ()=>alert ("Formulario enviado")
  
  );

  const nodoreset = document.getElementById("btnreset")

  nodoreset.addEventListener("mouseover", ()=> {
      console.log("El usuario no ha enviado sus datos")
      
  });

  const nodoFormulario = document.getElementById("formulario")
nodoFormulario.addEventListener("subit", ()=>
{
    alert ("formulario enviado con éxito")
})