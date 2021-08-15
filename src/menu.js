const menu = () => {
    'use strict';

    const list = ['Lasagna','Pasta','Soup','Breadsticks'];

    const ol = document.createElement('ol');
    for (let i of list) {
        let li = document.createElement('li');
        li.textContent = i;
        ol.appendChild(li);
    }

    content = document.getElementById('content');
    content.appendChild(ol);

};

export default menu