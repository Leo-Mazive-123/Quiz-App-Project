// ====================== Questions ======================

// Stage 1: Novice
const stage1Questions = [
    { stage: 1, question: "Which is the largest mammal in the world?", answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
    ]},
    { stage: 1, question: "Which is the smallest country in the world?", answers: [
        { text: "Vatican City", correct: true },
        { text: "Bhutan", correct: false },
        { text: "Nepal", correct: false },
        { text: "Shri Lanka", correct: false },
    ]},
    { stage: 1, question: "Which planet is known as the 'Red Planet'?", answers: [
        { text: "Earth", correct: false },
        { text: "Saturn", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Mars", correct: true },
    ]},
    { stage: 1, question: "Which is the largest desert in the world?", answers: [
        { text: "Kalahari", correct: false },
        { text: "Gobi", correct: false },
        { text: "Sahara", correct: false },
        { text: "Antarctica", correct: true },
    ]},
    { stage: 1, question: "Which is the smallest continent in the world?", answers: [
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
        { text: "Arctic", correct: false },
        { text: "Africa", correct: false },
    ]},
    { stage: 1, question: "How many bones are in the adult human body?", answers: [
        { text: "180", correct: false },
        { text: "206", correct: true },
        { text: "201", correct: false },
        { text: "222", correct: false },
    ]},
    { stage: 1, question: "Which is the largest ocean in the world?", answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Arctic Ocean", correct: false },
    ]},
    { stage: 1, question: "How many continents are there in the world?", answers: [
        { text: "5", correct: false },
        { text: "7", correct: true },
        { text: "6", correct: false },
        { text: "8", correct: false },
    ]},
    { stage: 1, question: "Which gas do plants absorb from the air?", answers: [
        { text: "Carbon dioxide", correct: true },
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
    ]},
    { stage: 1, question: "Which is the cleanest country in the world?", answers: [
        { text: "India", correct: false },
        { text: "United States", correct: false },
        { text: "China", correct: false },
        { text: "Switzerland", correct: true },
    ]},
];

// Stage 2: Intermediate
const stage2Questions = [
    { stage: 2, question: "What is the hardest natural substance on Earth?", answers: [
        { text: "Iron", correct: false },
        { text: "Gold", correct: false },
        { text: "Quartz", correct: false },
        { text: "Diamond", correct: true },
    ]},
    { stage: 2, question: "What is the largest internal organ in the human body?", answers: [
        { text: "Brain", correct: false },
        { text: "Liver", correct: true },
        { text: "Kidney", correct: false },
        { text: "Lung", correct: false },
    ]},
    { stage: 2, question: "How many sides does a hexagon have?", answers: [
        { text: "6", correct: true },
        { text: "8", correct: false },
        { text: "5", correct: false },
        { text: "7", correct: false },
    ]},
    { stage: 2, question: "Which planet is closest to the Sun?", answers: [
        { text: "Earth", correct: false },
        { text: "Mercury", correct: true },
        { text: "Mars", correct: false },
        { text: "Venus", correct: false },
    ]},
    { stage: 2, question: "What currency is used in Japan?", answers: [
        { text: "Won", correct: false },
        { text: "Dollar", correct: false },
        { text: "Yen", correct: true },
        { text: "Yuan", correct: false },
    ]},
    { stage: 2, question: "What is the capital of France?", answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
    ]},
    { stage: 2, question: "Which element has the chemical symbol 'O'?", answers: [
        { text: "Oxygen", correct: true },
        { text: "Gold", correct: false },
        { text: "Osmium", correct: false },
        { text: "Hydrogen", correct: false },
    ]},
    { stage: 2, question: "Which language is primarily spoken in Brazil?", answers: [
        { text: "Spanish", correct: false },
        { text: "Portuguese", correct: true },
        { text: "French", correct: false },
        { text: "English", correct: false },
    ]},
    { stage: 2, question: "Which ocean is the largest on Earth?", answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Arctic Ocean", correct: false },
    ]},
    { stage: 2, question: "Which organ pumps blood throughout the human body?", answers: [
        { text: "Liver", correct: false },
        { text: "Heart", correct: true },
        { text: "Lungs", correct: false },
        { text: "Kidney", correct: false },
    ]},
];

