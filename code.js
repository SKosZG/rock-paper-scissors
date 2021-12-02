function game() {
            //score
            let playerPoints = 0
            let computerPoints = 0
    function play(){
        function computerPlay(){
            switch(parseInt(Math.random()*10)%3+1) {
                case 1:
                    return "Rock";
                    break;
                case 2:
                    return "Paper";
                    break;
                case 3:
                    return "Scissors";
                    break;
            }
        }
       
        let playerSelection = prompt("Please choose Rock, Paper or Scissors").toUpperCase();
        while (["ROCK","PAPER","SCISSORS"].indexOf(playerSelection) === -1) {
            playerSelection = prompt("Please choose Rock, Paper or Scissors").toUpperCase();
        }
    
        const computerSelection = computerPlay();
        // test log
        console.log(`Player has selected ${playerSelection}`)
        console.log(`Computer has selected ${computerSelection}`)
    

        
        function playRound(playerSelection, computerSelection){
            switch (playerSelection.toUpperCase()){
                case "ROCK":
                    switch (computerSelection.toUpperCase()){
                        case "ROCK":
                            console.log("Tie!");
                            break;
                        case "PAPER":
                            console.log("You lose! Paper beats Rock");
                            return computerPoints+=1;
                            break;
                        case "SCISSORS":
                            console.log("You win! Rock beats Scissors");
                            return playerPoints+=1;
                            break;
                    }
                    break;
                case "PAPER":
                    switch (computerSelection.toUpperCase()){
                        case "ROCK":
                            console.log("You win! Paper beats Rock");
                            return playerPoints+=1;
                            break;
                        case "PAPER":
                            console.log("Tie");
                            break;
                        case "SCISSORS":
                            console.log("You lose! Scissors beat Paper");
                            return computerPoints+=1;
                            break;
                    }
                    break;
                case "SCISSORS":
                    switch (computerSelection.toUpperCase()){
                        case "ROCK":
                            console.log("You lose! Rock beats Scissors");
                            return computerPoints+=1;
                            break;
                        case "PAPER":
                            console.log("You win! Scissors beat Paper");
                            return playerPoints+=1;
                            break;
                        case "SCISSORS":
                            console.log("Tie");
                            break;
                    }
                    break;
            }   
        }
        playRound(playerSelection, computerSelection)
        console.log(playerPoints)
    }

    let i = 0
        
    while (playerPoints < 3 && computerPoints < 3 && i < 5) {
        play();
        i+=1;
        console.log(`Round ${i} = Player points: ${playerPoints}, Computer points: ${computerPoints}`)
    }

    if (playerPoints > computerPoints) {
        alert("You won!");
    } else if (computerPoints > playerPoints) {
        alert("You lost!");
    } else {
        alert("It's a tie!");
    }
    game();
}


window.onload = game()