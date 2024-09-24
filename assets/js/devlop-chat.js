const light = document.getElementById('light');
const button = document.getElementById('toggleButton');
let isLightOn = false;

button.addEventListener('click', () => {
    isLightOn = !isLightOn;
    if (isLightOn) {
        light.classList.add('light-on');
        button.textContent = 'Apagar a Luz';
    } else {
        light.classList.remove('light-on');
        button.textContent = 'Acender a Luz';
    }
});


const lightDev = document.querySelector('.light-off-dev');
const buttonDev = document.querySelector('.toggleButton-dev');

function controlLight() {
    if(buttonDev.textContent == 'Acender a Luz')   {
        lightDev.classList.add('light-on');
        buttonDev.textContent = 'Apagar a Luz';
    } else  {
        lightDev.classList.remove('light-on');
        buttonDev.textContent = 'Acender a Luz';
    }
}