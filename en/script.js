import games from '../js/games.js';

function generateGamesList() {
  const gamesList = document.getElementById('games-list');
  gamesList.innerHTML = '';

  games.forEach(game => {
    const li = document.createElement('li');

    if(game.link.en != ''){
      const gameLink = document.createElement('a');
      gameLink.href = game.link.en;
      li.addEventListener('click', () => {
        gameLink.click();
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
    statusEl.innerHTML = game.status.en;
    titleContainer.appendChild(statusEl);

	  const releaseDateEl = document.createElement('p');
	  releaseDateEl.classList.add('release-date');
	  if (new Date(game.releaseDate) <= new Date()) {
		  releaseDateEl.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Release date: ${game.releaseDate}`;
	  } else {
		  releaseDateEl.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Planned release date: ${game.releaseDate}`;
	  }
	  li.appendChild(releaseDateEl);
	  
    if(game.info.en) {
      const infoEl = document.createElement('info');
      infoEl.classList.add('verison');
      infoEl.innerText = `${game.info.en}`;
      li.appendChild(infoEl);
      }

    gamesList.appendChild(li);
  });
}

generateGamesList();