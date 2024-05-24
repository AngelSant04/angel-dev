class Experiencia {
  constructor(id, urlImg, title, description, esTec) {
    this.id = id;
    this.urlImg = urlImg;
    this.title = title;
    this.description = description;
    this.esTec = esTec;
  }
}

const trabajoEquipo = new Experiencia(
  1,
  "img/servicios/Equipo.png",
  "Trabajo en Equipo",
  "Colaborador entusiasta y efectivo, demostrando habilidades sólidas para trabajar en equipo y contribuir al éxito colectivo.",
  0
);
const compromiso = new Experiencia(
  2,
  "img/servicios/Compromiso.png",
  "Compromiso",
  "Comprometido con la excelencia y la consecución de objetivos, demuestro una dedicación inquebrantable en cada tarea y proyecto.",
  0
);
const liderazgo = new Experiencia(
  3,
  "img/servicios/Liderazgo.png",
  "Liderazgo",
  "Líder proactivo con habilidades sólidas de toma de decisiones y motivación, orientado a inspirar y guiar equipos hacia el éxito.",
  0
);
const autoconfianza = new Experiencia(
  4,
  "img/servicios/Confianza.png",
  "Autoconfianza",
  "Poseo una autoconfianza sólida que impulsa mi capacidad para enfrentar desafíos con determinación y lograr buenos resultados.",
  0
);

