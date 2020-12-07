const trafficLightEl = document.querySelector('#trafficLight'), 
      blockTrafficLight = document.querySelector('#traffic-light__block-color'), 
      green = document.querySelector('.traffic-light__green'), 
      yellow = document.querySelector('.traffic-light__yellow'),
      red = document.querySelector('.traffic-light__red'),
      auto = document.querySelector('.road img:last-child'), 
      auto2 = document.querySelector('.road img:nth-child(2)');


function makeGreen() {
    trafficLightEl.style.background = 'green';
    auto.classList.add('drive');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = 'yellow';
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = 'red';
    auto.classList.remove('drive');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}



// Решение задания светофор

blockTrafficLight.addEventListener('click', turnGreen);

function hangEvent () {
    red.style.background = 'black';
    blockTrafficLight.removeEventListener('click', hangEvent);
    blockTrafficLight.addEventListener('click', turnGreen);
}

function turnGreen () {
    green.style.background = 'green';
    auto2.classList.add('drive2');
    blockTrafficLight.removeEventListener('click', turnGreen);
    blockTrafficLight.addEventListener('click', turnYellow);
}

function turnYellow () {
    yellow.style.background = 'yellow';
    green.style.background = 'black';
    blockTrafficLight.removeEventListener('click', turnYellow);
    blockTrafficLight.addEventListener('click', turnRed);
}

function turnRed () {
    red.style.background = 'red';
    yellow.style.background = 'black';
    auto2.classList.remove('drive2');
    blockTrafficLight.removeEventListener('click', turnRed);
    blockTrafficLight.addEventListener('click', hangEvent);
}