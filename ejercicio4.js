const inputTareas = document.getElementById("inputTareas");
const btnAgregar = document.getElementById("btnAgregarTareas");
const listaProductos = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", function () {
    const texto = inputTareas.value.trim();
    if (texto === "") return;+

    listaTareas. insertAdjacentHTML("beforeend", <li>${texto} <button class="btn-borrar">Borrar</button></li>);

inputTareas.value = "";

});

listaTareas.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("btn-borrar")) {
        evento.target.closest("li").remove();
    }
});