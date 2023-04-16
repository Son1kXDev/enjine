const games = [
  {
    title: 'Offroaded',
    engine: '<i class="fa-brands fa-unity"></i>',
    releaseDate: '<i class="fa-solid fa-infinity"></i>',
    status: 'in development',
    version: '',
    image: '../images/preview/offroaded-preview.png',
    link: ''
  },  
  {
    title: '5opka Game',
    engine: '<i class="fa-brands fa-unity"></i>',
    releaseDate: '<i class="fa-solid fa-infinity"></i>',
    status: 'in development',
    version:'',
    image: '../images/preview/5opka-preview.jpg',
    link: ''
  }
];

function generateGamesList() {
  const gamesList = document.getElementById('games-list');
  gamesList.innerHTML = '';

  games.forEach(game => {
    const li = document.createElement('li');

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
    statusEl.innerHTML = game.status;
    titleContainer.appendChild(statusEl);

	  const releaseDateEl = document.createElement('p');
	  releaseDateEl.classList.add('release-date');
	  if (new Date(game.releaseDate) > new Date()) {
		  releaseDateEl.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Planned release date: ${game.releaseDate}`;
	  } else {
		  releaseDateEl.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Release date: ${game.releaseDate}`;
	  }
	  li.appendChild(releaseDateEl);

    const downloadLink = document.createElement('button');
    downloadLink.innerHTML = '<i class="fa-solid fa-download"></i> Download';
    downloadLink.classList.add('download-btn');
    if (game.link === '') {
      downloadLink.innerHTML = '<i class="fa-solid fa-clock"></i> Coming soon';
      downloadLink.disabled = true;
    } else {
      downloadLink.addEventListener('click', () => {
        window.location.href = game.link;
      });
    }
    li.appendChild(downloadLink);
    
	  
    if(game.version) {
      const versionEl = document.createElement('v');
      versionEl.classList.add('version');
      versionEl.innerText = `${game.version}`;
      li.appendChild(versionEl);
      }

    gamesList.appendChild(li);
  });
}

// Call the generateGamesList function on page load to populate the list of games
generateGamesList();
