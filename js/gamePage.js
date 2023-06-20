import games from './games.js';

const headerElement = document.getElementById('header');
const screenshotsElement = document.getElementById('game-screenshots');
const descriptionElement = document.getElementById('game-description');
const downloadElement = document.getElementById('game-download');
const systemRequirementsElement = document.getElementById('game-system-req');
const changelogElement = document.getElementById('game-update-info');

var url = window.location.href;
const language = url.includes('ru') ? 'ru' : 'en';
const RU = language == "ru";

export function generateGamePageById(id){
    const game = games[id];

    const gameFolder = "../games/" + game.name + "/";

    var titleElement = document.createElement('h1');
    titleElement.classList.add('game-title');
    titleElement.innerHTML = game.engine + " " + game.title;

    
    var versionElement = document.createElement('h1');
    versionElement.classList.add('game-subtitle');
    if(game.version != '') {
        versionElement.innerHTML = RU ? "Версия: " : "Version: ";
        versionElement.innerHTML += game.version;
    }

    var releaseDateElement = document.createElement('h1');
    releaseDateElement.classList.add('game-release-date');
    releaseDateElement.innerHTML = '<i class="fa-solid fa-calendar-days"></i> ';

    var releaseDateParts = game.releaseDate.split('.');
    var day = parseInt(releaseDateParts[0], 10);
    var month = parseInt(releaseDateParts[1], 10) - 1;
    var year = parseInt(releaseDateParts[2], 10);
    var releaseDate = new Date(year, month, day);
    if (releaseDate <= new Date()) releaseDateElement.innerHTML += RU ? 'Дата выхода: ' : 'Release date: ';
    else releaseDateElement.innerHTML += RU ? 'Планируемая дата выхода: ' : 'Planned release date: ';
    releaseDateElement.innerHTML += game.releaseDate;
    
    var developersElement = document.createElement('h1');
    developersElement.classList.add('game-developers');
    developersElement.innerHTML = RU ? "Разработчик: " : "Developers: ";
    for (var i = 0; i < game.developers.length; i++) {
        var dev = document.createElement('a');
        dev.href = game.developers[i].link;
        var logo = document.createElement('img');
        logo.src = game.developers[i].logo;
        dev.appendChild(logo);
        dev.innerHTML += " " + game.developers[i].name;
        developersElement.appendChild(dev);
        if(i+1 < game.developers.length) developersElement.innerHTML += ", ";
    }

    var banner = document.createElement('img');
    banner.src = gameFolder + "images/" + "banner.jpg";
    screenshotsElement.appendChild(banner);

    for(let i = 1; i <= game.screenshotsCount; i++) {
        var screenshotPath = gameFolder + "images/screenshot_" + (RU ? "ru_" : "en_") + i + ".jpg";
        var screenshot = document.createElement('img');
        screenshot.src = screenshotPath;
        screenshotsElement.appendChild(screenshot);
    }

    screenshotsElement.scrollTop = 0;

    var description = document.createElement('div');
    var descriptionFilePath = gameFolder + "description/" + (RU ? "ru.txt" : "en.txt");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', descriptionFilePath, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            description.innerHTML = this.responseText;
        }
    }
    xhr.send();
    
    var systemRequirementsLabel = document.createElement('h2');
    systemRequirementsLabel.innerHTML = RU ? "Системные требования" : "System requirements"
    systemRequirementsElement.appendChild(systemRequirementsLabel);
    var request = new XMLHttpRequest();
    request.open("GET", `${gameFolder}systemRequirements.json`, false);
    request.send(null)
    var systemRequirements = JSON.parse(request.responseText);
    var systemRequirementsTable = document.createElement('table');
    var systemRequirementsTableBody = document.createElement('tbody');
    var systemRequirementsTableLabels = RU ? 
    ["Операционная система:", "Процессор:", "Видеокарта:", "ОЗУ:", "Свободное место на диске:", "Дополнительно:"] :
    ["OS:", "Processor:", "Graphics card", "RAM", "Free disk space:", "Other:"];
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

    var changelogFilePath = gameFolder + "/changelog/" + (RU ? "ru.txt" : "en.txt");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', changelogFilePath, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var changelogLabel = document.createElement('h2');
            changelogLabel.innerText = RU ? "Информация об обновлении" : "Changelog";
            changelogElement.appendChild(changelogLabel);
            var changelogList = document.createElement('ul');
            changelogElement.appendChild(changelogList);
            var changelog = this.responseText.split('\n');
            changelog.forEach(info=> {
                var listItem = document.createElement('li');
                listItem.textContent = info;
                changelogList.appendChild(listItem);
            })
        } else {
            console.log('changelog file not found');
        }
    }
    xhr.send();

    for (let i = 0; i < game.downloadLink.length; i++) {
        var downloadLink = document.createElement('a');
        downloadLink.classList.add('game-buy-btn');
        downloadLink.href = game.downloadLink[i].link;
        downloadLink.innerHTML = RU ? "Скачать для " : "Download for ";
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

