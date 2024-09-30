const opinions = [
    {
        id: 0,
        name: "Liliana Gravronski",
        description: "1º ano de Engenharia de Software",
        opinion: "Atualmente, graduandos que buscam se inserir no mercado de trabalho enfrentam barreiras significativas para se destacar, especialmente devido à necessidade de se manterem atualizados com novas tecnologias, como a IA, e às altas expectativas de experiência, mesmo no início de suas carreiras, em áreas onde as inteligências artificiais já possuem grande domínio de informações. No entanto, existem várias áreas emergentes que não podem ser facilmente automatizadas pela IA e que continuarão a demandar profissionais qualificados. Essas áreas oferecem uma oportunidade única para os graduandos desenvolverem um aprendizado contínuo e formarem uma nova geração de profissionais capazes de impulsionar o avanço tecnológico.",
        image: "./assets/img/work/lili.jpg"
    },

    {
        id: 1,
        name: "Raul Soares",
        description: "1º ano de Engenharia de Software",
        opinion: "Acredito que o maior desafio seja entender que você não deve tentar superar a IA, tentar ser autoral e lutar contra ela, mas sim aceitar e utilizar a IA nas suas tarefas de forma natural, entendendo a evolução e se adaptando às tecnologias, uma vez que superá-la é muito difícil, mas utilizá-la a seu favor não!",
        image: "./assets/img/work/raul.jpg"
    },

    {
        id: 2,
        name: "Denys Rodrigues",
        description: "3º ano de Engenharia de Software",
        opinion: "Há um ditado que diz: 'quem trabalha não tem tempo de ganhar dinheiro.' Isso é especialmente verdadeiro quando você precisa se especializar em algo, e existem ferramentas que fazem o que você faz, só que muito mais rápido e de graça. Um dos desafios que enfrentamos é encontrar motivos para continuar empregados, mostrando que ainda somos necessários e sempre buscando inovar e produzir mais do que ontem.",
        image: "./assets/img/work/denys.jpg"
    },

    {
        id: 3,
        name: "Lucas Pianaro",
        description: "5º ano de Engenharia de Software",
        opinion: "Acredito que, para nós, existem mais pontos positivos do que desafios ao tentar ingressar no mercado de trabalho nesse cenário. Quem souber utilizar as IAs como ferramentas para impulsionar a forma de estudar e trabalhar terá maior destaque e eficiência. No entanto, alguns desafios podem ser mencionados. As tecnologias mudam rapidamente, e muitas vezes o que aprendemos na faculdade não acompanha essa velocidade. Por isso, é necessário se manter atualizado com novas ferramentas e linguagens. O mercado também busca profissionais com habilidades além da programação, como comunicação e trabalho em equipe. Quem não desenvolver essas competências pode enfrentar mais dificuldades. Além disso, com o uso da IA vem a responsabilidade. É importante compreender os impactos sociais e éticos das tecnologias que estamos criando, como questões de privacidade e o viés que pode ser inserido nas IAs.",
        image: "./assets/img/work/pianaro.jpg"
    },

    {
        id: 4,
        name: "Nicolas Prado", 
        description: "3º ano de Engenharia de Software",
        opinion: "Em primeira instância, é importante lembrar que esses desafios já são enormes por diversos motivos, seja pela falta de experiência ou pela baixa confiança das empresas em profissionais recém-formados. No que diz respeito à inteligência artificial, gosto de pensar nela como uma faca de dois gumes. Ao mesmo tempo em que cria novos empregos com a crescente evolução da IA — pois, certamente, quanto mais avanços, mais campos de estudo e atuação surgem —, também aumenta o receio em relação às capacidades cada vez maiores dessa tecnologia, o que poderia deixar a mão de obra iniciante 'para trás'. Acredito que, no cenário atual, por experiência própria, esse é o menor dos problemas, comparado aos que salientei anteriormente. Muito pelo contrário, na verdade, IAs como o ChatGPT são extremamente úteis para o aprendizado e apoio no trabalho. Assim, os graduandos que utilizam devidamente essas ferramentas tornam-se ainda mais eficientes e capazes no mercado. Entretanto, certamente, em um futuro próximo, isso será algo em pauta, visto que a IA está se tornando cada vez mais afiada, capaz e popular na resolução de problemas. Isso poderia, sim, mesmo que indiretamente, reduzir algumas vagas de base, com baixos requisitos técnicos, como as de estagiários, por exemplo.",
        image: "./assets/img/work/prado.png"
    },

    {
        id: 5,
        name: "Felipe Radins",
        description: "5º ano de Engenharia de Software",
        opinion: "Um dos principais desafios para quem está entrando no mercado de tecnologia, especialmente na área de DevOps, é o aumento da capacidade de tomada de decisões pelas inteligências artificiais com base em dados estruturados e não estruturados, como o gerenciamento de servidores a partir de eventos da infraestrutura da empresa. Até pouco tempo atrás, essas operações eram realizadas apenas por humanos, utilizando uma quantidade relativamente pequena de dados e, principalmente, baseando-se em experiências anteriores.",
        image: "./assets/img/work/radins.jpg"
    },

    {
        id: 6,
        name: "Nicollas Vieira",
        description: "5º ano de Engenharia da Computação",
        opinion: "Considerando que o mercado de trabalho tem exigido cada vez mais dos bons profissionais, acredito que a presença da inteligência artificial não seja um grande problema. Ela surge com o propósito de servir como uma ferramenta para o profissional, e não de substituí-lo. É claro que alguns podem ser substituídos pela IA, mas não por ela estar extremamente avançada, e sim porque esses profissionais não se esforçam o suficiente para serem reconhecidos como indispensáveis nas grandes empresas. Como profissional da área de dados, vejo a IA como uma ferramenta poderosa, tanto para extração quanto para formatação de dados, e não me sinto ameaçado por ser substituído por ela. Pelo contrário, vejo uma oportunidade de crescimento, de aprender e de otimizar ainda mais o meu trabalho",
        image: "./assets/img/work/nicolas.jpg"
    },

    {
        id: 7,
        name: "Lorem Leuch",
        description: "3º ano de Jornalismo",
        opinion: "Eu acredito que a inteligência artificial está cada vez mais ocupando espaços e, embora possa ser usada para coisas boas em alguns aspectos, muitas pessoas ainda não sabem como utilizá-la adequadamente. Isso acaba afetando o mercado de trabalho, pois, em determinadas áreas, a IA é usada no lugar de um profissional, o que torna as vagas de emprego mais escassas. No jornalismo, por exemplo, a IA é usada para escrever notas e matérias, um trabalho que deveria ser feito por um jornalista formado ou em formação, já que este domina as técnicas e tem a capacidade de transmitir a informação de maneira mais segura. Eu acredito que a IA deveria ser tratada como uma ferramenta de auxílio, e não como um meio de fazer o trabalho por você.",
        image: "./assets/img/work/lorem.jpeg"
    },

    {
        id: 8,
        name: "Taís",
        description: "5º ano de Engenharia de Software",
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
    const popUpName = document.querySelector(".pop-up__title")
    const popUpDescri = document.querySelector(".pop-up__description");
    const popUpOpinion = document.querySelector(".pop-up__opinion");
    const button = event.currentTarget;
    const id = button.value;

    popUpImg.src = opinions[id].image;
    popUpName.innerHTML = opinions[id].name;
    popUpDescri.innerHTML = opinions[id].description;
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