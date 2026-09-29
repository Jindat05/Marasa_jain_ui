const revealItems = document.querySelectorAll('.reveal');
const toast = document.querySelector('.toast');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2600);
  });
});
