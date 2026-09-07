const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');

toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
