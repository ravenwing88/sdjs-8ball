let question, length;

// this function detects whether or not the user input anything at all
function isInput() {
    question = document.getElementById('question').value;
    if (question === '') {
        jQuery.get('noinput.txt', function(data)) 

        // let answer = Math.floor(Math.random() * NOINPUT.length);
        // document.getElementById('fortune').innerHTML = NOINPUT[answer];
    }
    else {
        // randomize whether to just mock the user or actually try to be a useful oracle
        let option = Math.floor(Math.random() * 10);
        if (option === 0)
            // spongeBob();
            console.log("Run spongeBob()");
        else
            // isQuestion();
            console.log("Run isQuestion()");
    }
}

/*
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
*/