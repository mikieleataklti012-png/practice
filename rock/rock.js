let hScore=0;
let cScore=0;
function playGame(){
    console.log('welcome to the rock paper and scissors game');
    for(let i=1;i<=5;i++){
        playRound();
        console.log('The score is');
        console.log('You :'+ hScore +'  ' + 'computer :' + cScore);
    }
}

function getComputerChoice(){
    let max=3,min=1;
    let com=Math.floor(Math.random()*(max-min+1)+1);
    if(com==1){
        return "rock";
    }
    else if(com==2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let hum=prompt("pick your choice rock, paper or scissors");
    return hum;
}

function humanScore(){
    hScore++;
}

function computerScore(){
    cScore++;
}

function playRound(){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    if(humanChoice.toLowerCase()=='rock'){
        if(computerChoice=='rock'){
            console.log('computer`s choice ='+computerChoice);
            console.log( 'Tie');
        }
        else if(computerChoice=='paper'){
            console.log('computer`s choice ='+computerChoice);
            computerScore();
           console.log( 'You lose');
        }
        else if(computerChoice=='scissors'){
            console.log('computer`s choice ='+computerChoice);
            humanScore();
            console.log('You win');
        }
    }
    else if(humanChoice.toLowerCase()=='paper'){
        if(computerChoice=='rock'){
            console.log('computer`s choice ='+computerChoice);
            humanScore();
           console.log( 'You win');
        }
        else if(computerChoice=='paper'){
            console.log('computer`s choice ='+computerChoice);
           console.log('Tie');
        }
        else if(computerChoice=='scissors'){
            console.log('computer`s choice ='+computerChoice);
            computerScore();
           console.log('You lose');
        }
    }
    else if(humanChoice.toLowerCase()=='scissors'){
        if(computerChoice=='rock'){
            console.log('computer`s choice ='+computerChoice);
            computerScore();
           console.log('You lose');
        }
        else if(computerChoice=='paper'){
            console.log('computer`s choice ='+computerChoice);
            humanScore();
            console.log('You win');
        }
        else if(computerChoice=='scissors'){
            console.log('computer`s choice ='+computerChoice);
            console.log('Tie');
        }
    }
}
playGame();

