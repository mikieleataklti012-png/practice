let round=document.getElementById('play');
round.addEventListener('click',playGame);

let hScore=0;
let cScore=0;

function playGame(){

    let div=document.createElement('div');
    div.classList.add('game');

    let p=document.createElement('p');
    p.textContent='choose your option';
    div.appendChild(p);

    let rock=document.createElement('button');
    rock.textContent='rock';
    div.appendChild(rock);
    
    let paper=document.createElement('button');
    paper.textContent='paper';
    div.appendChild(paper);
    
    let scissors=document.createElement('button');  
    scissors.textContent='scissors';
    div.appendChild(scissors);
    document.body.appendChild(div);

    scissors.addEventListener('click',()=>{playRound('scissors');});
    rock.addEventListener('click',()=>{playRound('rock');});
    paper.addEventListener('click',()=>{playRound('paper');});
    
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

function humanScore(){
    hScore++;
}

function computerScore(){
    cScore++;
}

function playRound(humanChoice){

    let computerChoice=getComputerChoice();
    let winner;

    if(humanChoice=='rock'){
        if(computerChoice=='rock'){
            winner='TIE';
        }
        else if(computerChoice=='paper'){
            winner='COMPUTER WINS';
            computerScore();
        }
        else if(computerChoice=='scissors'){
            winner='YOU WIN';
            humanScore();
        }
    }
    else if(humanChoice=='paper'){
        if(computerChoice=='rock'){
            winner='YOU WIN';
            humanScore();
        }
        else if(computerChoice=='scissors'){
            winner='COMPUTER WINS';
            computerScore();
        }
        else if(computerChoice=='paper'){
            winner='TIE';
        }
    }
    else if(humanChoice=='scissors'){
        if(computerChoice=='rock'){
            winner='COMPUTER WINS';
            computerScore();
        }
        else if(computerChoice=='paper'){
            winner='YOU WIN';
            humanScore();
        }
        else if(computerChoice=='scissors'){
            winner='TIE';
        }
    }
    
    let scorebord=document.createElement('div');
    scorebord.classList.add('view');

    let score=document.createElement('p');
    let choice=document.createElement('p');
    score.style.whiteSpace = 'pre-line';
    choice.textContent='YOUR CHOICE ='+humanChoice+', COMPUTER CHOICE ='+computerChoice;
    score.textContent=winner + '\n \n' + ' YOUR SCORE='+hScore+', COMPUTER SCORE='+cScore;
    scorebord.appendChild(choice);
    scorebord.appendChild(score);
    document.body.appendChild(scorebord);

    if (hScore==3){
        alert('Congratulations! You won the game!');
        resetGame();
    }

    else if(cScore==3){
        alert('Sorry! Computer won the game!');
        resetGame();
    }

}

function resetGame(){
    let resetButtons=document.querySelector('.game');
    let resetScorebord=document.querySelectorAll('.view');

    if(resetButtons){
        resetButtons.remove();
    }

    resetScorebord.forEach(scorebord=>scorebord.remove());
    hScore=0;
    cScore=0;
}

