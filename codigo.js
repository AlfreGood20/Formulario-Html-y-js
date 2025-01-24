// Código JavaScript

document.getElementById("enviar").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const edad= document.getElementById("edad").value;

    if(nombre && apellido && edad){
        alert("Exitoso registro")
    }
    else{
        alert("Por favor registrese y rellene el formulario")
    }
});