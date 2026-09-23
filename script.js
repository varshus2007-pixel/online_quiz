const questions = [
    {
        question: "What is HTML used for?",
        options: [
            "Creating web pages",
            "Editing photos",
            "Playing music",
            "Creating databases"
        ],
        answer: "Creating web pages"
    },

    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Computer Style System",
            "Creative Style Sheets",
            "Colorful Style System"
        ],
        answer: "Cascading Style Sheets"
    },

    {
        question: "Which language is used to create dynamic web pages?",
        options: [
            "HTML",
            "CSS",
            "PHP",
            "Photoshop"
        ],
        answer: "PHP"
    },

    {
        question: "Which symbol is commonly used for comments in JavaScript?",
        options: [
            "//",
            "##",
            "**",
            "%%"
        ],
        answer: "//"
    },

    {
        question: "Which language is mainly used to style web pages?",
        options: [
            "CSS",
            "HTML",
            "PHP",
            "MySQL"
        ],
        answer: "CSS"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");

function loadQuestion() {

    selectedAnswer = "";

    const current = questions[currentQuestion];

    questionElement.textContent =
        (currentQuestion + 1) + ". " + current.question;

    optionsElement.innerHTML = "";

    current.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        button.onclick = function() {

            document.querySelectorAll(".option").forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            selectedAnswer = option;
        };

        optionsElement.appendChild(button);
    });
}

function nextQuestion() {

    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        document.getElementById("quiz").style.display = "none";

        document.getElementById("result").style.display = "block";

        document.getElementById("score").textContent =
            score + " / " + questions.length;
    }
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz").style.display = "block";

    document.getElementById("result").style.display = "none";

    loadQuestion();
}

loadQuestion();