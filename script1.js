const contendor = document.getElementById("contendor");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    const valorActual = parseInt(contendor.textContent);
    contendor.textContent = valorActual + 1;
});