const PHRASES = [
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
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "How dare you speak to me.",
    "I'm not going to tell you.",
    "You don't deserve to know.",
    "Run a Google search.",
    "Ask Jeeves."
];

const UNQUESTION = [
    "Is that a question?",
    "Questions only, please.",
    "Questions are identified by a question mark."
]

const OPENEND = [
    "I don't understand the question.",
    "No open-ended questions, please.",
    "\"Yes\" or \"no\" questions only."
]

const NOINPUT = [
    "*stares expectantly*",
    "Well?",
    "This is awkward.",
    "Please say something.",
    "You have to ask a question."
]

let question, length;

console.log("\"Smart\" is both literal and colloquial.");
console.log("Literal in the sense that it can somewhat differentiate between simple and complex questions, as well as between open- and closed-ended questions.");
console.log("Colloquial in that sometimes it would rather just be snarky.");
console.log("Enjoy.")

// this function detects whether or not the user input anything at all
function isInput() {
    question = document.getElementById('question').value;
    if (question === '') {
        let answer = Math.floor(Math.random() * NOINPUT.length);
        document.getElementById('fortune').innerHTML = NOINPUT[answer];
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
        document.getElementById('fortune').append(letter);
    }
}

// this function is just a snarky question mark detector
function isQuestion() {
    length = question.length - 1;
    if (question[length] === '?')
        closedEnded();
    else {
        let answer = Math.floor(Math.random() * UNQUESTION.length);
        document.getElementById('fortune').innerHTML = UNQUESTION[answer];
    }
}

// this function tries to determine whether or not a yes or no question is being asked
function closedEnded() {
    let word = question.split(' '); // split up the input word by word
    let firstWord = word[0].toLowerCase(); // get the first word of the question
    // these six words are most likely to weed out open-ended questions
    if (firstWord === 'who' || firstWord === 'what' || firstWord === 'when' || firstWord === 'where' || firstWord === 'why' || firstWord === 'how') {
        let answer = Math.floor(Math.random() * OPENEND.length);
        document.getElementById('fortune').innerHTML = OPENEND[answer];
    }
    // the smart 8-ball doesn't like qualifiers
    else if (firstWord === 'if')
        document.getElementById('fortune').innerHTML = "Can we keep this simple? Please?";
    else
        fortuneTeller();
}

// this function tells the actual fortune, once all the criteria have been met
function fortuneTeller() {
    let answer = Math.floor(Math.random() * PHRASES.length);
    document.getElementById('fortune').innerHTML = PHRASES[answer];
}