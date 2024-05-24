class Company {
  constructor(id, urlImg, name) {
    this.id = id;
    this.urlImg = urlImg;
    this.name = name;
  }
}

const companyLeoncito = new Company(
  1,
  "img/empresas/Grupo_Leoncito.jpg",
  "Grupo Leoncito"
);
const companyIdeSolution = new Company(
  2,
  "img/empresas/IdeSolution.png",
  "Ide Solution"
);
const companyInnovahtec = new Company(
  3,
  "img/empresas/Innovahtec.png",
  "Innovahtec"
);

const companies = [companyLeoncito, companyIdeSolution, companyInnovahtec];
