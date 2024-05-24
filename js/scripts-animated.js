document.addEventListener('DOMContentLoaded', function () {
  // Obtén el contenedor de la animación
  var animacionContainer = document.getElementById('animContainer');

  // Configura la ruta del archivo JSON de la animación
  var rutaAnimacion = 'https://lottie.host/77842e09-0857-44c9-9eb5-d2f315576eb7/MI6KKB3JDm.json'; // Reemplaza con la ruta correcta de tu animación

  // Carga la animación usando la biblioteca Lottie
  var animacion = lottie.loadAnimation({
    container: animacionContainer,
    renderer: 'svg', // o 'canvas' según tus preferencias
    loop: true, // Opciones adicionales según tus necesidades
    autoplay: true,
    path: rutaAnimacion
  });
});
