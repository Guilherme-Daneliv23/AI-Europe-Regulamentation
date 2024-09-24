const task = [
    {
        img: "./assets/img/culture/paisagem01.jpg",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
        feedbackImage: "./assets/img/introduction/wrong.png"
    },
    {
        img: "./assets/img/culture/paisagem02.jpg",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
        feedbackImage: "./assets/img/introduction/wrong.png"
    },
    {
        img: "./assets/img/culture/paisagem03.jpg",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
        feedbackImage: "./assets/img/introduction/hit.png"
    },
    {
        img: "./assets/img/culture/paisagem04.jpg",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
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