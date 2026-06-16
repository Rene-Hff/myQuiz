let questions = [
{
    "question": "Wer hat die Marke Apple erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Steve Jobs",
    "answer_4": "Justin Bieber",
    "right_answer": 3
},
{
    "question": "Wer wurde 2002 Fußball Weltmeister?",
    "answer_1": "Brasilien",
    "answer_2": "Italien",
    "answer_3": "Frankreich",
    "answer_4": "Deutschland",
    "right_answer": 1
},
{
    "question": "Wie hieß der grüne Power-Ranger?",
    "answer_1": "Jason",
    "answer_2": "Zachy",
    "answer_3": "Billy",
    "answer_4": "Tommy",
    "right_answer": 4
},
{
    "question": "Wer spielt Horst Schlämmer?",
    "answer_1": "Hape Kerkeling",
    "answer_2": "Stefan Raab",
    "answer_3": "Günther Jauch",
    "answer_4": "Thomas Müller",
    "right_answer": 1
},
{
    "question": "Wer gewann den SuperBowl LX 2026?",
    "answer_1": "Kansas City Chiefs",
    "answer_2": "Seattle Seahawks",
    "answer_3": "New England Patriots",
    "answer_4": "New York Jets",
    "right_answer": 2
},
{
    "question": "What's my Age again, sang welche Band? ",
    "answer_1": "SUM41",
    "answer_2": "BLINK182",
    "answer_3": "The Offspring",
    "answer_4": "Die Toten Hosen",
    "right_answer": 2
},
{
    "question": "Welchen Namen trug eine bekannte Biene?",
    "answer_1": "Anja",
    "answer_2": "Sarah",
    "answer_3": "Maja",
    "answer_4": "Tanja",
    "right_answer": 3
},
];

let rightQuestions = 0;
let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    if(gameIsOver()){
        showEndScreen();
    } else{
        updateProgressBar();
        updatToNextQuestion();
    }   
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function showEndScreen(){
        document.getElementById('endscreen').style = '';
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('right-answers').innerHTML = rightQuestions;
        document.getElementById('questions-all').innerHTML = questions.length;
        document.getElementById('header-img').src = 'img/trophy.png';
}

function updatToNextQuestion(){
        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion +1; // get the current question varible 
        document.getElementById('questiontext').innerHTML = question['question'];  // Questions div
        document.getElementById('answer_1').innerHTML = question['answer_1'];      // Answer div
        document.getElementById('answer_2').innerHTML = question['answer_2'];      // Answer div
        document.getElementById('answer_3').innerHTML = question['answer_3'];      // Answer div
        document.getElementById('answer_4').innerHTML = question['answer_4'];      // Answer div
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
            percent = Math.round(percent*100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
}


function answer(selection){
    let question = questions[currentQuestion];                      // variable question get the first index and their first index of the object in that array
    let selectedQuestionNumber = selection.slice(-1);               // get the last character off the element with the .slice() method
    let idOfRightAnswer = `answer_${question['right_answer']}`;     // idOfRightAnswer get the id of the right answer

        if(rightAnswerSelected(selectedQuestionNumber, question)){
            document.getElementById(selection).parentNode.classList.add('bg-success');
            rightQuestions++;
        } else{
            document.getElementById(selection).parentNode.classList.add('bg-danger');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        }
            document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question){
    return  selectedQuestionNumber == question['right_answer'];
}

function nextQuestion(){
    currentQuestion++;      // count the questions 
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons(){
        document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_1').parentNode.classList.remove('bg-success');
        document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_2').parentNode.classList.remove('bg-success');
        document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_3').parentNode.classList.remove('bg-success');
        document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

 function restartGame(){
    document.getElementById('header-img').src = 'img/quiz_image.jpg';
    document.getElementById('question-body').style = '';           // questionbody anzeigen
    document.getElementById('endscreen').style = 'display: none'; // Endscreen ausblende
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}