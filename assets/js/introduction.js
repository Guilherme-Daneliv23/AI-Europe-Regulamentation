const quiz = [
    {
        question: "COM ISSO, PODEMOS DEFINIR INTELIGÊNCIA ARTIFICIAL COMO:",
        answers: {
            A: "Uma forma de ensinar computadores a adivinhar suas senhas com base no seu humor.",
            B: "Um sistema que faz máquinas entenderem sentimentos assistindo novelas.",
            C: "É a capacidade de máquinas executarem tarefas como aprendizado, reconhecimento de padrões e tomada de decisões, imitando a inteligência humana.",
            D: "O processo de ensinar máquinas a escrever poesias que rimam com palavras inventadas.",
            E: "Um sistema que consegue ler pensamentos."
        },
        correctAnswer: "C",
        feedback: {
            A: "Você errou... A Inteligência Artificial ainda não é capaz de adivinhar senhas baseando-se no humor do usuário. Espero que ela não adivinhe as nossas senhas...",
            B: "Você errou... A Inteligência Artificial ainda não é capaz de fazer máquinas entenderem sentimentos assistindo novelas. Será que um dia ela será capaz de entender completamente os sentimentos humanos? Nem nós entendemos...",
            C: "Isso mesmo! Inteligência Artificial (IA) é um ramo da ciência da computação que se propõe a elaborar dispositivos que simulem a capacidade humana de raciocinar, perceber, tomar decisões e resolver problemas.",
            D: "Você errou... A Inteligência Artificial ainda não é capaz de ensinar máquinas a escrever poesias que rimam com palavras inventadas. No entanto, ela pode gerar poesias para você, mas tome cuidado com os direitos autorais!",
            E: "Você errou... A Inteligência Artificial ainda não é capaz de ler pensamentos, que assustador seria se ela fosse."
        },
        imagemCorreto: "./assets/img/introduction/hit.png",
        imagemIncorreto: "./assets/img/introduction/wrong.png",
        
        
    }
]

let currentQuestionIndex = 0;
const question  = document.querySelector('.introduction__quiz--question');
const buttonVerify = document.querySelector('.introduction__quiz--button');
const answersUl = document.querySelector('.introduction__quiz--answers');

function loadQuestion() {
    const currentQuestion = quiz[currentQuestionIndex];
    question.innerHTML = currentQuestion.question;
    answersUl.innerHTML = '';
    for (const [key, value] of Object.entries(currentQuestion.answers)) {
        const li = document.createElement('li');
        li.classList.add('introduction__quiz--answer');
        li.innerHTML = `<label><input type="radio" name="answer" value="${key}"> ${value}</label>`;
        answersUl.appendChild(li);
    }
}

function submitAnswer() {
    const currentQuestion = quiz[currentQuestionIndex];
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedback = document.querySelector('.introduction__quiz--feedback');
    const imagem = document.querySelector('.introduction__quiz--img');
    const options = document.querySelectorAll('.introduction__quiz--answer');

    if (selectedAnswer) {
        const feedbackLetter = selectedAnswer.value;
        if (selectedAnswer.value === quiz[currentQuestionIndex].correctAnswer) {
            feedback.innerHTML = currentQuestion.feedback.C;
            imagem.src = currentQuestion.imagemCorreto;
        } else {
            feedback.innerHTML = currentQuestion.feedback[feedbackLetter];
            imagem.src = currentQuestion.imagemIncorreto;
        }
        options.forEach(element => {
            const inputOfLi = element.querySelector('input');
            if(inputOfLi.value != selectedAnswer.value)   {
                element.remove();
            }         
        });
        feedback.style.display = 'block';
        imagem.style.display = 'block';
        buttonVerify.style.display = 'none';
        
    }
}

loadQuestion();