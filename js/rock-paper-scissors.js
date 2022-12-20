
var userChoice;
var userScore = 0;
var opponentChoice;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "../img/" + choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    userChoice = this.id;
    document.getElementById("your-choice").src = "../img/" + userChoice + ".png";

    //random for opponentChoice
    opponentChoice = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = "../img/" + opponentChoice + ".png";

    //check for winner
    if (userChoice == opponentChoice) {
        userScore += 1;
        opponentScore += 1;
    }
    else {
        if (userChoice == "rock") {
            if (opponentChoice == "scissors") {
                userScore += 1;
            }
            else if (opponentChoice == "paper") {
                opponentScore += 1;
            }
        }
        else if (userChoice == "scissors") {
            if (opponentChoice == "paper") {
                userScore += 1;
            }
            else if (opponentChoice == "rock") {
                opponentScore += 1;
            }
        }
        else if (userChoice == "paper") {
            if (opponentChoice == "rock") {
                userScore += 1;
            }
            else if (opponentChoice == "scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = userScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}