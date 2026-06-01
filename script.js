// Banco de dados de perguntas do Quiz do Agrinho
const quizData = [
    {
        question: "Qual dessas tecnologias ajuda a economizar água na irrigação das lavouras?",
        a: "Uso de tratores antigos",
        b: "Sensores de umidade no solo",
        c: "Irrigação sem controle de tempo",
        correct: "b"
    },
    {
        question: "Qual o principal objetivo do programa Agrinho nas escolas?",
        a: "Ensinar apenas sobre jogos eletrônicos",
        b: "Estimular a cidadania, criatividade e sustentabilidade",
        c: "Vender produtos agrícolas para a cidade",
        correct: "b"
    },
    {
        question: "Como os drones auxiliam o agricultor no campo atualmente?",
        a: "Mapeando pragas e monitorando a saúde das plantas de cima",
        b: "Apenas para tirar fotos bonitas da fazenda",
        c: "Transportando os alimentos diretamente para os supermercados",
        correct: "a"
    }
];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

let currentQuiz = 0;
let score = 0;

// Inicializa o Quiz
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    optionsEl.innerHTML = `
        <button onclick="selectAnswer('a')">${currentQuizData.a}</button>
        <button onclick="selectAnswer('b')">${currentQuizData.b}</button>
        <button onclick="selectAnswer('c')">${currentQuizData.c}</button>
    `;
    nextBtn.style.display = 'none'; // Esconde botão de avançar até que respondam
}

function deselectAnswers() {
    // Limpa seleções anteriores se necessário
}

function selectAnswer(letter) {
    const correctAnswer = quizData[currentQuiz].correct;
    
    // Desativa os botões para não clicar duas vezes
    const buttons = optionsEl.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    if (letter === correctAnswer) {
        score++;
        event.target.style.backgroundColor = '#c8e6c9'; // Verde claro para acerto
        event.target.style.borderColor = '#4caf50';
    } else {
        event.target.style.backgroundColor = '#ffcdd2'; // Vermelho claro para erro
        event.target.style.borderColor = '#f44336';
    }
    
    nextBtn.style.display = 'inline-block'; // Mostra botão de próximo
}

nextBtn.addEventListener('click', () => {
    currentQuiz++;
    
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // Fim do quiz: exibe o resultado final
        document.getElementById('quiz').style.display = 'none';
        resultEl.style.display = 'block';
        resultEl.innerHTML = `🎉 Você terminou! Sua pontuação foi: ${score} de ${quizData.length} acertos.`;
    }
});