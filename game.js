function game(){
    const roundsToPlay = parseInt(prompt('How many rounds?'));
    let playerScore = 0;
    let computerScore = 0;
    let drawGames = 0;

    for (let currentRound = 0; currentRound < roundsToPlay; currentRound++){
        switch(playRound(playerChoice(), computerChoice())){
            case 0 : 
                drawGames +=1;   
                break;

            case 1 :    
                playerScore+=1;
                break;

            case 2:
                computerScore+=1;
                break;         
            }               
        }
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Draw games: ${drawGames}`);

        if (computerScore > playerScore){
            console.log('Computer wins');
        }
        else if (playerScore > computerScore){
            console.log('Player wins');
        }
    }

function playRound(playerSelection, computerSelection,){
    console.log('Game Start');

    if (playerSelection == computerSelection){
        console.log('Draw game');
        console.log('');
        return 0;
    } else if(
            playerSelection == 'rock' && computerSelection == 'scissors' ||
            playerSelection == 'paper' && computerSelection == 'rock' ||
            playerSelection == 'scissors' && computerSelection == 'paper'){
                console.log('Player Wins')
                console.log(`${playerSelection} beats ${computerSelection}`);
                console.log('')
                return 1;
            }else{
                console.log('Computer Wins');
                console.log(`${computerSelection} beats ${playerSelection}`);
                console.log('')
                return 2;          
            }        
        }

function playerChoice(){
    // let playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
    return playerSelection;
}

function computerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

game();