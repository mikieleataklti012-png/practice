function player(name,mark){
    if(!new.target){
        throw new Error("error. use new to get the constructor");
    }
    this.name=name;
    this.mark=mark;
}

function person(name){
    this.name=name;
}

player.prototype.sayName= function(){
    console.log(`this is "${this.name}"`);
}

player.prototype.getMarker= function(){
    console.log(`marker is "${this.mark}"`);
}

Object.setPrototypeOf(player.prototype,person.prototype);

const player1= new player("miki","O");
const player2= new player("kal","X");

player1.sayName();
player2.getMarker();

console.log(Object.getPrototypeOf(player.prototype) === Object.prototype);
console.log(player2.valueOf());
console.log(Object.getPrototypeOf(player1) === player.prototype);