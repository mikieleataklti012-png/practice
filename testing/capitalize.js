function capitalize(word){
    let firstLetter=word[0];
    let letters=[]
    firstLetter=firstLetter.toUpperCase();

    for(let i=0;i<word.length;i++){
        letters[i]=word[i];
    }

    letters[0]=firstLetter;
    return letters.join('');

}
export default capitalize;

let word="mikiele";
let lets=capitalize(word);
console.log(lets);