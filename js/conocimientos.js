class Aptitudes {
  constructor(id, urlImg, title, description) {
    this.id = id;
    this.urlImg = urlImg;
    this.title = title;
    this.description = description;
  }
}

const trabajoEquipo = new Aptitudes(
  1,
  "img/servicios/Equipo.png",
  "Trabajo en Equipo",
  "Colaborador entusiasta y efectivo, demostrando habilidades sólidas para trabajar en equipo y contribuir al éxito colectivo."
);
const compromiso = new Aptitudes(
  2,
  "img/servicios/Compromiso.png",
  "Compromiso",
  "Comprometido con la excelencia y la consecución de objetivos, demuestro una dedicación inquebrantable en cada tarea y proyecto."
);
const liderazgo = new Aptitudes(
  3,
  "img/servicios/Liderazgo.png",
  "Liderazgo",
  "Líder proactivo con habilidades sólidas de toma de decisiones y motivación, orientado a inspirar y guiar equipos hacia el éxito."
);
const autoconfianza = new Aptitudes(
  4,
  "img/servicios/Confianza.png",
  "Autoconfianza",
  "Poseo una autoconfianza sólida que impulsa mi capacidad para enfrentar desafíos con determinación y lograr buenos resultados."
);

const aptitudes = [trabajoEquipo, compromiso, liderazgo, autoconfianza];
