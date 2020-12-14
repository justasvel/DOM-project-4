let paragraph = document.querySelector('p');
let header = document.createElement('h2');
header.textContent = 'Heading';

let btn = document.querySelector('.btn');


btn.addEventListener('click', function () {
    paragraph.before(header);
});