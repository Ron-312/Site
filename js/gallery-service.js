'use strict'

var KEY = 'Portfolio'
var gPortfolio = _createProjects();

function getProjs() {
    return gPortfolio
}
// privat functions
function _createProjects() {
    // var projects = loadFromStorage(KEY);
    // if (projects) return projects;
    var projects = [
        ['MineSweeper', 'img/portfolio/mineSweeper.png', "best mine sweeper everrrrr", "https://ron-312.github.io/mineSweeper/", 'January 2017', 'Coding Academy', 'Sprint'],
        ['Bookshop', "img/portfolio/bookShop.jpg", "best mine book shop everrrrr", "https://ron-312.github.io/BookShop/", 'January 2020', 'Coding Academy', 'Crud'],
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

