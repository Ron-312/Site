'use strict'

var KEY = 'Portfolio'
var gPortfolio = _createProjects();

function getProjsForDisplay() {
    return gPortfolio
}
// privat functions
function _createProjects() {
    // var projects = loadFromStorage(KEY);
    // if (projects) return projects;
    var projects = [
        ['MineSweeper', 'img/portfolio/01-thumbnail.jpg', "best mine sweeper everrrrr", "#portfolioModal1", 'January 2017', 'Coding Academy', 'Sprint'],
        ['Bookshop', "img/portfolio/02-thumbnail.jpg", "best mine book shop everrrrr", "#portfolioModal2", 'January 2020', 'Coding Academy', 'Crud'],
    ]
        .map(_createProject)

    return projects;
}

function _createProject([name, img, txt, href, date, client, category]) {
    return {
        name: name,
        img: img,
        txt: txt,
        href: href,
        date: date,
        client: client,
        category: category
    }
}

