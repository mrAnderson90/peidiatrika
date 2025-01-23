const mobileNavOpenBtn = document.getElementById('nav-open-btn');
const mobileNavCloseBtn = document.getElementById('nav-close-btn');
const mobileNavElement = document.getElementById('mobile-nav');

mobileNavOpenBtn.addEventListener('click', event => {
  event.preventDefault();
  openMobileNav();
});

mobileNavCloseBtn.addEventListener('click', event => {
  event.preventDefault();
  closeMobileNav();
});

mobileNavElement.addEventListener('click', event => {
  closeMobileNav();
});

function openMobileNav() {
  mobileNavElement.classList.add('active');
  mobileNavOpenBtn.classList.add('hidden');
  document.body.classList.add('no-scroll');
  mobileNavCloseBtn.classList.remove('hidden');
}

function closeMobileNav() {
  mobileNavElement.classList.remove('active');
  mobileNavCloseBtn.classList.add('hidden');
  document.body.classList.remove('no-scroll');
  mobileNavOpenBtn.classList.remove('hidden');
}