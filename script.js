let box = document.querySelector('div');
let input = document.querySelector('input');

input.addEventListener('input', (e) => {
    box.style.borderRadius = e.target.value;
    box.style.background = e.target.value;
})