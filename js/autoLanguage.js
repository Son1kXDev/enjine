var userLang = navigator.language || navigator.userLanguage;
var url = window.location.href;

url = (userLang.indexOf('ru') === 0 ? '/ru/' : '/en/') + url.split('/').pop();

if (url == ('http://localhost:8080/' || 'https://enjine.online/'))
    url = (userLang.indexOf('ru') === 0 ? '/ru/' : '/en/') + "home";

// window.location.replace(url);
