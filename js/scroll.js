document.addEventListener("DOMContentLoaded", function () {
  const animContainer = document.getElementById("animContainer");
  animContainer.classList.add("animate__animated", "animate__backInRight");

  const links = document.querySelectorAll(".scroll-link");

  let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  let isScrollingDown;

  links.forEach((link) => {
    link.addEventListener("click", scrollHandler);
  });

  function scrollHandler(e) {
    e.preventDefault();
    if (!(window.innerWidth <= 1023.98)) {
      if (e.srcElement.id == "btnInicio") {
        animContainer.style.display = "block";
        setTimeout(function () {
          animContainer.classList.remove("animate__backOutRight");
          animContainer.classList.add("animate__backInRight");
        }, 150);
      } else {
        animContainer.classList.remove("animate__backInRight");
        animContainer.classList.add("animate__backOutRight");
        setTimeout(function () {
          animContainer.style.display = "none";
        }, 500);
      }
    } else if (
      window.innerWidth >= 768 &&
      animContainer.style.display == "none"
    ) {
      animContainer.classList.remove("animate__backOutRight");
      animContainer.classList.remove("animate__backInRight");
      animContainer.style.display = "block";
    }

    const targetId = this.getAttribute("href").substring(1);
    // console.log(targetId);

    const targetSection = document.getElementById(targetId);

    targetSection.style.display = "block";

    // console.log(targetSection.offsetTop);
    // console.log(targetSection.id);

    if (window.innerWidth < 767.8 && targetSection.id === "conoceme") {
      window.scrollTo({
        top: targetSection.offsetTop + 300,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: targetSection.offsetTop - 110,
        behavior: "smooth",
      });
    }
  }

  window.addEventListener("scroll", function () {
    checkSectionPosition();
  });

  function checkSectionPosition() {
    // if (!banderaClick) {
    const posy = document.getElementById("txt-ref");

    const finEjeY = posy.offsetTop + posy.offsetHeight;
    const scrollYPosition = window.scrollY || window.pageYOffset;

    // console.log('Posición en el eje Y:', anim.offsetTop);

    const newScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;

    if (newScrollPos > scrollPos) {
      isScrollingDown = "down";
    } else if (newScrollPos < scrollPos) {
      isScrollingDown = "up";
    }
    scrollPos = newScrollPos;

    if (finEjeY / 2 < scrollYPosition && isScrollingDown == "down") {
      if (!(window.innerWidth <= 1023.98)) {
        animContainer.classList.remove("animate__backInRight");
        animContainer.classList.add("animate__backOutRight");
        setTimeout(function () {
          animContainer.style.display = "none";
        }, 200);
      } else if (
        window.innerWidth >= 768 &&
        animContainer.style.display == "none"
      ) {
        animContainer.classList.remove("animate__backOutRight");
        animContainer.classList.remove("animate__backInRight");
        animContainer.style.display = "block";
      }
    } else if (finEjeY / 2 > scrollYPosition && isScrollingDown == "up") {
      if (!(window.innerWidth <= 1023.98)) {
        setTimeout(function () {
          animContainer.style.display = "block";
        }, 300);
        animContainer.classList.remove("animate__backOutRight");
        animContainer.classList.add("animate__backInRight");
      } else if (
        window.innerWidth >= 768 &&
        animContainer.style.display == "none"
      ) {
        animContainer.classList.remove("animate__backOutRight");
        animContainer.classList.remove("animate__backInRight");
        animContainer.style.display = "block";
      }
    }
    // }
  }
});
