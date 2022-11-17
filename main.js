window.addEventListener("DOMContentLoaded", main); 

function main() {
    loadHtmlElements
}

function loadHtmlElements() {
    let story = 0;
    let form = document.getElementById('theAdventure');
    let input = document.getElementById('name-input');
    let button1 = document.getElementById('opt-1');
    let button2 = document.getElementById('opt-2');
    let answer = '';
}

let story_telling = {
    "start":{
        "question": "Aslan needs your help to retrieve his almighty nail file, he needs it to win a war he has been fighting for over thousand years, tight claws. Do you accept this important assignment?",
        "answers":{
            "a": "I accept this most important assignment.",
            "b": "I'd rather go back into the closet."
        }
    },

    /** I Accept Path */
    "1_a":{
        "question": "Asland informs you that he has traced the almighty nail file to a village of black elves, and that he is unable to retrieve it himself as his paws hurt too much. He gives you the choice of taking his mighty sword or a mage's bag withe you.",
        "answers":{
            "a": "I name choose to take with me the mighty sword",
            "b": "I name choose to take the magician's bag with me"
        }
    },

    /** To The Closet Path */
    "1_b":{
        "question": "You will be well rewarded for your heroism",
        "answers":{
            "a": "Okey I accept the assignment.",
            "b": "Aslan bites off your head for your disrespectfulness."
        }
    }
};


