let bigger = document.querySelector('#make-bigger');
let smaller = document.querySelector('#make-smaller');

let img = document.querySelector('img');

bigger.addEventListener('click', function() {
    img.setAttribute('class', 'img-big');
})

smaller.addEventListener('click', function() {
    img.setAttribute('class', 'img-small');
})