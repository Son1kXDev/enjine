var userLang = navigator.language || navigator.userLanguage;

if (userLang.indexOf('ru') === 0) {
  window.location.href = '/ru/home';
} else {
  window.location.href = '/en/home';
}
