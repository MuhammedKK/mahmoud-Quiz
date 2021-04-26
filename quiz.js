/**
 * Imports First Quiz : Rewrite The Sentence 
 */

 let score = 0;

 const quizData = [
     {
         question: "انا احب الكورة جدا",
         answer: "I love football so much",
     },
     {
         question: "انا احب الاكل جدا",
         answer: "I love food so much",
     }
 ];
 
 // Define Current Quiz
 let currentQuiz = 0;
 const loadQuiz = () => {
 
     // Get The Data Of The Current Quiz
     let currentQuizData = quizData[currentQuiz];
 
     // Get The Current Quiz Question
     let question = document.querySelector(".quiz-question").textContent = currentQuizData.question;
 
 };

 loadQuiz();

// check the answer after submitted

$(".re").on("click", () => {
    let ans = $(".quiz-ans"); // get the answer

    // check if answer right or not
    if (ans.val() == quizData[currentQuiz].answer) {
        score++;
        console.log(score);
    } else if (ans.val() == "") {
        $(".err").fadeIn().addClass("alert alert-danger").text("Filed Cannot be empty").delay(1000).fadeOut(500);
        return;
        // console.log("not")
    }
    // get next question
    currentQuiz++;

    // Check If it's Not The Final Quiz
    if (currentQuiz < quizData.length) {
        ans.val("");
        loadQuiz();
    } else {
        document.querySelector(".quizes-cont").innerHTML = `
            <div class="card">
                <div class="card-header">
                Your Quiz Result
                </div>
                <div class="card-body">
                    <h5 style="direction:ltr;text-align:center;" class="card-title quiz-question">Your Score is ${score + "/" + quizData.length}</h5>
                    <label for="">Go To Next Quiz</label>
                    <a href="#!" class="btn btn-primary send-ans">Next</a>
                </div>
            </div>
        `;
    }
});


/**
 * Complete Quiz
 */

let completeQuizData = [
    {
        question: "I ___ playing football",
        answer: "love",
    },
    {
        question: "We ___ playing football",
        answer: "are",
    }
];

// define score
let compScore = 0; 

// Define Current Quiz
let currentCompQuiz = 0;
const loadQuizComp = () => {

    // Get The Data Of The Current Quiz
    let compData = completeQuizData[currentCompQuiz];

    // Get The Current Quiz Question
    let question = document.querySelector(".comp-question").textContent = compData.question;

};

loadQuizComp();

// check the answer after submitted

$(".send-ans").on("click", () => {
    let ans = $(".comp-ans"); // get the answer

    // check if answer right or not
    if (ans.val() == completeQuizData[currentCompQuiz].answer) {
        compScore++;
        console.log(compScore);
    } else if (ans.val() == "") {
        $(".err").fadeIn().addClass("alert alert-danger").text("Filed Cannot be empty").delay(1000).fadeOut(500);
        return;
        // console.log("not")
    }
    // get next question
    currentCompQuiz++;

    // Check If it's Not The Final Quiz
    if (currentCompQuiz < completeQuizData.length) {
        ans.val("");
        loadQuizComp();
    } else {
        document.querySelector(".quizes-cont").innerHTML = `
            <div class="card">
                <div class="card-header">
                Your Quiz Result
                </div>
                <div class="card-body">
                    <h5 style="direction:ltr;text-align:center;" class="card-title comp-question">Your Score is ${compScore + "/" + completeQuizData.length}</h5>
                    <label for="">Go To Next Quiz</label>
                    <a href="#!" class="btn btn-primary send-ans">Next</a>
                </div>
            </div>
        `;
    }
});