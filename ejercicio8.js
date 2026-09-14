const botones = document.querySelectorAll(".btnTema");
const vistaPrevia = document.getElementById("vistaPrevia");

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const tema = boton.dataset.tema;

        vistaPrevia.classList.remove("tema-claro", "tema-oscuro");

        vistaPrevia.classList.add("tema-" + tema);

    });

});