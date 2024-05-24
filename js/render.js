createCard = (obj, tipo) => {
  let template;
  if (tipo === "companies") {
    template = `
      <div class="col-lg-4 col-md-4 col-sm-4 box-flex grid--effect-deneb">
          <a class="grid__item grid__item--c1 single-brand-item">
              <div class="stack box-flex-vertical">
                  <div class="stack__figure">
                      <img class="stack__img" src="${obj.urlImg}" alt="Image"/>
                  </div>
              </div>
              <div class="grid__item-caption box-flex-vertical">
                  <p>${obj.name}</p>
              </div>
          </a>
      </div>
    `;
  } else {
    template = `
      <div class="col-lg-3 col-md-6 box-flex ${obj.esTec == 0 ? '' : 'tec'}">
        <div class="feature_item">
          <div class="ch-info">
            <div class="ch-info-front"><img src="${obj.urlImg}" alt=""><h4>${obj.title}</h4></div>
            <div class="ch-info-back">
              <p>
                ${obj.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  return template;
};

function printCards(array, idSelector) {
  let template = "";
  for (const element of array) {
    template = template + createCard(element, idSelector);
  }
  const selector = document.getElementById(idSelector);
  selector.innerHTML = template;
}

printCards(companies, "companies");
printCards(aptitudes, "box-aptitudes");
printCards(conocimientos, "box-conocimientos");
printCards(puedoTrabajar, "box-puedo-trabajar");
