const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
if(menuBtn && nav){
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
