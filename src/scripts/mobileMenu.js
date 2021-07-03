const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu');

hamburger.addEventListener('click', e => {
  e.preventDefault();

  toggleMenu();
});

document.addEventListener('click', e => {
  if (mobileMenu.classList.contains('active') && !e.target.closest('#hamburger') && e.target.closest('a')) {
    toggleMenu();
  }
})

const toggleMenu = () => {
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('body-active-menu');
};