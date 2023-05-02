//scroll animation
const components = document.querySelectorAll('.component');
const steps=document.querySelectorAll('.step');
const triggerButton = window.innerHeight;

window.addEventListener('scroll', componentUp);

function componentUp() {
  components.forEach(component => {
    const componentTop = component.getBoundingClientRect().top;
    if (componentTop < triggerButton) {
      component.classList.add('up');
    } else {
      component.classList.remove('up');
    }
  });

  steps.forEach(step => {
    const stepTop = step.getBoundingClientRect().top;
    if (stepTop < triggerButton) {
      step.classList.add('show');
    } else {
      step.classList.remove('show');
    }
  });
}

//scroll up button
const scrollUpB=document.querySelector('.scroll-up-btn');
scrollUpB.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

);
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollUpB.classList.add('showUp');
  } else {
    scrollUpB.classList.remove('showUp');
  }
});

//menu button
const menuBtn=document.querySelector('.navbar-toggler');
const menuBtnTop=document.querySelector('.menu-btn-top');
const menuBtnMid=document.querySelector('.menu-btn-mid');
const menuBtnBottom=document.querySelector('.menu-btn-bottom');

menuBtn.addEventListener('click',()=>{
  menuBtnTop.classList.toggle('rotate');
  menuBtnBottom.classList.toggle('rotate');
  menuBtnMid.classList.toggle('rotate');
});

//copyright current year
document.addEventListener('DOMContentLoaded', function() {
  var date = new Date();
  var year = date.getFullYear();
  document.getElementById('current-year').innerHTML = year;
});