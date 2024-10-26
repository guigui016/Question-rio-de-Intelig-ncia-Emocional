const questions = [{
        question: "Você está prestes a fazer uma apresentação importante, mas sente muita ansiedade. O que você faz?",
        options: [
            "Pratica técnicas de respiração",
            "Foca nos pontos positivos",
            "Desiste da apresentação",
            "Pede para alguém te substituir"
        ],
        scores: [1, 1, 0, 0]
    },
    {
        question: "Você recebe uma crítica sobre um trabalho que fez. Como reage?",
        options: [
            "Reflete e busca aprender com a crítica",
            "Se sente desmotivado e evita trabalhar mais nisso",
            "Reage defensivamente e ignora a crítica",
            "Discute com a pessoa que te criticou"
        ],
        scores: [1, 0, 0, 0]
    },
    {
        question: "Durante uma discussão com um colega, você sente raiva. O que você faz?",
        options: [
            "Respira fundo e tenta manter a calma",
            "Deixa a raiva dominar e fala algo que não deveria",
            "Se afasta para evitar uma briga",
            "Chama outro colega para intervir"
        ],
        scores: [1, 0, 0, 0]
    },
    {
        question: "Você está se sentindo desmotivado com suas tarefas diárias. O que você faz?",
        options: [
            "Faz uma pausa e reflete sobre o que te motiva",
            "Continua trabalhando sem parar, ignorando seus sentimentos",
            "Desiste das tarefas e se isola",
            "Conversa com alguém de confiança sobre como se sente"
        ],
        scores: [1, 0, 0, 1]
    },
    {
        question: "Você está diante de uma escolha difícil e sente medo de falhar. O que você faz?",
        options: [
            "Analisa os prós e contras e segue em frente com confiança",
            "Evita a decisão por medo das consequências",
            "Pede conselhos a alguém de confiança",
            "Deixa para decidir em outro momento"
        ],
        scores: [1, 0, 1, 0]
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function showQuestion() {
    const questionText = document.getElementById("question-text");
    const optionA = document.getElementById("option-a");
    const optionB = document.getElementById("option-b");
    const optionC = document.getElementById("option-c");
    const optionD = document.getElementById("option-d");

    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    optionA.textContent = question.options[0];
    optionB.textContent = question.options[1];
    optionC.textContent = question.options[2];
    optionD.textContent = question.options[3];

    // Limpa a seleção anterior
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => button.classList.remove('selected'));
    selectedOption = null;
}

function selectOption(index) {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('selected'); // Marca a opção selecionada como verde
            selectedOption = index;
        } else {
            button.classList.remove('selected');
        }
    });

    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    if (selectedOption !== null) {
        score += questions[currentQuestion].scores[selectedOption];
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
            document.getElementById("next-button").style.display = "none";
        } else {
            showFeedback();
        }
    } else {
        alert("Por favor, selecione uma opção antes de continuar.");
    }
}

function showFeedback()