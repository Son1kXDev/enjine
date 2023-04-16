function changeLanguage(lang) {
    var url = window.location.href;
    if (url.indexOf('/en/') !== -1) {
      url = url.replace('/en/', '/' + lang + '/');
    } else if (url.indexOf('/ru/') !== -1) {
      url = url.replace('/ru/', '/' + lang + '/');
    } else {
      url = '/' + lang + '/' + url.split('/').pop();
    }
    window.location.href = url;
  }