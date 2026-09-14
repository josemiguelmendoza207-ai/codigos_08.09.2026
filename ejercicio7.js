const inputComentario = document.getElementById("inputComentario");
const btnAgregar = document.getElementById("btnAgregarComentario");
const listaComentario = document.getElementById("listaComentario");

btnAgregar.addEventListener("click", function () {
    const texto = inputComentario.value.trim();
    if (texto === "") return;+

    listaComentario. insertAdjacentHTML("beforeend", `<li>${texto} <button class="btn-borrar">Borrar</button></li>`);

inputComentario.value = "";

});

listaComentario.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("btn-borrar")) {
        evento.target.closest("li").remove();
    }
});