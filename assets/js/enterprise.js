const subjects = [
    {
        id: 0,
        button: "Atendimento",
        title: "Atendimento",
        content: {
            A: "Escalar o atendimento e melhorar a experiência são apenas dois dos benefícios do uso da inteligência artificial no atendimento ao cliente.",
            B: "A verdade é que a IA oferece uma série de vantagens, como chatbots e assistentesvirtuais, análise de sentimentos, automação de tarefas, recomendaçõespersonalizadas, assistência a atendentes, previsão de necessidades, etc.",
            C: "Essas aplicações podem melhorar tanto a eficiência operacional quanto a experiência do cliente, oferecendo um suporte mais ágil e personalizado. Isso sem contar os benefícios diversos para as empresas, que ampliam a capacidade de atender inúmeros clientes, com menos custos e mais eficiência, sem depender de agentes humanos para resolver os casos mais simples."
        },
        image: "./assets/img/enterprise/atendimento.jpeg"
    }, 
    {
        id: 1,
        button: "Produção",
        title: "Produção",
        content: {
            A: "A Inteligência Artificial tem se consolidado como uma ferramenta essencial na Indústria 4.0, trazendo uma série de impactos positivos que revolucionam a forma como os negócios são conduzidos.",
            B: "Além disso, a aplicação de IA abre novas oportunidades para a criação de modelos de negócios inovadores, uma vez que os algoritmos utilizados conseguem analisar rapidamente grandes volumes de dados e fornecer insights valiosos.",
            C: "O uso de Inteligência Artificial no setor industrial pode gerar grandes ganhos de produtividade, redução de erros, eliminação de atividades burocráticas e até redução de custos, fornecendo, por exemplo, manutenção preditiva, automação de processos, controle de qualidade, otimização da cadeia de suprimentos, planejamento de produção, robótica colaborativa, análise de dados e otimização de processos."
        },
        image: "./assets/img/enterprise/producao.jpeg"
    }, 
    {
        id: 2,
        button: "Marketing",
        title: "Marketing",
        content: {
            A: "A Inteligência Artificial tem revolucionado o Marketing Digital por proporcionar vantagens significativas que transformam a maneira como as empresas interagem com os seus clientes.",
            B: "No marketing digital, a IA desempenha um papel crucial na otimização de campanhas, personalização do conteúdo e automação de processos, oferecendo, por exemplo, segmentação de público e personalização de experiências, anúncios programáticos, análise de dados e previsão de tendências, chatbots e assistentes virtuais, SEO automatizado, criação de conteúdo personalizado, E-mail marketing inteligente, automação de marketing, análise de sentimentos e otimização de conversão (CRO).",
            C: "A IA ajuda a maximizar o impacto das ações de marketing, ao mesmo tempo que reduz custos e melhora a eficiência."
        },
        image: "./assets/img/enterprise/marketing.jpeg"
    }, 
    {
        id: 3,
        button: "Logística",
        title: "Logística",
        content: {
            A: "Inteligência artificial (IA) em finanças é o uso de tecnologia, incluindo algoritmos avançados e aprendizado de máquina (ML), para analisar dados, automatizar tarefas e melhorar a tomada de decisões no setor de serviços financeiros.",
            B: "Algumas das principais aplicações da IA nas finanças incluem: automação de processos financeiros (RPA), detecção de fraudes, análise de crédito, consultoria financeira automatizada (Robo-Advisors), previsão de mercado e análise de investimentos, atendimento ao cliente com chatbots, gerenciamento de risco, otimização de portfólios de investimento, compliance e regulação, análise preditiva de fluxo de caixa, assistência em decisões financeiras.",
            C: "Essas aplicações permitem que as empresas do setor financeiro operem com maior precisão, agilidade e segurança, além de melhorar a experiência dos clientes ao oferecer serviços mais rápidos e personalizados. A IA está transformando o setor, criando novas oportunidades e mudando a forma como os serviços financeiros são prestados."
        },
        image: "./assets/img/enterprise/logistica.jpeg"
    }, 
    {
        id: 4,
        button: "Finanças",
        title: "Finanças",
        content: {
            A: "A inteligência artificial na logística é uma realidade nas grandes indústrias logísticas e muitos negócios já têm dado os primeiros passos rumo à nova tendência de mercado, onde as empresas logísticas usam soluções digitais em prol de melhorias contínuas, seja na redução de custos, na celeridade de entregas em diferentes etapas ou na previsão de resultados.",
            B: "Alguns exemplos de aplicação da inteligência artificial na logística são: otimização de rotas, gestão de estoque, automatização de armazéns, manutenção preditiva de veículos e equipamentos, previsão de demanda, automação de processos, veículos autônomos e drones, análise de dados e otimização de cadeias de suprimentos, gestão de riscos, atendimento ao cliente e rastreabilidade.",
            C: "A capacidade de tomar decisões baseadas em dados e automatizar processos permite que as empresas de logística ofereçam melhores serviços com custos menores."
        },
        image: "./assets/img/enterprise/financas.jpeg"
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