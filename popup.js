const open = document.getElementById('open');
const container = document.getElementById('container');
const close = document.getElementById('close');

open.addEventListener('click',() =>{
    container.classList.add('show');
});

close.addEventListener('click',() =>{
    container.classList.remove('show');
});

const open1 = document.getElementById('open1');
const container1 = document.getElementById('container1');
const close1 = document.getElementById('close1');

open1.addEventListener('click',() =>{
    container1.classList.add('show');
});

close1.addEventListener('click',() =>{
    container1.classList.remove('show');
});