function playGame() {
    let humanScore = 0, computerScore = 0;

    function getComputerChoice() {
        let rand = Math.random();
        rand *= 3;
        rand = Math.floor(rand);

        switch (rand) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }

    function getHumanChoice() {
        return prompt("enter your choice:");
    }
    
    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a Tie! You both chose: " + humanChoice);
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    humanScore++;
                    console.log("You win! " + humanChoice + " beats " + computerChoice);
                } else if (computerChoice === "paper") {
                    computerScore++;
                    console.log("You lose! " + computerChoice + " beats " + humanChoice);
                }
                return;
            case "paper":
                if (computerChoice === "rock") {
                    humanScore++;
                    console.log("You win! " + humanChoice + " beats " + computerChoice);
                } else if (computerChoice === "scissors") {
                    computerScore++;
                    console.log("You lose! " + computerChoice + " beats " + humanChoice);
                }
                return;
            case "scissors":
                if (computerChoice === "paper") {
                    humanScore++;
                    console.log("You win! " + humanChoice + " beats " + computerChoice);
                } else if (computerChoice === "rock") {
                    computerScore++;
                    console.log("You lose! " + computerChoice + " beats " + humanChoice);
                }
                return;
        }
    }


    }

    for(let round = 0; round < 5; round++) {
        if (humanScore > 2 || computerScore > 2) {
            break;
        }

        console.log("ROUND " + (round + 1));

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("The opponent selected: " + computerSelection);

        playRound(humanSelection, computerSelection);

        console.log("The score is (user / computer): " + humanScore + " / " + computerScore);
    }
}

playGame();