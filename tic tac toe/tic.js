function player(name, marker) {
    return { name, marker };
}
function playRound(){
    let name1=prompt("Enter name for player 1")||"Player 1";
    let player1= player(name1, "X");
    let name2=prompt("Enter name for player 2")||"Player 2";
    let player2= player(name2, "O");

    let div=document.createElement('div');
    div.classList.add('turn');
    let paragraph=document.createElement('p');
    paragraph.textContent=`${player1.name} turn`;
    div.appendChild(paragraph);
    document.body.appendChild(div);

    let turn=0;
    let buttons=document.querySelectorAll('.gameboard button');
    buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(button.textContent===""){
            if(turn%2===0){
                button.textContent=player1.marker;
                paragraph.textContent=`${player2.name} turn`;
            }
            else{
                button.textContent=player2.marker;
                paragraph.textContent=`${player1.name} turn`;
            }
            turn++;
        }
        else{
            alert("This cell is already taken. Please choose another one.");
        }

        let winner;
    
        if(buttons[0].textContent===buttons[1].textContent && buttons[1].textContent===buttons[2].textContent && buttons[0].textContent!==""){
            winner=buttons[0].textContent==="X"?player1.name:player2.name;
            alert(`Game over! ${winner} wins!`);
            restart();
        }
        else if(buttons[3].textContent===buttons[4].textContent && buttons[4].textContent===buttons[5].textContent && buttons[3].textContent!==""){
            winner=buttons[3].textContent==="X"?player1.name:player2.name;
            alert(`Game over! ${winner} wins!`);
            restart();
        }
        else if(buttons[6].textContent===buttons[7].textContent && buttons[7].textContent===buttons[8].textContent && buttons[6].textContent!==""){
            winner=buttons[6].textContent==="X"?player1.name:player2.name;
            alert(`Game over! ${winner} wins!`);
            restart();
        }
        else if(buttons[0].textContent===buttons[3].textContent && buttons[3].textContent===buttons[6].textContent && buttons[0].textContent!==""){
            winner=buttons[0].textContent==="X"?player1.name:player2.name;
            alert(`Game over! ${winner} wins!`);
            restart();
        }
        else if(buttons[1].textContent===buttons[4].textContent && buttons[4].textContent===buttons[7].textContent && buttons[1].textContent!==""){
            winner=buttons[1].textContent==="X"?player1.name:player2.name;
            alert(`Game over! ${winner} wins!`);
            restart();
        }
        else if(buttons[2].textContent===buttons[5].textContent && buttons[5].textContent===buttons[8].textContent && buttons[2].textContent!==""){
            winner=buttons[2].textContent==="X"?player1.name:player2.name;
            alert(`Game over! ${winner} wins!`);
            restart();
        }
        else if(buttons[0].textContent===buttons[4].textContent && buttons[4].textContent===buttons[8].textContent && buttons[0].textContent!==""){
            winner=buttons[0].textContent==="X"?player1.name:player2.name;
            alert(`Game over! ${winner} wins!`);
            restart();
        }
        else if(buttons[2].textContent===buttons[4].textContent && buttons[4].textContent===buttons[6].textContent && buttons[2].textContent!==""){
            winner=buttons[2].textContent==="X"?player1.name:player2.name;
            alert(`Game over! ${winner} wins!`);
            restart();
        }
        else if(turn===9){
            alert("Game over! It's a draw.");
            restart();
        }
    })
    })
}
function restart(){
    let button=document.querySelector('.play');
    button.textContent="Restart";
    let turn=document.querySelector('.turn');
    turn.remove();
}

function CreateGameBoard() {
    
    let gameBoard = document.querySelector('.gameboard');
    if(!gameBoard){
        gameBoard=document.createElement('div');
        gameBoard.classList.add('gameboard');
        document.body.appendChild(gameBoard);
    }
    else if(gameBoard){
        gameBoard.remove();
    }
    gameBoard.innerHTML=`
    <button class="but a"></button>
    <button class="but b"></button>
    <button class="but c"></button>
    <button class="but d"></button>
    <button class="but e"></button>
    <button class="but f"></button>
    <button class="but g"></button>
    <button class="but h"></button>
    <button class="but i"></button>
    `
    playRound();
}

let btn= document.querySelector('.play');
btn.addEventListener('click',()=>{
    CreateGameBoard();
    btn.textContent= 'Restart';
});