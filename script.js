// Toggle small "About Me" Popover Box on Avatar click
function toggleAboutPopover() {
  const popover = document.getElementById('about-popover');
  popover.classList.toggle('active');
}

// Open Full-Page Modals (Projects list, Spotify page, Movie page)
function openFullModal(modalId) {
  closeAllModals();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0; // Reset scroll position to top
  }
}

// Close Full-Page Modal
function closeFullModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close all Modals and Popovers
function closeAllModals() {
  const modals = document.querySelectorAll('.full-page-modal');
  modals.forEach(modal => modal.classList.remove('active'));
  
  const popover = document.getElementById('about-popover');
  if (popover) popover.classList.remove('active');
  
  document.body.style.overflow = 'auto';
}

// Close popover when clicking outside avatar
window.addEventListener('click', function(e) {
  const popover = document.getElementById('about-popover');
  const avatarWrapper = document.querySelector('.avatar-wrapper');
  
  if (popover && popover.classList.contains('active')) {
    if (!avatarWrapper.contains(e.target)) {
      popover.classList.remove('active');
    }
  }
});

function moveCarousel(carouselId, direction) {
  const container = document.getElementById(carouselId);
  if (!container) return;

  const slides = container.querySelectorAll('.carousel-slide');
  let currentIndex = -1;

  slides.forEach((slide, index) => {
    if (slide.classList.contains('active')) {
      currentIndex = index;
    }
  });

  if (currentIndex !== -1) {
    slides[currentIndex].classList.remove('active');
    let newIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[newIndex].classList.add('active');
  }
}