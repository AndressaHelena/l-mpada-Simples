const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function verificaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function ligueLampada() {
    if (!verificaQuebrada()){
    lamp.src = "./img/acesa.png"
    }
}

function desligaLampada() {
    if (!verificaQuebrada()) {
        lamp.src = "./img/apagada.jpg"
    }
}

function lampadaQuebrada() {
    lamp.src = "./img/quebrada.jpg" 
}

ligar.addEventListener('click', ligueLampada);
desligar.addEventListener('click', desligaLampada);
lamp.addEventListener('mouseover', ligueLampada);
lamp.addEventListener('mouseleave', desligaLampada);
lamp.addEventListener('dblclick', lampadaQuebrada)