const questions = [
    { question: "Koji je glavni grad Francuske?", answers: ["Pariz", "London", "Berlin"], correct: 0 },
    { question: "Koja je najveća planeta u Sunčevom sistemu?", answers: ["Mars", "Jupiter", "Saturn"], correct: 1 },
    { question: "Koliko kontinenata postoji na Zemlji?", answers: ["5", "6", "7"], correct: 2 },
    { question: "Ko je napisao 'Hamleta'?", answers: ["Šekspir", "Dostojevski", "Tolstoj"], correct: 0 },
    { question: "Koja je hemijska oznaka za vodu?", answers: ["HO", "H2O", "OH2"], correct: 1 },
    { question: "Koji je najbrži kopneni sisar?", answers: ["Slon", "Gepard", "Konj"], correct: 1 },
    { question: "Koja država ima najviše stanovnika?", answers: ["SAD", "Indija", "Kina"], correct: 2 },
    { question: "Koliko sekundi ima jedan minut?", answers: ["60", "100", "120"], correct: 0 },
    { question: "Koja je valuta u Japanu?", answers: ["Yen", "Won", "Peso"], correct: 0 },
    { question: "Koja boja se dobija mešanjem plave i žute?", answers: ["Zelena", "Ljubičasta", "Narandžasta"], correct: 0 }
];

function askQuestion() {
    if (questions.length === 0) {
        alert("Nema učitanih pitanja!");
        return;
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    const questionData = questions[randomIndex];
    document.getElementById("questionText").innerText = questionData.question;
    document.getElementById("answerA").innerText = questionData.answers[0];
    document.getElementById("answerB").innerText = questionData.answers[1];
    document.getElementById("answerC").innerText = questionData.answers[2];
    document.getElementById("questionBox").style.display = "block";
    document.getElementById("questionBox").dataset.correct = questionData.correct;
}

function answerQuestion(choice) {
    const correctAnswer = parseInt(document.getElementById("questionBox").dataset.correct);
    document.getElementById("questionBox").style.display = "none";

    const playerCorrect = choice === correctAnswer;
    const chaserCorrect = Math.random() < 0.7; // Tragač ima 70% šanse da odgovori tačno

    if (playerCorrect && playerPosition < boardSize - 1) playerPosition++;
    if (chaserCorrect && chaserPosition < boardSize - 1) chaserPosition++;

    drawBoard();
    checkGameOver();
}
