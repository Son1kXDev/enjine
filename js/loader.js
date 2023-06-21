fetch('../loader.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('loader-container').innerHTML = html;
    window.addEventListener('load', function () {
      var loader = document.getElementById('loader');
      setTimeout(function () {
        loader.classList.add('hidden');
        document.querySelector('main').style.display = 'block';
      }, 250);
    });
  });
