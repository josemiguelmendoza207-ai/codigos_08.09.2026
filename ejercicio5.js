const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (nombre.value.trim() === "" || correo.value.trim() === "") {
        mensaje.textContent = "Por favor complete todos los campos.";
        mensaje.style.color = "red";
    } 
    else if (!correo.value.includes("@")) {
        mensaje.textContent = "El correo debe contener @.";
        mensaje.style.color = "red";
    } 
    else {
        mensaje.textContent = "¡Registro exitoso, " + nombre.value + "!";
        mensaje.style.color = "green";
    }
});