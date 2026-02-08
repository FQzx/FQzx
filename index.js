//lenis 
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//Scroll To Fix
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

//Name
const photo = document.querySelector('.myphoto');
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

const flex = document.querySelector('.flex-photo');