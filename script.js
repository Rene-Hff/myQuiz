let questions = [
{
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Berners-Lee",
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

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();

}

function showQuestion(){
    let question = questions[currentQuestion];
        document.getElementById('questiontext').innerHTML = question['question'];
        
}