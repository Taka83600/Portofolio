  imageModal.addEventListener('show.bs.modal', function (event) {
    const triggerImg = event.relatedTarget;
    const imageUrl = triggerImg.getAttribute('data-bs-image');
    const altText = triggerImg.getAttribute('alt') || 'Image agrandie';
    
    modalImg.src = imageUrl;
    modalImg.alt = altText;
  });