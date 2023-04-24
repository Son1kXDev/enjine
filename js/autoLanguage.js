// Получаем язык браузера пользователя
var userLang = navigator.language || navigator.userLanguage;

// Определяем, что делать в зависимости от языка пользователя
if (userLang.indexOf('ru') === 0) {
  // Пользователь использует русский язык
  window.location.href = '/ru/home';
} else {
  // Пользователь использует любой другой язык
  window.location.href = '/en/home';
}
