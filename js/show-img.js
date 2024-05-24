document.addEventListener("DOMContentLoaded", function () {
  const imgGals = document.querySelectorAll(".img-gal");

  imgGals.forEach(function (imgGal) {
    imgGal.addEventListener("click", function (event) {
      event.preventDefault();
      const imgSrc = this.getAttribute("href");

      const modalOverlay = document.createElement("div");
      modalOverlay.classList.add("modal-overlay");

      const modal = document.createElement("div");
      modal.classList.add("modal");
      const img = document.createElement("img");
      img.src = imgSrc;
      modal.appendChild(img);

      const closeModal = document.createElement("span");
      closeModal.classList.add("close-modal");
      closeModal.innerHTML = "&times;";
      modal.appendChild(closeModal);

      modalOverlay.appendChild(modal)
      document.body.appendChild(modalOverlay);

      closeModal.addEventListener("click", function () {
        // modal.remove();
        modalOverlay.remove();
      });
    });
  });
});
