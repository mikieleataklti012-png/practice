function confirmPassword(event){
    event.preventDefault();

    let password=document.getElementById('password');
    let comfirmpass=document.getElementById('confirm');
    let error=document.querySelector('.error');
    if(comfirmpass.value===password.value){
        error.textContent="sign up successful";
    }
    else{
        error.textContent="Password and Confirm Password dont match please do it again";
    }
}

let btn=document.getElementById('btn');
btn.addEventListener('click',confirmPassword);