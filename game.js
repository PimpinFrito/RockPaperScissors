//TODO:
//Confirm playround() works fine x
//Add score keepingx
//Move all text from console to DOMx
//Anounce winner after reaching 5 points 
//Add clickable rock, paper, scissors

   const playerButtons = document.querySelectorAll('.choice');
   let runningScore = document.querySelector('#score');
   let info = document.querySelector('#info');


   let playerScore = 0;
   let computerScore = 0;
   let drawGames = 0;


   playerButtons.forEach(function(button){
    button.addEventListener('click', function(){play(button.id)});
});

   function hideOrShowButtons(){
        if (playerButtons[0].style.visibility=='visible'){
            playerButtons.forEach(function(button){button.style.visibility='hidden'})
        }else{
            playerButtons.forEach(function(button){button.style.visibility='visible'})
        }
   }

   runningScore.style.fontSize='3em';

   runningScore.textContent = 'test123';


function play(clickedChoice,){
    switch(playRound(clickedChoice)){
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
        runningScore.textContent=(`PlayerScore: ${playerScore} ComputerScore: ${computerScore}`) 
        if (playerScore ==5){
            runningScore.textContent+='You Win!';
        }

}
//function game(){
    //     const roundsToPlay = parseInt(prompt('How many rounds?'));
    //     let playerScore = 0;
    //     let computerScore = 0;
    //     let drawGames = 0;
        
    //     //If playerscore || computer < 5 then
    //     //playround else declare winner 
    //     // 
    
        
    
    
    //     for (let currentRound = 0; currentRound < roundsToPlay; currentRound++){
    //         runningScore.textContent=(`PlayerScore: ${playerScore} ComputerScore: ${ComputerScore}`)
    //         switch(playRound(playerChoice(), computerChoice())){
    //             case 0 : 
    //                 drawGames +=1; 
    //                 break;
    
    //             case 1 :    
    //                 playerScore+=1;
    //                 break;
    
    //             case 2:
    //                 computerScore+=1;
    //                 break;         
    //             }               
    //         }
    //         console.log(`Player score: ${playerScore}`);
    //         console.log(`Computer Score: ${computerScore}`);
    //         console.log(`Draw games: ${drawGames}`);
    
    //         if (computerScore > playerScore){
    //             console.log('Computer wins');
    //         }
    //         else if (playerScore > computerScore){
    //             console.log('Player wins');
    //         }
    //     }
    

//    function game(){
//     const roundsToPlay = parseInt(prompt('How many rounds?'));
//     let playerScore = 0;
//     let computerScore = 0;
//     let drawGames = 0;
    
//     //If playerscore || computer < 5 then
//     //playround else declare winner 
//     // 

    


//     for (let currentRound = 0; currentRound < roundsToPlay; currentRound++){
//         runningScore.textContent=(`PlayerScore: ${playerScore} ComputerScore: ${ComputerScore}`)
//         switch(playRound(playerChoice(), computerChoice())){
//             case 0 : 
//                 drawGames +=1; 
//                 break;

//             case 1 :    
//                 playerScore+=1;
//                 break;

//             case 2:
//                 computerScore+=1;
//                 break;         
//             }               
//         }
//         console.log(`Player score: ${playerScore}`);
//         console.log(`Computer Score: ${computerScore}`);
//         console.log(`Draw games: ${drawGames}`);

//         if (computerScore > playerScore){
//             console.log('Computer wins');
//         }
//         else if (playerScore > computerScore){
//             console.log('Player wins');
//         }
//     }

function playRound(playerSelection){
    console.log('Game Start');

    computerSelection = computerChoice();

    info.textContent =(`Player chose: ${playerSelection} Computer chose: ${computerSelection}`)
    console.log(`Player chose: ${playerSelection}`)
    console.log(`Computer chose: ${computerSelection}`)
    if (playerSelection == computerSelection){
        console.log('Draw game');
        console.log('');
        return 0;
    } else if(
            playerSelection == 'rock' && computerSelection == 'scissors' ||
            playerSelection == 'paper' && computerSelection == 'rock' ||
            playerSelection == 'scissors' && computerSelection == 'paper'){
                console.log(`${playerSelection} beats ${computerSelection}`);
                console.log('Player Wins')
                console.log('')
                return 1;
            }else{
                console.log(`${computerSelection} beats ${playerSelection}`);
                console.log('Computer Wins');
                console.log('')
                return 2;          
            }        
        }


function computerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

//game();