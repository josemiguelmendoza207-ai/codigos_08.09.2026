// Obtener todos los botones de las preguntas
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    // 1. Obtener la respuesta asociada usando nextElementSibling
    const content = header.nextElementSibling;
    const isCurrentlyOpen = content.style.display === 'block';

    // 2. Cerrar TODAS las respuestas y quitar la clase activa a todos los botones
    headers.forEach(otherHeader => {
      otherHeader.classList.remove('active');
      const otherContent = otherHeader.nextElementSibling;
      if (otherContent) {
        otherContent.style.display = 'none';
      }
    });

    // 3. Si la que se clickeó no estaba abierta, la abrimos (si ya estaba abierta, queda cerrada)
    if (!isCurrentlyOpen) {
      header.classList.add('active');
      content.style.display = 'block';
    }
  });
});