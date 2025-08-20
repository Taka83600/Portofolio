// script for smooth scrolling
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add("sticky-navbar");
    } else {
      navbar.classList.remove("sticky-navbar");
    }
  });
// script for active page link
  const currentPage = document.body.dataset.page;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active-page');
    }
  });

  // script for image modal
  // This script handles the image modal functionality
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  imageModal.addEventListener('show.bs.modal', function (event) {
    const triggerImg = event.relatedTarget;
    const imageUrl = triggerImg.getAttribute('data-bs-image');
    const altText = triggerImg.getAttribute('alt') || 'Image agrandie';
    
    modalImg.src = imageUrl;
    modalImg.alt = altText;
  });

//script cookie page index.html
  // Cookie consent script
  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("acceptCookies");
    const refuseBtn = document.getElementById("refuseCookies");

    const choice = localStorage.getItem("cookieConsent");

    if (!choice) {
      banner.classList.remove("d-none");
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted");
      banner.classList.add("d-none");
    });

    refuseBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "refused");
      banner.classList.add("d-none");
    });
  });