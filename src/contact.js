const contact = () => {
    'use strict';

    const div = document.createElement('div');
    div.textContent = 'Contact us at this number: 1-123-456-7890';
    content = document.getElementById('content');
    content.appendChild(div);

};

export default contact