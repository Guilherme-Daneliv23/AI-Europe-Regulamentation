const task = [
    {
        img: "./assets/img/culture/PraiaIAFirefly.jpg",
        feedback: "Parabéns, você acertou!! Esta imagem foi gerada por Inteligência Artificial, por meio do Adobe Firefly! Seus olhos estão aptos a reconhecer uma imagem gerada por IA!",
        feedbackImage: "./assets/img/introduction/hit.png"
    },
    {
        img: "./assets/img/culture/Suiça.webp",
        feedback: "Que pena, você errou... Esta imagem não foi gerada por Inteligência Artificial. Esta é uma captura feita em Lauterbrunnen, na Suíça!",
        feedbackImage: "./assets/img/introduction/wrong.png"
    },
    {
        img: "./assets/img/culture/AuroraBoreal.jpg",
        feedback: "Que pena, você errou... Esta imagem não foi gerada por Inteligência Artificial. Esta é uma captura da Aurora Boreal, em Lofoten, na Noruega!",
        feedbackImage: "./assets/img/introduction/wrong.png"
    },
    {
        img: "./assets/img/culture/Filipinas.jpeg",
        feedback: "Que pena, você errou... Esta imagem não foi gerada por Inteligência Artificial. Esta é uma captura feita em El Nido, nas Filipinas!",
        feedbackImage: "./assets/img/introduction/wrong.png"
    }   
]

const listTask = document.querySelector(".culture__tesk--list");

function createTask()   {
    for(let i = 0; i < task.length; i++)    {
        const li = document.createElement('li');
        li.classList.add('culture__tesk--li');
        li.innerHTML = `<button value="${i}" onclick="sendTask(event)" class="culture__tesk--list--options"><img class="culture__task--list--img" src="${task[i].img}" alt=""></button>`;
        listTask.appendChild(li);
    }
}
function sendTask(event) {
    const feedbackTask = document.querySelector(".culture__tesk--feedback");
    const feedbackTaskText = document.querySelector(".culture__tesk--feedback--paragraph");
    const feedbackTaskImage = document.querySelector(".culture__tesk--feedback--image");
    const pressOption = event.currentTarget;
    const idFeedBack = pressOption.value;

    feedbackTaskText.innerHTML = task[idFeedBack].feedback;
    feedbackTaskImage.src = task[idFeedBack].feedbackImage;
    feedbackTask.style.display = 'block';
    listTask.innerHTML = '';
    const li = document.createElement('li');
    li.classList.add('culture__tesk--li');
    li.innerHTML = `<button onclick="sendTask()" class="culture__tesk--list--options"><img class="culture__task--list--img" src="${task[idFeedBack].img}" alt=""></button>`;
    listTask.appendChild(li);

}

createTask();