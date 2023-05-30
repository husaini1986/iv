let placement = document.querySelector ('.placement-ul');

let c1 = document.querySelector ('.c1');
let c2 = document.querySelector('.c2');

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');

let catalog1 = document.querySelector('.catalog1');
let catalog2 = document.querySelector('.catalog2');
let catalog3 = document.querySelector('.catalog3');
let catalog4 = document.querySelector('.catalog4');
let catalog5 = document.querySelector('.catalog5');
let catalog6 = document.querySelector('.catalog6');

let catalog01 = document.querySelector('.catalog01');
let catalog02 = document.querySelector('.catalog02');
let catalog03 = document.querySelector('.catalog03');
let catalog04 = document.querySelector('.catalog04');
let catalog05 = document.querySelector('.catalog05');
let catalog06 = document.querySelector('.catalog06');

c1.addEventListener('click', function () {
    placement.classList.add('hid');
    p1.classList.remove('hid');
});

catalog1.addEventListener('click', function(){
    p1.classList.add('hid');
    placement.classList.remove('hid');
});

catalog2.addEventListener('click', function(){
    p1.classList.add('hid');
    placement.classList.remove('hid');
});
catalog3.addEventListener('click', function(){
    p1.classList.add('hid');
    placement.classList.remove('hid');
});
catalog4.addEventListener('click', function(){
    p1.classList.add('hid');
    placement.classList.remove('hid');
});
catalog5.addEventListener('click', function(){
    p1.classList.add('hid');
    placement.classList.remove('hid');
});
catalog6.addEventListener('click', function(){
    p1.classList.add('hid');
    placement.classList.remove('hid');
});
//липа
c2.addEventListener('click', function () {
    placement.classList.add('hid');
    p2.classList.remove('hid');
});
catalog01.addEventListener('click', function(){
    p2.classList.add('hid');
    placement.classList.remove('hid');
});

catalog02.addEventListener('click', function(){
    p2.classList.add('hid');
    placement.classList.remove('hid');
});
catalog03.addEventListener('click', function(){
    p2.classList.add('hid');
    placement.classList.remove('hid');
});
catalog04.addEventListener('click', function(){
    p2.classList.add('hid');
    placement.classList.remove('hid');
});
catalog05.addEventListener('click', function(){
    p2.classList.add('hid');
    placement.classList.remove('hid');
});
catalog06.addEventListener('click', function(){
    p2.classList.add('hid');
    placement.classList.remove('hid');
});
