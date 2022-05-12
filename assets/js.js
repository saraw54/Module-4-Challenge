var startButton = $("#startBtn");
var questionContainer = $("quizQuestions");
var quizResult = $("#results")
var timeCountdown = $(".time")
var secondsLeft = 15;
var currentQuestion = -1;
var answersCorrect = 0;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeCountdown.text(secondsLeft + " seconds left to finish quiz");

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            quizOver()
        }

    }, 1000);
}


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
    }
]

//calls questions
function start() {
    nextQuestion();
    setTime();
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

//responds to correct answer
function correct() {
    console.log("correct");
    answersCorrect++;
    nextQuestion();
}
//responds to incorrect answers
function incorrect() {
    console.log("incorrect");

    nextQuestion();
}

function quizOver() {
    $("#bodyID").empty();
    score();
}

function score() {
    $("#bodyID").html("<div> Final Score <br>" + answersCorrect + " </div >"
        + "<div> <button type=\"button\" class=\"option\">Submit</button>")
        ;
}

//starts quiz
startButton.on("click", start)
