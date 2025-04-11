const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('.fade-in');

// Add background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Animate sections when they come into view
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// Run initial animation check
window.dispatchEvent(new Event('scroll'));
