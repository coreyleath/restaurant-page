const mainPage = () => {
    'use strict';
    
    const div = document.createElement('div');
    div.textContent = 'You\'re gonna love our meats!';
    content = document.getElementById('content');
    content.appendChild(div);
    
};

export default mainPage