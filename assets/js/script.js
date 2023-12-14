document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            //"this" refers to that button user clicked
            //for instance if we click submit button then "this" refers to sumbit button
            if (this.getAttribute("data-type") === "submit") {
                alert("submit button clicked")
            } else {
                let gameType = this.getAttribute("data-type");
                alert("you clicked ${gameType}")
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function displayAdditionalQuestions () {
    
}

function displaySubtractQuestions () {
    
}

function displayMultiplyQuestions () {
    
}

