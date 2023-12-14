document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            //"this" refers to that button user clicked
            //for instance if we click submit button then "this" refers to sumbit button
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * The function runGame "loop" called
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionalQuestions(num1, num2)
    } else {
        alert(`not known game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * checks if users answer is equal to first element in the array
 */
function checkAnswer() {
        // retrieving it from the DOM
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("great job!! :D");
    } else {
        alert(`damn, you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
} 

/**
 * Gets operands(numbers) and the operators(+, -, *, / etc)
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById(`operand1`).innerText);
    let operand2 = parseInt(document.getElementById(`operand2`).innerText);
    let operator = document.getElementById(`operator`).innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting!`
    }
}

function incrementScore() {

}

function displayAdditionalQuestions (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestions () {
    
}

function displayMultiplyQuestions () {
    
}