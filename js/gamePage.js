import games from './games.js';

const headerElement = document.getElementById('header');
const screenshotsElement = document.getElementById('game-screenshots');
const descriptionElement = document.getElementById('game-description');
const downloadElement = document.getElementById('game-download');
const systemRequirementsElement = document.getElementById('game-system-req');
const updateInfoElement = document.getElementById('game-update-info');


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

    screenshotsElement.scrollTop = 0;

    var description = document.createElement('div');
    var descriptionFilePath = language == "ru" ? game.description.ru : game.description.en;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', descriptionFilePath, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            description.innerHTML = this.responseText;
        }
    }
    xhr.send();
    
    var systemRequirementsLabel = document.createElement('h2');
    systemRequirementsLabel.innerHTML = language == "ru" ? "Системные требования" : "System requirements"
    systemRequirementsElement.appendChild(systemRequirementsLabel);
    var systemRequirements = game.systemRequirements;
    var systemRequirementsTable = document.createElement('table');
    var systemRequirementsTableBody = document.createElement('tbody');
    var systemRequirementsTableLabels = language == "ru" ? 
    ["Операционная система:", "Процессор:", "ОЗУ:", "Свободное место на диске:", "Разрешения:"] :
    ["OS:", "Processor:", "RAM", "Free disk space:", "Permissions:"];
    let ind = 0;
    systemRequirements.forEach(rowData => {
        var row = document.createElement('tr');
        
        var label = document.createElement('td');
        label.textContent = systemRequirementsTableLabels[ind];
        row.appendChild(label);
        ind++;

        rowData.forEach(cellData => {
            var cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        systemRequirementsTableBody.appendChild(row);
    });
    systemRequirementsTable.appendChild(systemRequirementsTableBody);
    systemRequirementsElement.appendChild(systemRequirementsTable);

    var updateInfoLabel = document.createElement('h2');
    updateInfoLabel.innerText = language == "ru" ? "Информация об обновлении" : "Changelog";
    updateInfoElement.appendChild(updateInfoLabel);
    var updateInfoList = document.createElement('ul');
    updateInfoElement.appendChild(updateInfoList);
    var updateInfo = language == "ru" ? game.updateInfo.ru : game.updateInfo.en;
    updateInfo.forEach(info=> {
        var listItem = document.createElement('li');
        listItem.textContent = info;
        updateInfoList.appendChild(listItem);
    })

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
    descriptionElement.appendChild(description);
};

window.generateGamePageById = generateGamePageById;

