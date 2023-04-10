const quizData = [
    {
        question: "How can I put CSS into HTML code?",
        a: "Using the link element",
        b: "Using the script element",
        c:  "Calling a function",
        d:  "Creating a variable",
        correct: "a"
    }, 
    {
        question: "How can I put JavaScript into HTML code?",
        a: "Using the link element",
        b: "Using the script element",
        c:  "Calling a function",
        d:  "Creating a variable",
        correct: "b"
    }, 
    {
        question: "What CSS stands for?",
        a: "Hypertext Markup Language",
        b: "JavaScript Object Notation",
        c: "Cascading Style Sheets",
        d: "Cambrige Style Standard",
        correct: "c"
    }, 
    {
        question: "Who is the father of the W3?",
        a: "Steve Jobs",
        b: "Bill Gates",
        c: "Elon Musk",
        d: "Tim Berners-Lee",
        correct: "d"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    // everytime a new question is loaded, the answers are deselected
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// check if the radio input was checked AKA answer was given
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// Function to deselect the radio inputs
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// EventListener to the submit button 
// Must: change question, check answer via 'getSelected', update score and print result at the end 
submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly to ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
