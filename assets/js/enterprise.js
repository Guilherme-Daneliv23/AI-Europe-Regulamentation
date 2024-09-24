const subjects = [
    {
        id: 0,
        button: "Atendimento",
        title: "Atendimento",
        content: {
            A: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            B: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            C: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem."
        },
        image: "./assets/img/enterprise/atendimento.jpg"
    }, 
    {
        id: 1,
        button: "Produção",
        title: "Produção",
        content: {
            A: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            B: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            C: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem."
        },
        image: "./assets/img/enterprise/producao.jpg"
    }, 
    {
        id: 2,
        button: "Marketing",
        title: "Marketing",
        content: {
            A: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            B: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            C: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem."
        },
        image: "./assets/img/enterprise/marketing.jpg"
    }, 
    {
        id: 3,
        button: "Logística",
        title: "Logística",
        content: {
            A: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            B: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            C: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem."
        },
        image: "./assets/img/enterprise/logistica.jpg"
    }, 
    {
        id: 4,
        button: "Finanças",
        title: "Finanças",
        content: {
            A: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            B: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem.",
            C: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo optio in asperiores velit, totam beatae, quos commodi quibusdam sunt ipsum odio, deleniti porro iste architecto nostrum neque magni autem."
        },
        image: "./assets/img/enterprise/financas.jpg"
    }, 
]

const buttons = document.querySelector(".enterprise__frame--frame--list");

function createSubjects()    {
    let currentSubject;
    for(let i = 0; i < subjects.length; i++) {
        currentSubject = subjects[i];
        const li = document.createElement('li');
        li.classList.add("enterprise__frame--frame--li");
        li.innerHTML = `<button onclick="assignContent(event)" value="${currentSubject.id}" class="enterprise__frame--frame--button">${currentSubject.button}</button>`;
        buttons.appendChild(li);
    }
}

let lastButtonPress

function assignContent(event)    {
    const picture = document.querySelector(".enterprise__frame--frame--picture");
    const text = document.querySelector(".enterprise__frame--frame--text");

    if (lastButtonPress) {
        lastButtonPress.classList.remove('enterprise__frame--frame--button--dif');
    }

    picture.innerHTML = '';
    text.innerHTML = '';

    const buttonPress = event.currentTarget;
    idPress = parseInt(buttonPress.value);
    lastButtonPress = buttonPress;

    buttonPress.classList.add('enterprise__frame--frame--button--dif');

    const title = document.createElement('h4');
    title.classList.add('enterprise__frame--frame--title');
    title.innerHTML = subjects[idPress].title;
    text.appendChild(title);

    const contentValues = Object.values(subjects[idPress].content);
    for(let i = 0; i < contentValues.length; i++)  {
        const paragraph = document.createElement('p');
        paragraph.classList.add('enterprise__frame--frame--paragraph');
        paragraph.innerHTML = contentValues[i];
        text.appendChild(paragraph);
    }

    const image = document.createElement('img');
    image.classList.add('enterprise__frame--frame--image');
    image.src = subjects[idPress].image;
    picture.appendChild(image);
}

createSubjects();