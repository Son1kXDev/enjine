const games = [
  {
    title: 'Offroaded',
    releaseDate: 'Coming soon',
    status: 'in development',
    image: 'images/preview/offroaded-preview.png',
    link: ''
  },  
  {
    title: '5opka Game',
    releaseDate: 'Coming soon',
    status: 'in development',
    image: 'images/preview/5opka-preview.jpg',
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
    titleEl.innerText = game.title;
    titleContainer.appendChild(titleEl);

    const statusEl = document.createElement('span');
    statusEl.classList.add('status');
    statusEl.innerText = game.status;
    titleContainer.appendChild(statusEl);

	const releaseDateEl = document.createElement('p');
	releaseDateEl.classList.add('release-date');
	if (new Date(game.releaseDate) > new Date()) {
		releaseDateEl.innerText = `Planned release date: ${game.releaseDate}`;
	} else {
		releaseDateEl.innerText = `Release date: ${game.releaseDate}`;
	}
	li.appendChild(releaseDateEl);

    const downloadLink = document.createElement('a');
	downloadLink.href = game.link;
	downloadLink.innerText = game.link!=='' ? 'Download' : 'Coming soon' ;
    downloadLink.classList.add('download-btn');
    li.appendChild(downloadLink);
	  
    gamesList.appendChild(li);
  });
}

// Call the generateGamesList function on page load to populate the list of games
generateGamesList();
