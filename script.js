
function getComputerChoice(){
    const compuChoice = ['rock','paper','scissors'];
    const random = Math.floor(Math.random() * compuChoice.length)
    return compuChoice[random]
}



const buttons = document.querySelectorAll('button');
console.log(buttons);

let playerSelection = "";

buttons.forEach(button=>button.addEventListener('click',(e)=>{
    let count =0;
   
    playerSelection = e.target.value
    console.log("player's choice is :",playerSelection);
    document.getElementById('output').innerHTML = playerSelection;
    // output.innerText='innocent';
    const computerSelection = getComputerChoice()
    console.log("computer's choice is :", computerSelection);
    document.getElementById('computer').innerHTML = computerSelection;
   
   
    if(playerSelection === computerSelection){
        console.log('you got a tie')
        document.getElementById('result').innerHTML = "It's a tie!";
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('you won!');
        document.getElementById('result').innerHTML = 'You won!';
    } else if(playerSelection === 'scissors'&& computerSelection === 'paper'){
        console.log('you won!');
        document.getElementById('result').innerHTML = 'You won!';
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('you won');
        document.getElementById('result').innerHTML = 'You won!';
    }else{
        console.log('computer won')
        document.getElementById('result').innerHTML = 'Computer won!';
    }
    
   
})
)

