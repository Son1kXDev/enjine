fetch('../footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('follow-us').innerHTML = html;
    var copyright = '<i class="fa-regular fa-copyright"></i> 2023 <img src="../images/developers/EnjineTextLogo.svg" alt="Enjine">. ';
    var copyrightEnd = window.location.href.includes('ru') ? 'Все права защищены.' : 'All rights reserved.';
    copyright += copyrightEnd;
    document.getElementById('copyright').innerHTML = copyright;
  })
  .then(() => {
    var widget = document.querySelector('.discord-widget');
    var openButton = document.getElementById("discord");
    var closeButton = document.getElementById('discord-close-btn');

    widget.querySelector('iframe').style.display = 'none';

    openButton.addEventListener('click', function () {
      openButton.style.display = 'none';
      closeButton.style.display = 'block';
      widget.querySelector('iframe').style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
      openButton.style.display = 'block';
      closeButton.style.display = 'none';
      widget.querySelector('iframe').style.display = 'none';
    });

    closeButton.style.display = 'none';
  });
