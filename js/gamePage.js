import games from './games.js';

const headerElement = document.getElementById('header');
const screenshotsElement = document.getElementById('game-screenshots');
const descriptionElement = document.getElementById('game-description');
const downloadElement = document.getElementById('game-download');

export function generateGamePageById(id, language){
    const game = games[id];

    var titleElement = document.createElement('h1');
    titleElement.classList.add('game-title');
    titleElement.innerHTML = game.engine + " " + game.title;

    var versionElement = document.createElement('h1');
    versionElement.classList.add('game-subtitle');
    versionElement.innerHTML = language == "ru" ? "Версия: " : "Version: ";
    versionElement.innerHTML += game.version;

    var releaseDateElement = document.createElement('h1');
    releaseDateElement.classList.add('game-release-date');
    releaseDateElement.innerHTML = '<i class="fa-solid fa-calendar-days"></i> ';

    if (new Date(game.releaseDate) <= new Date()) releaseDateElement.innerHTML += language == "ru" ? 'Дата выхода: ' : 'Release date: ';
    else releaseDateElement.innerHTML += language == "ru" ? 'Планируемая дата выхода: ' : 'Planned release date: ';
    releaseDateElement.innerHTML += game.releaseDate;
    
    var developersElement = document.createElement('h1');
    developersElement.classList.add('game-developers');
    developersElement.innerHTML = language == "ru" ? "Разработчик: " : "Developers: ";
    for (var i = 0; i < game.developers.length; i++) {
        var dev = document.createElement('a');
        dev.href = game.developers[i].link;
        var logo = document.createElement('img');
        logo.src = game.developers[i].logoSrc;
        dev.appendChild(logo);
        dev.innerHTML += " " + game.developers[i].name;
        developersElement.appendChild(dev);
        if(i+1 < game.developers.length) developersElement.innerHTML += ", ";
    }

    for (let i = 0; i < game.screenshots.length; i++) {
        var screenshot = document.createElement('img');
        screenshot.src = game.screenshots[i] || '';
        screenshotsElement.appendChild(screenshot);
    }
    var descriptionLabel = document.createElement('h2');
    descriptionLabel.innerHTML = language == "ru" ? "Описание" : "Description";
    var description = document.createElement('div');
    description.innerHTML = language == "ru" ? game.description.ru : game.description.en;
    
    for (let i = 0; i < game.downloadLink.length; i++) {
        var downloadLink = document.createElement('a');
        downloadLink.classList.add('game-buy-btn');
        downloadLink.href = game.downloadLink[i].link;
        downloadLink.innerHTML = language == "ru" ? "Скачать для " : "Download for ";
        downloadLink.innerHTML += game.downloadLink[i].platform;
        downloadElement.appendChild(downloadLink);
    }

    headerElement.appendChild(titleElement);
    headerElement.appendChild(versionElement);
    headerElement.appendChild(releaseDateElement);
    headerElement.appendChild(developersElement);
    descriptionElement.appendChild(descriptionLabel);
    descriptionElement.appendChild(description);
};

window.generateGamePageById = generateGamePageById;

