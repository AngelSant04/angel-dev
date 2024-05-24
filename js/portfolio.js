class Memories {
  constructor(id, urlImg, title, description) {
    this.id = id;
    this.urlImg = urlImg;
    this.title = title;
    this.description = description;
  }
}

const angelDev = new Memories(
  1,
  "img/portfolio/angel_innova.jpg",
  "Angel Dev",
  "Desarrollador, Innovahtec"
);
const programacion = new Memories(
  2,
  "img/portfolio/programacion_leoncito.jpg",
  "Programación",
  "Fintech, Leoncito"
);
const exposiciones = new Memories(
  3,
  "img/portfolio/exposicion_ultimo_ciclo.jpg",
  "Exposiciones",
  "10 ciclo, Ingenieria del Software"
);
const edifComputo = new Memories(
  4,
  "img/portfolio/universidad_laboratorio.jpg",
  "Edificion De Computación",
  "10 ciclo, Epici"
);
const graduacion = new Memories(
  5,
  "img/portfolio/graduacion_angel_solo.jpg",
  "Mi Graduación",
  "Graduación, Plaza del Saber"
);
const equipLeoncito = new Memories(
  6,
  "img/portfolio/leoncito_ti.jpg",
  "Equipo TI",
  "Cena Navideña, Leoncito"
);
const grupGraduacion = new Memories(
  7,
  "img/portfolio/graduacion_plaza.jpg",
  "Graduación",
  "Graduación, Plaza del Saber"
);
const certC = new Memories(
  8,
  "img/portfolio/certificado_c.png",
  "Certificado C++",
  "Desarrollo, Backend, Ide Solution"
);
const certUnprg = new Memories(
  9,
  "img/portfolio/certificado_organizador.png",
  "Certificado Unprg",
  "Taller, Taller Diseño Centrado en Personas, Unprg"
);
const certDjango = new Memories(
  10,
  "img/portfolio/certificado_django.png",
  "Certificado Django Rest",
  "Desarrollo, Backend, Ide Solution"
);
const certVue = new Memories(
  11,
  "img/portfolio/certificado_vue.png",
  "Certificado Vue Js",
  "Desarrollo, FrontEnd, Ide Solution"
);
const certCeti = new Memories(
  12,
  "img/portfolio/certificado_ceti.png",
  "Certificado Angular, React",
  "Desarrollo, FrontEnd, Ceti"
);
const certAngular = new Memories(
  13,
  "img/portfolio/certificado_angular.png",
  "Certificado Angular",
  "Desarrollo, FrontEnd, Ide Solution"
);

const portfolio = [
  angelDev,
  programacion,
  exposiciones,
  edifComputo,
  graduacion,
  equipLeoncito,
  grupGraduacion,
  certC,
  certUnprg,
  certDjango,
  certVue,
  certCeti,
  certAngular,
];
