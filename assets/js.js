var startButton = $("#startBtn");
var questionContainerEl = $("quizQuestions");

startButton.on("click", start)

function start() {
    nextQuestion()
    console.log("started")
}

function nextQuestion() {

}

function selectAnswer() {

}

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
    }
]

$("#q1").text(questions[0])
$("#opt1").text(questions[0].answers[0].text);
$("#opt2").text(questions[0].answers[1].text);
$("#opt3").text(questions[0].answers[2].text);

