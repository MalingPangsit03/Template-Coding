/*=============== DOMContentLoaded ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link');

  const linkAction = () => {
    navMenu.classList.remove('show-menu');
  };

  navLink.forEach(n => n.addEventListener('click', linkAction));

  /*=============== ADD BLUR HEADER ===============*/
  const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50
      ? header.classList.add('blur-header')
      : header.classList.remove('blur-header');
  };
  window.addEventListener('scroll', blurHeader);

  /*=============== EMAIL JS ===============*/
  emailjs.init('h8D1AFkWIqhUEsbIm');

  const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_25t92em', 'template_ijnf63p', '#contact-form', 'h8D1AFkWIqhUEsbIm')
      .then(() => {
        contactMessage.textContent = 'Message Sent successfully';
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
        contactForm.reset();
      }, () => {
        contactMessage.textContent = 'Message not sent (Service error)';
      });
  };

  contactForm.addEventListener('submit', sendEmail);

  /*=============== SHOW SCROLL UP ===============*/ 
  const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 200
      ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll');
  };
  window.addEventListener('scroll', scrollUp);

  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      if (sectionLink) {
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          sectionLink.classList.add('active-link');
        } else {
          sectionLink.classList.remove('active-link');
        }
      }
    });
  };
  window.addEventListener('scroll', scrollActive);

  /*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  sr.reveal('.home__data, .experience, .skills, .contact__container');
  sr.reveal('.home__img', { delay: 600 });
  sr.reveal('.home__scroll', { delay: 800 });
  sr.reveal('.work__card, .services__card', { interval: 100 });
  sr.reveal('.about__content', { origin: 'right' });
  sr.reveal('.about__img', { origin: 'left' });

