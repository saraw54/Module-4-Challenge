var startButton = $("#startBtn");
var questionContainer = $("#quizQuestions");
var answerShow = $("#answerContainer");
var timeCountdown = $(".time");
var secondsLeft = 60;
var currentQuestion = -1;
var answersCorrect = 0;
var score = $("#score");
var submitBtn = $("#submitBtn");
var scoreTable = $(".scoreTable");

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeCountdown.text(secondsLeft + " seconds left to finish quiz");

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            quizOver()
        }

    }, 1000);
}

//quiz questions and potential answers
var questions = [
    {
        question: "What was the first name of the killer in Friday the 13th (1980)?",
        answers: [
            { text: "Pamela", correct: true },
            { text: "Jason", correct: false },
            { text: "Michael", correct: false },
        ]
    },
    {
        question: "In what movie was the killer dressed as William Shatner?",
        answers: [
            { text: "Dressed to Kill", correct: false },
            { text: "Scream", correct: false },
            { text: "Halloween", correct: true },
        ]
    },

    {
        question: "What is Chucky's (Child's Play) real name?",
        answers: [
            { text: "Charles Lee Ray", correct: true },
            { text: "Charlie Fisher", correct: false },
            { text: "Carton D'Melio", correct: false },
        ]
    },

    {
        question: "What town does Freddy Krueger terrorize?",
        answers: [
            { text: "Jacksonville", correct: false },
            { text: "Barstow", correct: false },
            { text: "Springfield", correct: true },
        ]
    }
]

//calls questions/hides start and shows questions/starts timer
function start() {
    startButton.hide();
    answerShow.show()
    answerShow.attr("style", "display:flex");
    nextQuestion();
    setTime();
}
//calls next question
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

//responds to correct answer
function correct() {
    console.log("correct");
    answersCorrect++;
    if (currentQuestion >= questions.length - 1) {
        quizOver();
    }
    else {
        nextQuestion();
    }

}
//responds to incorrect answers
function incorrect() {
    console.log("incorrect");
    if (currentQuestion >= questions.length - 1) {
        quizOver();
    }
    else {
        nextQuestion();
    }

}
//show score upon completion
function updateScore() {
    if (answersCorrect >= 0) {
        score.text("Your score is " + answersCorrect);
    }
}

//when all questions are answers, hides questions and timer
function quizOver() {
    answerShow.hide();
    questionContainer.hide();
    timerInterval = 0;
    timeCountdown.hide();
    updateScore();
    submitBtn.show();
    // table.show();
}

function submitScore() {
    console.log("submitScore");
    var scoreTableData = localStorage.getItem("highScores");
    if (scoreTableData === null) {
        scoreTableData = [];
    }
    else {
        scoreTableData = JSON.parse(scoreTableData)
    }

    scoreTableData.push(answersCorrect);
    localStorage.setItem("highScores", JSON.stringify(scoreTableData));
}

// scoreTable = $("highScores");
// for (var i = 1; i < 1; i++) { }


//starts quiz
startButton.on("click", start)

