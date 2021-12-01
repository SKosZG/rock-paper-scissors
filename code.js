function game(){
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
    
    function shout(){
        console.log(computerPlay())
    }

    const playerSelection = "rock";
    const computerSelection = computerPlay();
       
    function playRound(playerSelection, computerSelection){
        switch (playerSelection.toUpperCase()){
            case "ROCK":
                console.log("ROCK!!!!")
                break;
            case "PAPER":
                break;
            case "SCISSORS":
                break;
        }
    }

    playRound(playerSelection,computerSelection)
}


window.onload = game()