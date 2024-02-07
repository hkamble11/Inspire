const hamburger = document.querySelector('.hamburger');
const  first = document.querySelectorAll('.hamburger span')[0];
const  second = document.querySelectorAll('.hamburger span')[1];
const show = document.querySelector('.link');

hamburger.addEventListener('click', function() {
    first.classList.toggle('first');
    second.classList.toggle('second');
    show.classList.toggle('show');
})