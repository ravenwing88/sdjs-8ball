const DEFINITE = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];

const INDEFINITE = [
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "How dare you speak to me.",
    "I'm not going to tell you.",
    "You don't deserve to know.",
    "Run a Google search.",
    "Ask Jeeves."
];

const UNQUESTION = [
    "Is that a question?",
    "Questions only, please.",
    "Questions are identified by a question mark.",
    "What part of the word \"question\" don't you understand?"
];

const NOINPUT = [
    "*stares expectantly*",
    "Well?",
    "This is awkward.",
    "Please say something.",
    "You have to ask a question."
];

const SLOSH = new Audio("https://github.com/ravenwing88/sdjs-8ball/blob/main/sfx/Shaking5.wav?raw=true");

let question, length, answer;

console.log("\"Smart\" is both literal and colloquial.");
console.log("Literal in the sense that it can somewhat differentiate between simple and complex questions, as well as between open- and closed-ended questions.");
console.log("Colloquial in that sometimes it would rather just be snarky.");
console.log("Enjoy.")

// this function initiates a series of functions, starting with aesthetics
function shakeBall() {
    document.getElementById('fortune').innerHTML = ""; // remove 8-ball's message while it shakes
    document.getElementById('ball').id = "shakeball"; // change 8-ball's id "ball" to id "shakeball"
    SLOSH.play();
    setTimeout(() => { isInput(); }, 1800); // start determining how to reply after 1.8 seconds
}

// this function detects whether or not the user input anything at all
function isInput() {
    document.getElementById('shakeball').id = "ball"; // change 8-ball back to id "ball"

    question = document.getElementById('question').value;
    if (question === '') {
        let rand = Math.floor(Math.random() * NOINPUT.length);
        answer = NOINPUT[rand];
        outputAnswer();
    }
    else {
        // randomize whether to just mock the user or actually try to be a useful oracle
        let option = Math.floor(Math.random() * 10);
        if (option === 0)
            spongeBob();
        else
            isQuestion();
    }
}

// this function, called 10% of the time, just mocks the user, repeating their input back to them in SpongeBob casing
function spongeBob() {
    answer = ""; // clear the previous answer
    length = question.length;
    let letter;
    document.getElementById('fortune').innerHTML = "";
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            letter = question[i].toLowerCase(); // even is lower
        }
        else {
            letter = question[i].toUpperCase(); // odd is upper
        }
        answer = answer.concat(letter); // build the answer string letter by letter
    }
    outputAnswer();
}

// this function is just a snarky question mark detector
function isQuestion() {
    length = question.length - 1;
    if (question[length] === '?')
        closedEnded();
    else {
        let rand = Math.floor(Math.random() * UNQUESTION.length);
        answer = UNQUESTION[rand];
        outputAnswer();
    }
}

// this function tries to determine whether or not a yes or no question is being asked
// in this version I set the answers to only choose from the indefinite answer set
function closedEnded() {
    let word = question.split(/\W/); // split up the input word by word, including all non-alphabetical characters as word delineators
    let firstWord = word[0].toLowerCase(); // get the first word of the question
    // the six basic info gathering questions are most likely to be open-ended and can't be answered with a yes or no
    // beginning a question with 'if' also could potentially cause some confusion
    if (firstWord === 'who' || firstWord === 'what' || firstWord === 'when' || firstWord === 'where' || firstWord === 'why' || firstWord === 'how' || firstWord === 'if') {
        let rand = Math.floor(Math.random() * INDEFINITE.length);
        answer = INDEFINITE[rand];
        outputAnswer();
    }
    else
        fortuneTeller();
}

// this function determines the actual fortune, once all the criteria have been met
function fortuneTeller() {
    const PHRASES = DEFINITE.concat(INDEFINITE); // combine these two arrays
    let rand = Math.floor(Math.random() * PHRASES.length);
    answer = PHRASES[rand];
    outputAnswer();
}

// final function, regardless the output
function outputAnswer() {
    let message = document.getElementById('fortune');
    message.style.filter = "opacity(0)"; // make the answer invisible
    document.getElementById('question').value = ''; // empty the input field
    message.innerHTML = answer; // print the answer
    message.style.filter = "opacity(1)"; // make the answer visible again
    document.getElementById('fortune').id = "fadeinfortune"; // change fortune's id "fortune" to id "fadeinfortune"...
    setTimeout(() => { document.getElementById('fadeinfortune').id = "fortune"; }, 500); // ...and back again in half a second
}