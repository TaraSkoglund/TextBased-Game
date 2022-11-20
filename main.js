window.addEventListener("DOMContentLoaded", main);

let textStart;
let text1;
let Start;
let firstStage;
let input;
let button1;
let button2;
let button3;
let savedInput;
let label;
let startOver;
let textStartOver;
let buttonStartOver

function main() {
    loadHtmlElements()
    loadStartStage()
}

function loadHtmlElements() {
    textStart = document.getElementById('textStart');
    text1 = document.getElementById('text-1');
    Start = document.getElementById('startStage');
    firstStage = document.getElementById('theAdventure');
    input = document.getElementById('name-input');
    button1 = document.getElementById('opt-Start');
    button2 = document.getElementById('opt-1');
    button3 = document.getElementById('opt-2');
    savedInput = document.getElementById('input'.value);
    label = document.getElementById('label-text');
    startOver = document.getElementById('startOver');
    textStartOver = document.getElementById('text-startOver');
    buttonStartOver = document.getElementById('opt-startOver');
}


