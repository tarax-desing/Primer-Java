
const botonCambiarTema = document.getElementById("cambiarTema");
const body = document.body;


botonCambiarTema.addEventListener("click", function() {


    
    if (body.classList.contains("claro")) {
        body.classList.remove("claro");
        body.classList.add("oscuro");
        botonCambiarTema.textContent = "Cambiar Estilo";
    } else {
        body.classList.remove("oscuro");
        body.classList.add("claro");
        botonCambiarTema.textContent = "Cambiar Estilo"; 
    }

    
});