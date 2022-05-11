var startButton = $("#startBtn");
var questionContainer = $("quizQuestions");
var quizResult = $("#results")
var currentQuestion = -1;

var questions = [
    {
        question: "Question 1",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
        ]
    },
    {
        question: "Question 2",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
        ]
    },

    {
        question: "Question 3",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
        ]
    }
]

function start() {
    nextQuestion();
}



function nextQuestion() {
    currentQuestion++;
    $("#q1").text(questions[currentQuestion].question);
    $("#opt1").text(questions[currentQuestion].answers[0].text);
    $("#opt1").off("click");
    $("#opt1").on("click", function () {
        if (questions[currentQuestion].answers[0].correct)
            correct();
        else {
            incorrect();
        }
    });
    $("#opt2").text(questions[currentQuestion].answers[1].text);
    $("#opt2").off("click");
    $("#opt2").on("click", function () {
        if (questions[currentQuestion].answers[1].correct)
            correct();
        else {
            incorrect();
        }
    });
    $("#opt3").text(questions[currentQuestion].answers[2].text);
    $("#opt3").off("click");
    $("#opt3").on("click", function () {
        if (questions[currentQuestion].answers[2].correct)
            correct();
        else {
            incorrect();
        }
    });

}


function correct() {
    console.log("correct");
    alert("Correct");
    nextQuestion();
}
function incorrect() {
    console.log("incorrect")
    alert("Incorrect")
    nextQuestion();
}

startButton.on("click", start)