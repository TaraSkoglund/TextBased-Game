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
/** Entery Scene */
function loadStartStage(){
    Start.classList.remove("hidden");
    label.classList.remove("hidden");
    input.classList.remove("hidden");
    firstStage.classList.add("hidden");
    startOver.classList.add("hidden");

    textStart.textContent = "Welcome to Narnia where everything is possible!"

    button1.textContent = "Start your journey!!!"
    button1.addEventListener('click',loadTheAdventure);
}
/** First Scene */
function loadTheAdventure(){
    firstStage.classList.remove("hidden");
    Start.classList.add("hidden");
    startOver.classList.add("hidden");
    label.classList.add("hidden");
    input.classList.add("hidden");
    // document.getElementById("input".value = "");

    text1.textContent = "Aslan needs your help to retrieve his almighty nail file, he needs it to win a war he has been fighting for over thousand years, tight claws. Do you accept this important assignment?"

    button2.textContent = "I accept this most important assignment."
    button2.addEventListener('click',loadAcceptStage);

    button3.textContent = "I'd rather go back into the closet."
    button3.addEventListener('click',loadRatherStage);
}
/** Second Scene 1a */
function loadAcceptStage(){
    text1.textContent = "Asland informs you that he has traced the almighty nail file to a village of black elves, and that he is unable to retrieve it himself as his paws hurt too much. He gives you the choice of taking his mighty sword or a magician's bag withe you."

    button2.textContent = "I choose to take with me the mighty sword"
    button2.addEventListener('click',loadVillageStage);

    button3.textContent = "I choose to take the magic bag"
    button3.addEventListener('click',loadVillageStage);
}
/** Second Scene 2a */
function loadRatherStage(){
    text1.textContent = "You will be well rewarded for your heroism"

    button2.textContent = "Okey I accept the assignment."
    button2.addEventListener('click',loadAcceptStage);

    button3.textContent = "Aslan bites off your head for your disrespectfulness."
    button3.addEventListener('click',returnToStart);
}   
    /** third Scene 1a*/
function loadVillageStage(){
    text1.textContent = "When you arrive in the black elfs village you realize that it is the king of black elfs who stole the nail file, what will you do to seek him out?"

    button2.textContent = "I will seek an audience with him and ask him to return Aslans nail file"
    button2.addEventListener('click',loadAudienceStage);

    button3.textContent = "I will break into the throne room and force him to hand over Aslans nail file"
    button3.addEventListener('click',loadFightStage);
}
/** Fourth Scene 1a */
function loadAudienceStage(){
    text1.textContent = "The black elvis king grants your request for an audience with him and he informs you that there are only two ways for you to retrieve the almighty nail file."

    button2.textContent = "By fighting to the death."
    button2.addEventListener('click',loadFightStage);

    button3.textContent = "Or to exchange it for something equally viluable."
    button3.addEventListener('click',loadExchangeStageBag);
}
/** Third Scene 2a */
  function returnToStart(){
      startOver.classList.remove("hidden");
      firstStage.classList.add("hidden");

      textStartOver.textContent = "Your head was cut off"

      buttonStartOver.textContent = "Start over"
      buttonStartOver.addEventListener('click',loadStartStage);
}
/** Fourth Scene 2a */
function loadFightStage(){
    startOver.classList.remove("hidden");
    firstStage.classList.add("hidden");

    textStartOver.textContent = "A battle breaks out and you have the upper hand, but the king is cunning and cannot be trusted. and before you know it you are on the ground with an arrow through the chest dying."

    buttonStartOver.textContent = "Start over"
    buttonStartOver.addEventListener('click',loadStartStage);
}
/** Fainel Scene whith the bag */
function loadExchangeStageBag(){
    
    firstStage.classList.remove("hidden");
    Start.classList.add("hidden");
    startOver.classList.add("hidden"); 

    text1.textContent = "You open the magic bag and sees an exact copy of Aslans nail file and tells the king why steal someone else's when you can have your own. The king agrees to the exchange and Aslan rewards you for a job well done."

    button2.textContent = "Congratulations."
    button2.addEventListener('click',loadStartStage);

    button3.textContent = "Start Over."
    button3.addEventListener('click',loadStartStage);
}
/** Fainel Scene whith the sword */
function loadExchangeStageSword(){

    firstStage.classList.remove("hidden");
    Start.classList.add("hidden");
    startOver.classList.add("hidden"); 

    text1.textContent = "You ask if the king could consider this sword in exchange for the nail file.The king agrees to the exchange and Aslan rewards you for a job well done."

    button2.textContent = "Congratulations."
    button2.addEventListener('click',loadStartStage);

    button3.textContent = "Start Over."
    button3.addEventListener('click',loadStartStage);
}