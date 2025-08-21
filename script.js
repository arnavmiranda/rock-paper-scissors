function playGame() {
    let humanScore = 0, computerScore = 0;

    const container = document.createElement("div");
    const scoreDisplay = document.createElement("h1");
    scoreDisplay.textContent = humanScore + " : " + computerScore;
    container.appendChild(scoreDisplay);

    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "rock";
    paper.textContent = "paper";
    scissors.textContent = "scissors";

    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);

    const para = document.createElement("p");
    container.appendChild(para);  
    
    document.body.appendChild(container);
    
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

    
    function playRound(humanChoice, computerChoice) {    
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            para.textContent = "It's a Tie! You both chose: " + humanChoice;
        } else {
            switch (humanChoice) {
                case "rock":
                    if (computerChoice === "scissors") {
                        humanScore++;
                        para.textContent = "You win! " + humanChoice + " beats " + computerChoice;
                    } else if (computerChoice === "paper") {
                        computerScore++;
                        para.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
                    }
                    break;
                case "paper":
                    if (computerChoice === "rock") {
                        humanScore++;
                        para.textContent = "You win! " + humanChoice + " beats " + computerChoice;
                    } else if (computerChoice === "scissors") {
                        computerScore++;
                        para.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
                    }
                    break;
                case "scissors":
                    if (computerChoice === "paper") {
                        humanScore++;
                        para.textContent = "You win! " + humanChoice + " beats " + computerChoice;
                    } else if (computerChoice === "rock") {
                        computerScore++;
                        para.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
                    }
                    break;
                }
            scoreDisplay.textContent = humanScore + " : " + computerScore;
                
            if (Math.max(humanScore, computerScore) === 5) {
                rock.remove();
                paper.remove();
                scissors.remove();
                para.textContent = "\nGAME OVER";
            }
            return;
        }         
    }

    
}

playGame();