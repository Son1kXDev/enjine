import games from '../js/games.js';

function openGamePopup(game) {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.classList.add('close-btn');
  closeBtn.addEventListener('click', function() {
    var currentUrl = window.location.href;
    var gameTitle = '#' + game.title;
    var newUrl = currentUrl.replace(gameTitle, '');
    window.history.replaceState({}, document.title, newUrl);
    document.body.classList.remove('popup-open');
    popupContent.classList.add('popup-content-close');
    setTimeout(function() {
      popupContainer.remove();
    }, 500);
  });

  const titleEl = document.createElement('h1');
  titleEl.innerHTML = game.engine + ' ' + game.title;

  const descriptionEl = document.createElement('p');
  descriptionEl.classList.add('description');
  descriptionEl.innerHTML = game.description.ru;

  const descriptionLowerEl = document.createElement('div');
  descriptionLowerEl.classList.add('descriptionLow');
  descriptionLowerEl.innerHTML = game.descriptionLow.ru;

  const screenshotsEl = document.createElement('div');
  screenshotsEl.classList.add('screenshots');

  game.screenshots.forEach(screenshot => {
    const screenshotEl = document.createElement('img');
    screenshotEl.src = screenshot;
    screenshotEl.alt = 'Screenshot';
    screenshotsEl.appendChild(screenshotEl);
  });

  const versionEl = document.createElement('p');
  versionEl.classList.add('version');
  versionEl.innerText = `Версия: ${game.version}`;

  const downloadBtn = document.createElement('button');
  downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i> Скачать';
  downloadBtn.classList.add('download-btn');
  if (game.link === '') {
    downloadBtn.innerHTML = '<i class="fa-solid fa-clock"></i> Скоро';
    downloadBtn.disabled = true;
  } else {
    downloadBtn.addEventListener('click', () => {
      window.location.href = game.link;
    });
  }

  popupContent.appendChild(closeBtn);
  popupContent.appendChild(titleEl);
  popupContent.appendChild(descriptionEl);
  popupContent.appendChild(descriptionLowerEl);
  popupContent.appendChild(screenshotsEl);
  popupContent.appendChild(versionEl);
  popupContent.appendChild(downloadBtn);
  popupContainer.appendChild(popupContent);
  document.body.appendChild(popupContainer);
  document.body.classList.add('popup-open');
}

function generateGamesList() {
  const gamesList = document.getElementById('games-list');
  gamesList.innerHTML = '';

  games.forEach(game => {
    const li = document.createElement('li');

    if(game.usePopup){
    const popupLink = document.createElement('a');
    popupLink.href = '#' + game.title;
    popupLink.addEventListener('click', () => {
      openGamePopup(game);
    });
    li.addEventListener('click', () => {
      popupLink.click();
    });
    } 
    const imgEl = document.createElement('img');
    imgEl.src = game.image || '';
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
    statusEl.innerHTML = game.status.ru;
    titleContainer.appendChild(statusEl);

	  const releaseDateEl = document.createElement('p');
	  releaseDateEl.classList.add('release-date');
	  if (new Date(game.releaseDate) > new Date()) {
		  releaseDateEl.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Планируемая дата выхода: ${game.releaseDate}`;
	  } else {
		  releaseDateEl.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Дата выхода: ${game.releaseDate}`;
	  }
	  li.appendChild(releaseDateEl);
	  
    if(game.version) {
      const versionEl = document.createElement('v');
      versionEl.classList.add('version');
      versionEl.innerText = `${game.version}`;
      li.appendChild(versionEl);
      }

    gamesList.appendChild(li);

    if (window.location.hash === '#' + game.title) {
      openGamePopup(game);
    }    
  });
}

// Call the generateGamesList function on page load to populate the list of games
generateGamesList();
