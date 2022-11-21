window.addEventListener("DOMContentLoaded", main);
/** Defines Varialbles  */
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
let buttonStartOver;
let username = "";
/** Start of the program */
function main() {
    loadHtmlElements()
    loadStartStage()
}
/** Defines Varialbles for them to work in the story telling */
function loadHtmlElements() {
    textStart = document.getElementById('textStart');
    text1 = document.getElementById('text-1');
    Start = document.getElementById('startStage');
    firstStage = document.getElementById('theAdventure');
    input = document.getElementById('name-input');
    button1 = document.getElementById('opt-Start');
    button2 = document.getElementById('opt-1');
    button3 = document.getElementById('opt-2');
    savedInput = document.getElementById('input');
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
    button1.onclick = saveNameAndContinue;
}
/** User gets to choose his & her username at the Start */
function saveNameAndContinue(){
    let savedInput = document.getElementById("input");
    username = input.value
    input.value = "";
    loadTheAdventure();
}
/** First Scene tells the task to be upfild */
function loadTheAdventure(){
    firstStage.classList.remove("hidden");
    Start.classList.add("hidden");
    startOver.classList.add("hidden");
    label.classList.add("hidden");
    input.classList.add("hidden");

    text1.textContent = "Aslan needs "+ username +" help to retrieve his almighty nail file, he needs it to win a war he has been fighting for over thousand years, tight claws. Do you accept this important assignment?"

    button2.textContent = "I "+ username +" accept this most important assignment."
    button2.onclick = loadAcceptStage;

    button3.textContent = "I'd rather go back into the closet."
    button3.onclick = loadRatherStage;
}
/** Second Scene 1a let you choose betwen tow objects*/
function loadAcceptStage(){
    text1.textContent = "Asland informs you that he has traced the almighty nail file to a village of black elves, and that he is unable to retrieve it himself as his paws hurt too much. He gives you the choice of taking his mighty sword or a magician's bag withe you."

    button2.textContent = "I choose to take with me the mighty sword"
    button2.onclick = loadVillageStage;

    button3.textContent = "I choose to take the magic bag"
    button3.onclick = loadVillageStage2;
}
/** Second Scene 2a traying to convince you to do the assignment*/
function loadRatherStage(){
    text1.textContent = "You will be well rewarded for your heroism"

    button2.textContent = "Okey I accept the assignment."
    button2.onclick = loadAcceptStage;

    button3.textContent = "Aslan bites off your head for your disrespectfulness."
    button3.onclick = returnToStart;
}   
    /** third Scene 1a You choose in which way you want to carry out the assignment if you chose the sword*/
function loadVillageStage(){
    text1.textContent = "When you arrive in the black elfs village you realize that it is the king of black elfs who stole the nail file, what will you do to seek him out?"

    button2.textContent = "I will seek an audience with him and ask him to return Aslans nail file"
    button2.onclick = loadAudienceStage;

    button3.textContent = "I will break into the throne room and force him to hand over Aslans nail file"
    button3.onclick = loadFightStage;
}
    /** third Scene 1b you choose in which way you want to carry out the assignment if you chose the bag*/
    function loadVillageStage2(){
    text1.textContent = "When you arrive in the black elfs village you realize that it is the king of black elfs who stole the nail file, what will you do to seek him out?"
    
    button2.textContent = "I will seek an audience with him and ask him to return Aslans nail file"
    button2.onclick = loadAudienceStage2;
    
    button3.textContent = "I will break into the throne room and force him to hand over Aslans nail file"
    button3.onclick = loadFightStage2;
}    
/** Fourth Scene 1a the king gives you two options if you chose the sword*/
function loadAudienceStage(){
    text1.textContent = "The black elvis king grants your request for an audience with him and he informs you that there are only two ways for you to retrieve the almighty nail file."

    button2.textContent = "By fighting to the death."
    button2.onclick = loadFightStage;

    button3.textContent = "Or to exchange it for something equally viluable."
    button3.onclick = loadExchangeStageSword;
}
/** Fourth Scene 1b the king gives you two options if you chose the bag*/
function loadAudienceStage2(){
    text1.textContent = "The black elvis king grants your request for an audience with him and he informs you that there are only two ways for you to retrieve the almighty nail file."

    button2.textContent = "By fighting to the death."
    button2.onclick = loadFightStage;

    button3.textContent = "Or to exchange it for something equally viluable."
    button3.onclick = loadExchangeStageBag2;
}
/** Third Scene 2a you daid */
  function returnToStart(){
      startOver.classList.remove("hidden");
      firstStage.classList.add("hidden");

      textStartOver.textContent = "Your head was cut off"

      buttonStartOver.textContent = "Start over"
      buttonStartOver.onclick = loadStartStage;
}
/** Fourth Scene 2a You daid if you chose the sword*/
function loadFightStage(){
    startOver.classList.remove("hidden");
    firstStage.classList.add("hidden");

    textStartOver.textContent = "A battle breaks out and you have the upper hand, but the king is cunning and cannot be trusted. and before you know it you are on the ground with an arrow through the chest dying."

    buttonStartOver.textContent = "Start over"
    buttonStartOver.onclick = loadStartStage;
}
/** Fourth Scene 2b You daid if you chose the bag*/
function loadFightStage2(){
    startOver.classList.remove("hidden");
    firstStage.classList.add("hidden");

    textStartOver.textContent = "A battle breaks out and you have the upper hand, but the king is cunning and cannot be trusted. and before you know it you are on the ground with an arrow through the chest dying."

    buttonStartOver.textContent = "Start over"
    buttonStartOver.onclick = loadStartStage;
}
/** Fainel Scene whith the sword */
function loadExchangeStageSword(){
    firstStage.classList.remove("hidden");
    Start.classList.add("hidden");
    startOver.classList.add("hidden"); 

    text1.textContent = "You ask if the king could consider this sword in exchange for the nail file.The king agrees to the exchange and Aslan rewards you for a job well done."

    button2.textContent = "Congratulations " + username +"."
    button2.onclick = loadStartStage;

    button3.textContent = "Start Over."
    button3.onclick = loadStartStage;
}
/** Fainel Scene whith the bag */
function loadExchangeStageBag2(){
    firstStage.classList.remove("hidden");
    Start.classList.add("hidden");
    startOver.classList.add("hidden"); 

    text1.textContent = "You open the magic bag and sees an exact copy of Aslans nail file and tells the king why steal someone else's when you can have your own. The king agrees to the exchange and Aslan rewards you for a job well done."

    button2.textContent = "Congratulations " + username +"."
    button2.onclick = loadStartStage;

    button3.textContent = "Start Over."
    button3.onclick = loadStartStage;
}