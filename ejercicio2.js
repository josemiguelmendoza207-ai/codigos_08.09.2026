const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
});