const opinions = [
    {
        id: 0,
        opinion: "Uma forma de ensinar computadores a adivinhar suas senhas com base no seu humor.",
        image: "./assets/img/work/gui.jpeg"
    },

    {
        id: 1,
        opinion: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
        image: "./assets/img/work/gui.jpeg"
    },

    {
        id: 2,
        opinion: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
        image: "./assets/img/work/gui.jpeg"
    },

    {
        id: 3,
        opinion: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
        image: "./assets/img/work/gui.jpeg"
    },

    {
        id: 4,
        opinion: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
        image: "./assets/img/work/gui.jpeg"
    },

    {
        id: 5,
        opinion: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
        image: "./assets/img/work/gui.jpeg"
    },

    {
        id: 6,
        opinion: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
        image: "./assets/img/work/gui.jpeg"
    },

    {
        id: 7,
        opinion: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
        image: "./assets/img/work/gui.jpeg"
    },

    {
        id: 8,
        opinion: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
        image: "./assets/img/work/gui.jpeg"
    }
]

const list = document.querySelector(".work__options--list");

function createOpinions()    {
    let currentOpinion;
    for(let i = 0; i < opinions.length; i++) {
        currentOpinion = opinions[i];
        const li = document.createElement('li');
        li.classList.add("work__options--list--option");
        li.innerHTML = `<button onclick="clickOpinion(event)" class="work__options--list--button" value="${currentOpinion.id}"><img class="work__options--list--img" src="${currentOpinion.image}" alt=""></button>`;
        list.appendChild(li);
    }
}


const overflow = document.querySelector(".overflow");

function clickOpinion(event) {
    const popUp = document.querySelector(".pop-up");
    const popUpImg = document.querySelector(".pop-up__img");
    const popUpOpinion = document.querySelector(".pop-up__opinion");
    const button = event.currentTarget;
    const id = button.value;

    popUpImg.src = opinions[id].image;
    popUpOpinion.innerHTML = opinions[id].opinion;
    overflow.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePopUp()   {
    overflow.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.addEventListener('click', function(event) {
    if (event.target === overflow) {
        overflow.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

createOpinions();