const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const moreButton = document.querySelector('.nav-more');
const moreMenu = document.querySelector('.more-menu');

menuToggle?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

moreButton?.addEventListener('click', () => {
  const open = moreMenu.classList.toggle('open');
  moreButton.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', e => {
  if (!moreButton?.contains(e.target) && !moreMenu?.contains(e.target)) {
    moreMenu?.classList.remove('open');
    moreButton?.setAttribute('aria-expanded', 'false');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('#enquiry-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const button = e.currentTarget.querySelector('button');
  button.textContent = 'Enquiry Ready to Send';
  button.disabled = true;
  setTimeout(() => {
    alert('Thank you. This demo form is not connected to email yet. I can connect it to your preferred form service next.');
    button.textContent = 'Send Property Enquiry';
    button.disabled = false;
  }, 300);
});


document.querySelectorAll('.service-header').forEach(button => {
  button.addEventListener('click', () => {
    const current = button.parentElement;

    document.querySelectorAll('.service-detail').forEach(service => {
      if (service !== current) {
        service.classList.remove('active');
      }
    });

    current.classList.toggle('active');
  });
});