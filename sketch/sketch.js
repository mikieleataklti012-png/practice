let button=document.getElementById("set");
button.addEventListener("click",function(){
    let size=prompt("Enter how many squares you want per side");
    createGrid(size);
});

let container=document.getElementById("container");
let square=document.createElement("div");
square.classList.add("square");
container.appendChild(square);

container.style.display='flex';
container.style.flexWrap='wrap';
container.style.width='600px';
container.style.height='600px';
container.style.alignItems='center';
container.style.justifyContent='center';

document.body.appendChild(container);
document.body.style.display='flex';
document.body.style.flexDirection='column';
document.body.style.justifyContent='center';
document.body.style.alignItems='center';
defualtGrid();

function defualtGrid(){
    size=16;
    createGrid(size);
}

function createGrid(size){
    gridSquares=document.querySelectorAll('.gridSquare');
    gridSquares.forEach(gridSquare=>gridSquare.remove());

    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            let gridSquare=document.createElement('div');
            gridSquare.classList.add('gridSquare');

            gridSquare.style.boxSizing="border-box";
            gridSquare.style.width=`${600/size}px`;
            gridSquare.style.height=`${600/size}px`;
            gridSquare.style.border="1px solid black";

           gridSquare.addEventListener("mouseover",function(){
                gridSquare.style.backgroundColor="blue";
            });

            container.appendChild(gridSquare);
        }
    }
}
