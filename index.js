//lenis 
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

//Load Page
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');

  loader.style.opacity = '0';

  loader.addEventListener('transitionend', function () {
    loader.remove();
  });
});

loader.innerHTML = '<h1 class=loadingtext>LOADING</h1>';
loader.style.display = 'flex';
loader.style.flexDirection = 'column';
loader.style.order = '2';

requestAnimationFrame(raf)

//Scroll To Fix
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

//Navbar
const navbar = document.querySelector('.nav-menu');
const linkmenu = document.querySelector('.header-menu');
const listmenu = document.querySelectorAll('.header-menu a');

navbar.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
  navbar.style.color = 'grey';

});

navbar.addEventListener('mouseleave', () => {
  navbar.style.color = 'rgba(255, 244, 228, 1)';
});

let timeoutId;

navbar.addEventListener('click', () => {
  linkmenu.classList.toggle('active');
});

linkmenu.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
});

linkmenu.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    linkmenu.classList.remove('active');
  }, 500);
});

listmenu.forEach(link => {
  link.addEventListener('click', () => {
    clearTimeout(timeoutId);
    linkmenu.classList.remove('active');
  });
});

//Name
const photo = document.querySelector('.about-photo');
const faiz = document.querySelector('.faiz');

faiz.innerHTML = '<h3>Faiz Wahyu Setiawan</h3>';

photo.addEventListener('click', () => {
  faiz.classList.add('active');
});

photo.addEventListener('mouseenter', () => {
  faiz.classList.add('active');
});

photo.addEventListener('mouseleave', () => {
  faiz.classList.remove('active');
});

//H3
const viewbutton = document.querySelector('#view-button');

viewbutton.innerHTML = '<h3>View All Projects</h3>';