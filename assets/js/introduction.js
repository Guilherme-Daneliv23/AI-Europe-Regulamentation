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
        feedback: "Aqui vai o texto explicando um pouco sobre o porque essa questão está certa. Como faremos o texto? Da forma como bons alunos fazem textos para a faculdade, da forma que revolucionou a programação e encantou desde os mais sábios seniors aos mais ingênuos juniors, da forma mais inteligênte (e preguiçosa) possível. Com ele, nosso querido. Chat GPT.",
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
        if (selectedAnswer.value === quiz[currentQuestionIndex].correctAnswer) {
            feedback.innerHTML = currentQuestion.feedback;
            imagem.src = currentQuestion.imagemCorreto;
        } else {
            feedback.innerHTML = currentQuestion.feedback;
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