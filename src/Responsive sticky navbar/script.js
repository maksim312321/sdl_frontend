// eslint-disable-next-line func-names
window.onscroll = function () {
  // eslint-disable-next-line no-use-before-define
  scrollFunction();
};
function scrollFunction() {
  document.getElementById('navbar').style.background = '#fff';
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
