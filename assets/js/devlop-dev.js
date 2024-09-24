const light = document.querySelector('.light-off-dev');
const button = document.querySelector('.toggleButton-dev');

function controlLight() {
    if(button.textContent == 'Acender a Luz')   {
        light.classList.add('light-on');
        button.textContent = 'Apagar a Luz';
    } else  {
        light.classList.remove('light-on');
        button.textContent = 'Acender a Luz';
    }
}