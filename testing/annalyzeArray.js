function maximum(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(i===arr.length){
            break;
        }
        if(max<arr[i+1]){
            max=arr[i+1];
        }
    }
    return max;
    // this part is true
}

function minimum(arr){
    let  min=arr[0];
     for(let i=0;i<arr.length;i++){
        if(i===arr.length){
            break;
        }
        if(min>arr[i+1]){
            min=arr[i+1];
        }
    }
    return min; 
}

function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log('sum is:'+sum)
    if(arr.length!==0){
        let avg=sum/arr.length;
        return avg;
    }
    else{console.log('undefined')}
}

function leng(arr){
    return arr.length;
}
