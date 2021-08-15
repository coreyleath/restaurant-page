import header from './header.js'
import mainPage from './mainPage.js'
import menu from './menu.js'
import contact from './contact.js'

header();
mainPage();

const mainPageBtn = document.getElementById('mainPageBtn');
mainPageBtn.addEventListener('click', function() {
    document.getElementById('content').innerHTML ="";
    mainPage();
});

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', function() {
    document.getElementById('content').innerHTML ="";
    menu();
});

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', function() {
    document.getElementById('content').innerHTML ="";
    contact();
});