function ceasar(word,x){
    let letter='';
    let ciphired='';
    for(let i=0;i<word.length;i++){
        letter=word[i];
        let code=letter.charCodeAt(0);
        let shift=code+x;
        if(code>=65 && code<=90){
            if(shift>90){
                shift-=26;
            }
            ciphired+=String.fromCharCode(shift);
        }
        if(code>=97 && code<=122){
            if(shift>122){
                shift-=26;
            }
            ciphired+=String.fromCharCode(shift);
        }
        else{
            ciphired+=String.fromCharCode(shift);
        }
    }
    return ciphired;
}
let word='mikiele';
let x=3;
let cipher=ceasar(word,x);
console.log(cipher);