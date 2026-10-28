function reverse(word){
    let letters='';
    for(let i=word.length-1;i>=0;i--){
        letters+=word[i]
    }
    return letters;
}

let word='mikiele';
let reversed=reverse(word);
console.log(reversed);