// Conocimientos
const sql = new Experiencia(
  5,
  "img/servicios/SQL_Logo.png",
  "SQL",
  `He demostrado habilidades sólidas en el diseño y optimización de bases de datos.<br>
  He implementado procedimientos almacenados eficientes, gestionado la seguridad de datos y resuelto desafíos de rendimiento. <br>
  Mi experiencia incluye el desarrollo y mantenimiento de bases de datos robustas para respaldar aplicaciones empresariales.`,
  1
);
const laravel = new Experiencia(
  6,
  "img/servicios/Laravel_Logo.png",
  "laravel",
  `He implementado arquitectura hexagonal en Laravel, desarrollando soluciones modulares y mantenibles, además de crear APIs eficientes utilizando Lumen durante mi estadia en Innovahtec.`,
  1
);
const django = new Experiencia(
  7,
  "img/servicios/Django_Logo.png",
  "django rest",
  `He construido APIs en Django utilizando el patrón Modelo-Controlador (MVC), diseñando modelos de datos, controladores y rutas para lograr una estructura eficiente y escalable.`,
  1
);
const html = new Experiencia(
  8,
  "img/servicios/HTML_Logo.png",
  "html",
  `He desarrollado habilidades en HTML, creando estructuras semánticas y accesibles para construir páginas web modernas y responsivas.`,
  1
);
const css = new Experiencia(
  9,
  "img/servicios/CSS_Logo.png",
  "css",
  `He dominado CSS para diseñar interfaces atractivas y receptivas, aplicando estilos, disposiciones y animaciones para mejorar la experiencia del usuario en aplicaciones web.`,
  1
);
const js = new Experiencia(
  10,
  "img/servicios/JS_Logo.png",
  "JavaScript",
  `He adquirido experiencia en JavaScript, creando interactividad dinámica en páginas web, manipulando el DOM y utilizando frameworks.`,
  1
);
const ts = new Experiencia(
  11,
  "img/servicios/TS_Logo.png",
  "typescript",
  `He adquirido conocimientos en TypeScript, aplicándolo para el desarrollo de aplicaciones más robustas y mantenibles mediante el uso de tipado estático y características avanzadas de ECMAScript.`,
  1
);
const vue = new Experiencia(
  12,
  "img/servicios/Vue_Logo.png",
  "vue",
  `He adquirido habilidades en Vue.js 2 y Vue.js 3, construyendo interfaces interactivas y dinámicas mediante componentes, gestión de estado y enrutamiento para desarrollar aplicaciones web modernas y eficientes.`,
  1
);
const angular = new Experiencia(
  13,
  "img/servicios/Angular_Logo.png",
  "angular",
  `He desarrollado competencias en Angular, creando aplicaciones web escalables y robustas con características como inyección de dependencias, enlace bidireccional de datos y modularidad, siguiendo las mejores prácticas de desarrollo.`,
  1
);
const quasar = new Experiencia(
  14,
  "img/servicios/Quasar_Logo.png",
  "quasar",
  `He adquirido conocimientos en Quasar Framework, construyendo aplicaciones web de manera eficiente mediante el uso de Vue.js, en un entorno que facilita el desarrollo multiplataforma con un conjunto de herramientas integradas.`,
  1
);
const prime = new Experiencia(
  15,
  "img/servicios/PrimeNg-Logo.png",
  "prime ng",
  `He trabajado con PrimeNG, implementando componentes ricos y temas personalizables en aplicaciones Angular para crear interfaces de usuario atractivas y funcionales.`,
  1
);
const git = new Experiencia(
  16,
  "img/servicios/Git_Logo.png",
  "git",
  `He adquirido habilidades en Git, utilizando este sistema de control de versiones para gestionar el seguimiento de cambios en proyectos de software, colaborando eficientemente y manteniendo un historial de versiones organizado.`,
  1
);
const postgre = new Experiencia(
  17,
  "img/servicios/PostgreSql_Logo.png",
  "postgresql",
  `He trabajado con PostgreSQL, durante mi tiempo en Grupo Leoncito, gestionando bases de datos, creando consultas eficientes y asegurando la integridad de los datos durante mi experiencia profesional.`,
  1
);
const net = new Experiencia(
  18,
  "img/servicios/net_Logo.png",
  ".net framework",
  `He aplicado mis habilidades en el desarrollo de aplicaciones utilizando .NET Framework, participando en la creación de soluciones robustas y eficientes para diversos proyectos en la empresa Ide Solution.`,
  1
);
const ionic = new Experiencia(
  19,
  "img/servicios/Ionic_Logo.png",
  "ionic",
  `He trabajado con Ionic, desarrollando aplicaciones móviles multiplataforma utilizando tecnologías web como Angular y TypeScript, aprovechando la versatilidad de Ionic para crear experiencias de usuario nativas y consistentes.`,
  1
);
const java = new Experiencia(
  20,
  "img/servicios/Java_Logo.png",
  "java",
  `He utilizado Java en el entorno de desarrollo NetBeans para crear aplicaciones de escritorio con interfaces de usuario funcionales y robustas.`,
  1
);
const android = new Experiencia(
  21,
  "img/servicios/Android_Logo.png",
  "android",
  `He trabajado en el desarrollo de aplicaciones Android utilizando Java, implementando funcionalidades nativas y aprovechando el ecosistema de Android Studio para crear experiencias móviles eficientes y centradas en el usuario.`,
  1
);
const firebase = new Experiencia(
  22,
  "img/servicios/Firebase_Logo.png",
  "firebase",
  `He trabajado con Firebase Realtime Database y Firebase Storage, implementando soluciones de bases de datos en tiempo real y almacenamiento de archivos para crear aplicaciones web y móviles con funcionalidades dinámicas y almacenamiento eficiente de datos.`,
  1
);
const visual = new Experiencia(
  23,
  "img/servicios/Visual_Logo.png",
  "visual basic",
  `He adquirido conocimientos en Visual Basic, empleándolo para el desarrollo de aplicaciones de escritorio, automatización de tareas y creación de soluciones eficientes en entornos Windows.`,
  1
);
const wordpres = new Experiencia(
  24,
  "img/servicios/Wordpres_Logo.png",
  "wordpress",
  `He trabajado en el desarrollo de una página de compra y venta en WordPress, implementando soluciones de comercio electrónico, integrando pasarelas de pago y optimizando la experiencia del usuario para facilitar transacciones y navegación.`,
  1
);


const aptitudes = [trabajoEquipo, compromiso, liderazgo, autoconfianza];
const conocimientos = [sql, laravel, django, html, css, js, ts, vue, angular, quasar, prime, git]
const puedoTrabajar = [postgre, net, ionic, java, android, firebase, visual, wordpres]