const mobileNavBtn = document.getElementById('mobile-nav-btn');
const header = document.querySelector('.header');
const mobileNavElement = document.getElementById('mobile-nav');

mobileNavBtn.addEventListener('click', event => {
  event.preventDefault();
  
  mobileNavBtn.classList.contains('active') ? closeMobileNav() : openMobileNav();
});

mobileNavElement.addEventListener('click', event => {
  closeMobileNav();
});

function openMobileNav() {
  mobileNavElement.classList.add('active');
  mobileNavBtn.classList.add('active');
  header.classList.add('fixed');
  document.body.classList.add('no-scroll');
}

function closeMobileNav() {
  mobileNavElement.classList.remove('active');
  mobileNavBtn.classList.remove('active');
  header.classList.remove('fixed');
  document.body.classList.remove('no-scroll');
}