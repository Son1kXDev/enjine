import games from './games.js';

var url = window.location.href;
const language = url.includes('ru') ? 'ru' : 'en';
const RU = language == "ru";

function generateGamesList() {
  const gamesList = document.getElementById('games-list');
  gamesList.innerHTML = '';

  games.forEach(game => {
    const li = document.createElement('li');

    if(game.link != '') {
    const gameLink = document.createElement('a');
    var link = game.link.replace('../', '../' + language + '/');
    gameLink.href = link;
    li.addEventListener('click', () => {
      gameLink.click();
    });
    li.classList.add('downloadable');
    } 

    const imgEl = document.createElement('img');
    imgEl.src = game.preview || '';
    imgEl.alt = game.title;
    li.appendChild(imgEl);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    li.appendChild(titleContainer);

    const titleEl = document.createElement('h3');
    titleEl.innerHTML = game.engine + ' ' + game.title;
    titleContainer.appendChild(titleEl);

    const statusEl = document.createElement('span');
    statusEl.classList.add('status');
    statusEl.innerHTML = RU ? game.status.ru : game.status.en;
    titleContainer.appendChild(statusEl);

	  const releaseDateEl = document.createElement('p');
	  releaseDateEl.classList.add('release-date');
    var calendarLogo = '<i class="fa-solid fa-calendar-days"></i> ';
    releaseDateEl.innerHTML = calendarLogo + (new Date(game.releaseDate) <= new Date() ? 
    RU ? 'Дата выхода: ' : 'Release date: ' : RU ? 'Планируемая дата выхода: ' : 'Planned release date: ') + game.releaseDate;
	  li.appendChild(releaseDateEl);
    gamesList.appendChild(li);
  });
}

generateGamesList();

