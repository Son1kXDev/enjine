fetch('../follow-us.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('follow-us').innerHTML = html;
    var copyright = '<i class="fa-regular fa-copyright"></i> 2023 <img src="../images/EnjineTextLogo.svg" alt="Enjine">. ';
    var copyrightEnd = window.location.href.includes('ru') ? 'Все права защищены.' : 'All rights reserved.';
    copyright += copyrightEnd;
    document.getElementById('copyright').innerHTML = copyright
  });
