function changeLanguage(lang) {
    var url = window.location.href;
    if(url.includes('ru')){
      url = url.replace('/ru/', '/' + lang + '/');
    } else if(url.includes('en')){
      url = url.replace('/en/', '/' + lang + '/');
    } else {
      url = '/' + lang + '/' + url.split('/').pop();
    }
    window.location.href = url;
}

window.changeLanguage = changeLanguage;