import lasagna from './lasagna.png'

var header = () => {
    'use strict';

    header = document.getElementById('header');

    var img = document.createElement('img');
    img.src = lasagna;
    header.appendChild(img);

    const createBtn = function(id, name) {
        var btn = document.createElement('button');
        btn.id = id;
        btn.textContent = name;
        header.appendChild(btn);
    }

    createBtn('mainPageBtn','Main Page');
    createBtn('menuBtn','Menu');
    createBtn('contactBtn','Contact Us');

};

export default header