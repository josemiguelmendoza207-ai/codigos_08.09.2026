const tareas = document.querySelectorAll(".tarea");
const btnReiniciar = document.getElementById("btnReiniciar");

tareas.forEach(function (tarea) {
    tarea.addEventListener("click", function () {
        tarea.classList.toggle("Completadas");
    }); 
});

btnReiniciar.addEventListener("click", function () {
    tareas.forEach(function (tarea) {
        tarea.classList.remove("Completadas");
    });
});