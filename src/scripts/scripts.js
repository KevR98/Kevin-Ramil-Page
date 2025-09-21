// Evidenzia la sezione attiva nella navbar mentre scorri
document.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav a');
  let scrollPos = window.scrollY || document.documentElement.scrollTop;

  sections.forEach((section, idx) => {
    const offsetTop = section.offsetTop - 80;
    const offsetBottom = offsetTop + section.offsetHeight;
    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
      navLinks.forEach((link) => link.classList.remove('active'));
      if (navLinks[idx]) navLinks[idx].classList.add('active');
    }
  });
});

// Bottone "Torna su" che appare dopo un po' di scroll
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('main section').forEach((section) => {
  section.classList.add('fade-init');
  observer.observe(section);
});

document.getElementById('year').textContent = new Date().getFullYear();
