
function getComputerChoice(){
    const compuChoice = ['rock','paper','scissors'];
    const random = Math.floor(Math.random() * compuChoice.length)
    return compuChoice[random]

}

function playRound(){
    const playerSelection = prompt("Rock, Paper or Scissors?");
    console.log('player choice is ===', playerSelection);
    computerSelection = getComputerChoice();
    console.log('computer choice is ===', computerSelection);

    if(playerSelection === computerSelection){
        console.log('you got a tie')
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('you won!');
    } else if(playerSelection === 'scissors'&& computerSelection === 'paper'){
        console.log('you won!');
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('you won');
    }else{
        console.log('computer won')
    }
}
playRound();
