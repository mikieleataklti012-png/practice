export function add(a,b){
    return a+b;
}
export function mult(a,b){
    return a*b;
}
export function sub(a,b){
    return a-b;
}
export function div(a,b){
    if(b===0){
        console.log('undefined');
        return;
    }
    return a/b;
}
