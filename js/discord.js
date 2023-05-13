var widget = document.querySelector('.discord-widget');
var openButton = document.getElementById("discord");
var closeButton = document.getElementById('discord-close-btn');

widget.querySelector('iframe').style.display = 'none';

openButton.addEventListener('click', function() {
  openButton.style.display = 'none';
  closeButton.style.display = 'block';
  widget.querySelector('iframe').style.display = 'block';
});

closeButton.addEventListener('click', function() {
  openButton.style.display = 'block';
  closeButton.style.display = 'none';
  widget.querySelector('iframe').style.display = 'none';
});

closeButton.style.display = 'none';