// Stage 3: Advanced
const stage3Questions = [
    { stage: 3, question: "Who developed the theory of general relativity?", answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Galileo Galilei", correct: false },
        { text: "Niels Bohr", correct: false },
    ]},
    { stage: 3, question: "Which element has the highest atomic number?", answers: [
        { text: "Uranium", correct: false },
        { text: "Oganesson", correct: true },
        { text: "Plutonium", correct: false },
        { text: "Radon", correct: false },
    ]},
    { stage: 3, question: "In computer science, what does 'HTTP' stand for?", answers: [
        { text: "HyperText Transfer Protocol", correct: true },
        { text: "HighText Transmission Program", correct: false },
        { text: "Hyperlink Transfer Protocol", correct: false },
        { text: "HyperText Transmission Program", correct: false },
    ]},
    { stage: 3, question: "Which country won the first FIFA World Cup in 1930?", answers: [
        { text: "Brazil", correct: false },
        { text: "Argentina", correct: false },
        { text: "Uruguay", correct: true },
        { text: "Italy", correct: false },
    ]},
    { stage: 3, question: "What is the powerhouse of the cell?", answers: [
        { text: "Nucleus", correct: false },
        { text: "Mitochondria", correct: true },
        { text: "Ribosome", correct: false },
        { text: "Endoplasmic Reticulum", correct: false },
    ]},
    { stage: 3, question: "Which is the deepest ocean trench in the world?", answers: [
        { text: "Puerto Rico Trench", correct: false },
        { text: "Mariana Trench", correct: true },
        { text: "Tonga Trench", correct: false },
        { text: "Java Trench", correct: false },
    ]},
    { stage: 3, question: "What is the speed of light in vacuum (approx)?", answers: [
        { text: "300,000 km/s", correct: true },
        { text: "150,000 km/s", correct: false },
        { text: "450,000 km/s", correct: false },
        { text: "600,000 km/s", correct: false },
    ]},
    { stage: 3, question: "Which gas is most abundant in Earth's atmosphere?", answers: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: true },
        { text: "Carbon Dioxide", correct: false },
        { text: "Hydrogen", correct: false },
    ]},
    { stage: 3, question: "Who is known as the father of modern chemistry?", answers: [
        { text: "Dmitri Mendeleev", correct: false },
        { text: "Antoine Lavoisier", correct: true },
        { text: "John Dalton", correct: false },
        { text: "Robert Boyle", correct: false },
    ]},
    { stage: 3, question: "Which planet has the most moons in the Solar System?", answers: [
        { text: "Saturn", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Uranus", correct: false },
        { text: "Neptune", correct: false },
    ]},
];


// ====================== Quiz Logic ======================
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const stageElement = document.getElementById("stage");
const timerElement = document.getElementById("timer");
const stageTimer = document.getElementById("stage-timer");

// Combine all stage questions
const allQuestions = [...stage1Questions, ...stage2Questions, ...stage3Questions];

let currentStage = 1;
let currentQuestions = stage1Questions;
let currentQuestionIndex = 0;
let score = 0;
let stageScores = {1:0,2:0,3:0,4:0};
let timer;
let timeLeft = 120;
let stageFinished = false;

// Start Quiz Button
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    stageTimer.style.display = "flex";
    questionElement.style.display = "block";
    answerButtons.style.display = "block";
    nextButton.style.display = "none";

    startStage(1);
});

// Start a stage
function startStage(stage){
    currentStage = stage;
    currentQuestionIndex = 0;
    score = 0;
    stageFinished = false;
    timeLeft = 120;

    switch(stage){
        case 1: currentQuestions = stage1Questions; break;
        case 2: currentQuestions = stage2Questions; break;
        case 3: currentQuestions = stage3Questions; break;
        case 4: currentQuestions = getRandomQuestions(10); break;
    }

    nextButton.innerHTML = "Next";
    startTimer();
    showQuestion();
}

// Get n random questions from allQuestions
function getRandomQuestions(n){
    const shuffled = [...allQuestions].sort(()=>0.5 - Math.random());
    return shuffled.slice(0, n);
}

// Shuffle answers
function shuffleAnswers(answers) {
    return [...answers].sort(() => Math.random() - 0.5);
}

