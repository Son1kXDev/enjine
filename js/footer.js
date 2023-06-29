fetch('../footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('follow-us').innerHTML = html;
    var copyright = '© <img src="../images/developers/EnjineTextLogo.svg" alt="Enjine"> 2023';
    document.getElementById('copyright').innerHTML = copyright;
  });
