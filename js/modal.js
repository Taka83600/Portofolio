// modal.js
document.addEventListener("DOMContentLoaded", () => {
  const modalEl = document.getElementById("imageModal");
  const container = document.getElementById("modalImageContainer");
  const triggers = document.querySelectorAll("[data-bs-image]");

  // Garde-fous
  if (!modalEl || !container || triggers.length === 0) return;
  if (typeof bootstrap === "undefined" || !bootstrap.Modal) {
    console.warn("Bootstrap JS n'est pas chargé (bootstrap.Modal indisponible).");
    return;
  }

  const openModal = () => new bootstrap.Modal(modalEl).show();

  triggers.forEach((img) => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("data-bs-image");
      const alt = img.getAttribute("alt") || "Image agrandie";

      // Nettoie le conteneur et (ré)injecte l’image
      container.innerHTML = "";
      const el = document.createElement("img");
      el.className = "img-fluid w-100 rounded";
      el.src = src;
      el.alt = alt;
      container.appendChild(el);

      openModal();
    });
  });
});