function showQuestion(){
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    stageElement.innerHTML = `Stage ${currentStage} - ${getStageName(currentStage)}`;
    questionElement.innerHTML = `Q${currentQuestionIndex+1}: ${currentQuestion.question}`;

    const shuffledAnswers = shuffleAnswers(currentQuestion.answers);

    shuffledAnswers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    if(stageFinished) return;
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        stageScores[currentStage]++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(timeUp=false){
    resetState();
    stageFinished = true;
    if(timeUp){
        questionElement.innerHTML = `⏰ Time's up for Stage ${currentStage}! <br> You scored ${score} out of ${currentQuestions.length}`;
    } else {
        questionElement.innerHTML = `Stage ${currentStage} completed! <br> You scored ${score} out of ${currentQuestions.length}`;
    }
    clearInterval(timer);

    stageScores[currentStage] = score;

    if(currentStage < 4){
        nextButton.innerHTML = "Next Stage";
    } else {
        nextButton.innerHTML = "View Summary";
    }
    nextButton.style.display = "block";
}

function showSummary(){
    resetState();
    questionElement.innerHTML = `<h2>Quiz Summary</h2>`;
    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("summary");

    const stages = [
        { name: "Novice", score: stageScores[1], total: stage1Questions.length, class: "stage1" },
        { name: "Intermediate", score: stageScores[2], total: stage2Questions.length, class: "stage2" },
        { name: "Advanced", score: stageScores[3], total: stage3Questions.length, class: "stage3" },
        { name: "Final Random", score: stageScores[4], total: currentQuestions.length, class: "stage4" },
    ];

    stages.forEach(s=>{
        const percent = Math.round((s.score/s.total)*100);
        const stageHTML = `
            <p>${s.name}: ${s.score} / ${s.total} (${percent}%)</p>
            <div class="progress-container">
                <div class="progress-bar ${s.class}" style="width:${percent}%;"></div>
            </div>
        `;
        summaryDiv.innerHTML += stageHTML;
    });

    summaryDiv.innerHTML += `<p class="remark">${getFinalRemark()}</p>`;
    answerButtons.appendChild(summaryDiv);

    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";
}

function getFinalRemark(){
    const totalScore = stageScores[1]+stageScores[2]+stageScores[3]+stageScores[4];
    const totalQuestions = stage1Questions.length + stage2Questions.length + stage3Questions.length + 10;
    const percentage = Math.round(totalScore/totalQuestions*100);

    if(percentage === 100) return "Perfect Score! 🎉";
    if(percentage >= 80) return "Great Job! 👍";
    if(percentage >= 50) return "Good effort, keep practicing! 💪";
    return "Don't give up! Try again! ✨";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < currentQuestions.length){
        showQuestion();
    } else {
        showScore();
    }
}

// Next button listener with reset for Restart Quiz
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < currentQuestions.length && !stageFinished){
        handleNextButton();
    } 
    else if(currentStage === 4 && stageFinished){
        showSummary();
        currentStage++;
    }
    else if(nextButton.innerHTML === "Restart Quiz"){
        resetQuizToStart();
    } 
    else if(stageFinished){
        startStage(currentStage + 1);
    }
});

// Timer
function startTimer(){
    clearInterval(timer);
    timeLeft = 120;
    timerElement.innerHTML = formatTime(timeLeft);

    timer = setInterval(()=>{
        timeLeft--;
        timerElement.innerHTML = formatTime(timeLeft);
        if(timeLeft <= 0){
            clearInterval(timer);
            showScore(true);
        }
    }, 1000);
}

function formatTime(seconds){
    const min = Math.floor(seconds/60);
    const sec = seconds%60;
    return `${min}:${sec.toString().padStart(2,'0')}`;
}

function getStageName(stage){
    switch(stage){
        case 1: return "Novice";
        case 2: return "Intermediate";
        case 3: return "Advanced";
        case 4: return "Final Random";
    }
}

// Reset Quiz to initial state with only Start button
function resetQuizToStart() {
    stageTimer.style.display = "none";
    questionElement.style.display = "none";
    answerButtons.style.display = "none";
    nextButton.style.display = "none";

    startButton.innerHTML = "Start Quiz";
    startButton.style.display = "block";

    stageScores = {1:0,2:0,3:0,4:0};
    currentStage = 1;
    currentQuestionIndex = 0;
    score = 0;
}
