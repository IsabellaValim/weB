document.querySelector('#btn1').onclick = function () {
    document.querySelector('#img').src = 'kiss.jpg';
};

document.querySelector('#titulo').onclick = function () {
    document.querySelector('#tit').innerHTML = 'Titulo tambem LOL';
};

document.querySelector('#paragrafo').onclick = function () {
    document.querySelector('#p').style.color = 'pink';
};

document.querySelector('#audio').onclick = function () {
    var som = new Audio('ex.wav');
    som.play();
};

document.querySelector('#troca1').onclick = function () {
    var cor = document.getElementById('troca1');
    cor.classList.toggle('azul');
    var cor2 = document.getElementById('troca2');
    cor2.classList.toggle('azul');
    var cor3 = document.getElementById('troca3');
    cor3.classList.toggle('azul');
};










