var userLang = navigator.language || navigator.userLanguage;
var url = window.location.href;

url = (userLang.indexOf('ru') === 0 ? '/ru/' : '/en/') + url.split('/').pop();

if(url=='index.html'){
    url = (userLang.indexOf('ru') === 0 ? '/ru/' : '/en/') + "home";
}
// else if (userLang.indexOf('ru') === 0) {
//   url = '/ru/' + url.split('/').pop();
// } else {
//   url = '/en/' + url.split('/').pop();
// }

window.location.href = url;
