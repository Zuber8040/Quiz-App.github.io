const quizData=[
    {
        question:"Q.1 Which state produces maximum soybean?",
        a: 'MadhyaPradesh',
        b: "UttarPradesh",
        c: "Bihar",
        d: "Rajasthan", 
        correct:"a",
    },
    {
        question:"Q.2 Which country operationalized world's largest radio telescope?",
        a: "USA",
        b: "China",
        c: "Russia",
        d: "India",
        correct:"b",
    },
    {
        question:"Q.3 Which of the following is the capital of Arunachal Pradesh?",
        a: "Itanagar",
        b: "Dispur",
        c: 'Imphal',
        d: "Panaji",
        correct:'a',
    },
    {
        question:"Q.4 Katerina Sakellaropoulou was elected the first woman President of ",
        a: "Greece",
        b: "Spain",
        c: "Finland",
        d: "Netherland",
        correct:"a",
    },
    {
        question:"Q.5 Which one among the following radiations carries maximum energy?",
        a: "UltravioletRays",
        b: "GammaRays",
        c: "X- rays",
        d: "Infra-redRays",
        correct:"b",
    },
];



const answersEls = document.querySelectorAll(".answer");

const quiz = document.querySelector("#quiz");

const questionEl = document.getElementById('question');

const a_text = document.querySelector("#a_text");
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');

const submitBTN = document.querySelector("#submit");

let currentScore= 0;
// let answer = undefined;
let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    deSelect();
    const currentQuizData  = quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    
    a_text.innerText= currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    
}
function getSelected(){
    let answer = undefined; 
    answersEls.forEach((answerEL)=>{
        if(answerEL.checked){
                answer= answerEL.id;
        }
    })
    return answer;
}

function deSelect(){
    
    answersEls.forEach((answerEL)=>{
        answerEL.checked=false;
    });
}

submitBTN.addEventListener("click",()=>{
   
    // check to see the answer 
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            currentScore++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2> You answer correctly at ${currentScore}/${quizData.length} questions</h2> <button onClick="location.reload()">Reload</button>`;
        };
    }
});
