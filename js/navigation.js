const language = window.location.href.includes('ru') ? 'ru' : 'en';
const RU = language === 'ru';
const navigationFileURL = RU ? '../ru/navigation.html' : '../en/navigation.html';

fetch(navigationFileURL)
  .then(response => response.text())
  .then(html => {
    document.getElementById('navigation').innerHTML = html;

    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.add('active-page');
        link.href = '#';
      }
    });
  });

