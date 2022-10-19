let pScore = 0;
let cScore = 0;

const options = ["rock","paper","scissors"]; //buttoncolours
const cOptions = []; //gamePattern
const pOptions = []; //userClickedPattern


//Start the game
$(".options").on("click", clickedByUser);

function clickedByUser() {
    const playerChoose = this.id;
    const ranPlayerImg = "icon-"+playerChoose+".svg";
    const playerRandomimageSource ="images/" + ranPlayerImg;
    pOptions.push(playerChoose);

    const pElement = document.getElementById("p-move");
    pElement.setAttribute("src", playerRandomimageSource);
    pElement.textContent = pScore;


    const randomCompOption = Math.floor(Math.random() * 3);
    const cRandom = options[randomCompOption];
    const ranCompImg = "icon-"+cRandom+".svg";
    const compRandomimageSource ="images/" + ranCompImg;

    cOptions.push(cRandom);

    const cElement=document.getElementById("c-move");
    cElement.setAttribute("src", compRandomimageSource);



compare(playerChoose, cRandom);
updateScore();
checkWinner()
};


//Update the scores
function updateScore() {
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;

}


//Compare choices of Player and Computer
function compare(playerChoose,cRandom) {
    
    if (playerChoose === cRandom) {
        $("#status").text("It's a Tie");
        return;
    }

    if (playerChoose === "rock") {
        if (cRandom === "scissors") {
            $("#status").text("Player Wins");
            pScore++;
        } else {
            $("#status").text("Computer Wins");
            cScore++;
        }
    }
    //Check for Paper
    else if (playerChoose === "paper") {
        if (cRandom === "rock") {
            $("#status").text("Player Wins");
            pScore++;
        } else {
            $("#status").text("Computer Wins");
            cScore++;
        }
    }
    //Check for Scissors
    else if (playerChoose === "scissors") {
        if (cRandom === "paper") {
            $("#status").text("Player Wins");
            pScore++;
        } else {
            $("#status").text("Computer Wins");
            cScore++;
        }
    } else{console.log(err)};
}

//Check the Winner
function checkWinner() {
    if (pScore === 10 || cScore === 10) {
        const winner =
            pScore === 10 ?  $("#winner").text("You win the game") : $("#winner").text("Computer wins! Try again next time");
        console.log(winner);
        return true;

    }
    return false;


}