document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll("#filterList li");

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      const selectedFilter = this.getAttribute("data-filter");
      const gridItems = document.querySelectorAll(".row-portfolio-grid");
      const columns = document.querySelectorAll(".portfolio-grid > div");
      const portfolioGrid = document.querySelector(".portfolio-grid")
      const portfolioGridCertificados = document.querySelector(".portfolio-grid-certificados")
      if (selectedFilter === "certificados") {
        if(!portfolioGrid.classList.contains("hidden")) portfolioGrid.classList.add("hidden");
        portfolioGridCertificados.classList.remove("hidden");
      } else {
        if(!portfolioGridCertificados.classList.contains("hidden")) portfolioGridCertificados.classList.add("hidden");
        portfolioGrid.classList.remove("hidden");

        gridItems.forEach((item) => {
          if (selectedFilter === "*" || item.classList.contains(selectedFilter)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
  
        columns.forEach((column) => {
          const columnItems = column.querySelectorAll(".row-portfolio-grid");
          let todosOcultos = true;
  
          columnItems.forEach((item) => {
            if (!item.classList.contains("hidden")) {
              todosOcultos = false;
            }
          });
  
          if (todosOcultos) {
            column.classList.add("hidden");
          } else {
            column.classList.remove("hidden");
          }
        });
      }


      filters.forEach((f) => {
        f.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});